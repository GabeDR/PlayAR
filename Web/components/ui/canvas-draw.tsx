import type { MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";
import { useRef, useState, useEffect } from "react";

interface Point {
    x: number;
    y: number;
}

interface Line {
    points: Point[];
    color: string;
    width: number;
}

interface CanvasDrawProps {
    width?: number;
    height?: number;
    backgroundColor?: string;
    lineColor?: string;
    lineWidth?: number;
    onSave?: (dataUrl: string) => void;
}

export function CanvasDraw({
    width = 800,
    height = 600,
    backgroundColor = "#ffffff",
    lineColor = "#000000",
    lineWidth = 3,
    onSave,
}: CanvasDrawProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lines, setLines] = useState<Line[]>([]);
    const [currentLine, setCurrentLine] = useState<Line>({ points: [], color: lineColor, width: lineWidth });

    // Initialize canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        canvas.width = width;
        canvas.height = height;

        // Fill background
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw all lines
        drawLines(ctx, lines);
    }, [width, height, backgroundColor, lines]);

    // Draw all lines on the canvas
    const drawLines = (ctx: CanvasRenderingContext2D, lines: Line[]) => {
        for (const line of lines) {
            if (line.points.length < 2) continue;

            ctx.beginPath();
            ctx.moveTo(line.points[0].x, line.points[0].y);

            for (let i = 1; i < line.points.length; i++) {
                ctx.lineTo(line.points[i].x, line.points[i].y);
            }

            ctx.strokeStyle = line.color;
            ctx.lineWidth = line.width;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.stroke();
        }
    };

    // Get coordinates relative to canvas
    const getCoordinates = (event: ReactMouseEvent | ReactTouchEvent | TouchEvent | MouseEvent): Point | null => {
        const canvas = canvasRef.current;
        if (!canvas) return null;

        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;

        if ('touches' in event) {
            // Touch event
            const touch = event.touches[0];
            return {
                x: (touch.clientX - rect.left) * scaleX,
                y: (touch.clientY - rect.top) * scaleY,
            };
        }

        // Mouse event
        return {
            x: ((event as MouseEvent).clientX - rect.left) * scaleX,
            y: ((event as MouseEvent).clientY - rect.top) * scaleY,
        };
    };

    // Start drawing
    const startDrawing = (event: ReactMouseEvent | ReactTouchEvent) => {
        const point = getCoordinates(event);
        if (!point) return;

        setIsDrawing(true);
        setCurrentLine({ points: [point], color: lineColor, width: lineWidth });
    };

    // Continue drawing
    const draw = (event: ReactMouseEvent | ReactTouchEvent | TouchEvent) => {
        if (!isDrawing) return;

        const point = getCoordinates(event);
        if (!point) return;

        setCurrentLine((prev) => {
            const newLine = { ...prev, points: [...prev.points, point] };

            // Draw the current line
            const canvas = canvasRef.current;
            if (canvas) {
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    ctx.beginPath();

                    if (prev.points.length > 0) {
                        const prevPoint = prev.points[prev.points.length - 1];
                        ctx.moveTo(prevPoint.x, prevPoint.y);
                        ctx.lineTo(point.x, point.y);
                        ctx.strokeStyle = lineColor;
                        ctx.lineWidth = lineWidth;
                        ctx.lineCap = "round";
                        ctx.lineJoin = "round";
                        ctx.stroke();
                    }
                }
            }

            return newLine;
        });
    };

    // Stop drawing
    const stopDrawing = () => {
        if (!isDrawing) return;

        setIsDrawing(false);
        setLines((prev) => [...prev, currentLine]);
        setCurrentLine({ points: [], color: lineColor, width: lineWidth });

        // Auto-save when stopping drawing
        if (onSave) {
            const canvas = canvasRef.current;
            if (canvas) {
                onSave(canvas.toDataURL("image/png"));
            }
        }
    };

    // Clear canvas
    const clearCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        setLines([]);
        setCurrentLine({ points: [], color: lineColor, width: lineWidth });
    };

    // Add event listeners for touch devices
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Use proper DOM event types for the event listeners
        const handleTouchMove = (e: globalThis.TouchEvent) => {
            e.preventDefault();
            if (!isDrawing) return;
            draw(e as unknown as TouchEvent);
        };

        const handleTouchEnd = () => {
            stopDrawing();
        };

        canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
        canvas.addEventListener("touchend", handleTouchEnd);

        return () => {
            canvas.removeEventListener("touchmove", handleTouchMove);
            canvas.removeEventListener("touchend", handleTouchEnd);
        };
    }, [isDrawing, draw, stopDrawing]);

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
                <canvas
                    ref={canvasRef}
                    onMouseDown={startDrawing}
                    onMouseMove={isDrawing ? draw : undefined}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    className="touch-none"
                    style={{ maxWidth: "100%" }}
                />
            </div>
            <button
                type="button"
                onClick={clearCanvas}
                className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
            >
                Clear
            </button>
        </div>
    );
} 