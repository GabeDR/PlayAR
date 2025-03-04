import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle
} from "@/components/ui/dialog";
import { CanvasDraw } from "@/components/ui/canvas-draw";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CreatePlayDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onPlayCreated?: (play: { name: string; description: string; image: string }) => void;
}

export function CreatePlayDialog({ open, onOpenChange, onPlayCreated }: CreatePlayDialogProps) {
    const [playName, setPlayName] = useState("");
    const [playDescription, setPlayDescription] = useState("");
    const [playImage, setPlayImage] = useState<string | null>(null);

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
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl bg-white p-0 overflow-hidden">
                <DialogHeader className="p-6 border-b">
                    <DialogTitle className="text-2xl font-bold">Create New Play</DialogTitle>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                    {/* Form Fields */}
                    <div className="space-y-6">
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
                    </div>

                    {/* Drawing Canvas */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Draw Play
                        </label>
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <CanvasDraw
                                width={350}
                                height={300}
                                backgroundColor="#ffffff"
                                onSave={handleCanvasImageSave}
                            />
                        </div>
                    </div>
                </div>

                <DialogFooter className="p-6 border-t bg-gray-50">
                    <div className="flex justify-end gap-3 w-full">
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
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
} 