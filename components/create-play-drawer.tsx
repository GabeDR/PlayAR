import { useState } from "react";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerFooter
} from "@/components/ui/drawer";
import { CanvasDraw } from "@/components/ui/canvas-draw";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckIcon } from "@radix-ui/react-icons";

interface CreatePlayDrawerProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onPlayCreated?: (play: { name: string; description: string; image: string }) => void;
}

export function CreatePlayDrawer({ open, onOpenChange, onPlayCreated }: CreatePlayDrawerProps) {
    const [playName, setPlayName] = useState("");
    const [playDescription, setPlayDescription] = useState("");
    const [playImage, setPlayImage] = useState<string | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);

    const handleSavePlay = () => {
        if (!playName || !playImage) return;

        if (onPlayCreated) {
            onPlayCreated({
                name: playName,
                description: playDescription,
                image: playImage,
            });
        }

        // Reset form
        setPlayName("");
        setPlayDescription("");
        setPlayImage(null);
        onOpenChange(false);
    };

    const handleCanvasImageSave = (dataUrl: string) => {
        setPlayImage(dataUrl);
        setIsDrawing(false);
    };

    const startDrawing = () => {
        setIsDrawing(true);
    };

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent className="h-[70vh] max-h-[70vh] overflow-hidden flex flex-col bg-white">
                <DrawerHeader className="border-b pb-4">
                    <h2 className="text-2xl font-bold">Create New Play</h2>
                </DrawerHeader>

                <div className="px-6 py-4 overflow-y-auto flex-1">
                    <div className="space-y-6 max-w-3xl mx-auto">
                        <div className="space-y-2">
                            <label htmlFor="play-name" className="text-sm font-medium">
                                Play Name
                            </label>
                            <Input
                                id="play-name"
                                value={playName}
                                onChange={(e) => setPlayName(e.target.value)}
                                placeholder="Enter play name"
                                className="w-full"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="play-description" className="text-sm font-medium">
                                Description
                            </label>
                            <Input
                                id="play-description"
                                value={playDescription}
                                onChange={(e) => setPlayDescription(e.target.value)}
                                placeholder="Enter play description"
                                className="w-full"
                            />
                        </div>

                        {!isDrawing && (
                            <div className="space-y-2">
                                <label className="text-sm font-medium">
                                    Play Diagram
                                </label>
                                {playImage ? (
                                    <div className="space-y-4">
                                        <div className="border border-gray-200 rounded-lg p-2 bg-white">
                                            <img
                                                src={playImage}
                                                alt="Play diagram"
                                                className="max-w-full h-auto rounded"
                                            />
                                        </div>
                                        <Button
                                            variant="outline"
                                            onClick={startDrawing}
                                            className="w-full"
                                        >
                                            Edit Diagram
                                        </Button>
                                    </div>
                                ) : (
                                    <Button
                                        onClick={startDrawing}
                                        className="w-full h-20"
                                    >
                                        Draw Play Diagram
                                    </Button>
                                )}
                            </div>
                        )}

                        {isDrawing && (
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-medium">
                                        Draw Play
                                    </label>
                                    <Button
                                        size="sm"
                                        onClick={() => setIsDrawing(false)}
                                        variant="outline"
                                    >
                                        Cancel
                                    </Button>
                                </div>
                                <div className="bg-white rounded-lg p-4 border border-gray-200">
                                    <CanvasDraw
                                        width={600}
                                        height={400}
                                        backgroundColor="#ffffff"
                                        onSave={handleCanvasImageSave}
                                    />
                                    <div className="flex justify-end mt-4">
                                        <Button
                                            onClick={handleCanvasImageSave}
                                            className="flex items-center gap-2"
                                        >
                                            <CheckIcon />
                                            Done
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <DrawerFooter className="px-6 py-4 border-t bg-gray-50">
                    <div className="flex justify-end gap-3">
                        <Button
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSavePlay}
                            disabled={!playName || !playImage}
                        >
                            Save Play
                        </Button>
                    </div>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
} 