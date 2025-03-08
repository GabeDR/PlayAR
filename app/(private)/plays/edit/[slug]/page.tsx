export const runtime = 'edge'

"use client"

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CanvasDraw } from '@/components/ui/canvas-draw';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function EditPlay({ params }: { params: { slug: string } }) {
    const router = useRouter();
    // Convert slug back to play name
    const playName = params.slug.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');

    const [name, setName] = useState(playName);
    const [description, setDescription] = useState("Enter play description...");
    const [players, setPlayers] = useState(5);
    const [formation, setFormation] = useState("spread");
    const [playImage, setPlayImage] = useState<string | null>(null);

    // In a real app, you would fetch the play data from an API
    // For now, we'll simulate that with a useEffect
    useEffect(() => {
        // Simulate fetching play data
        // In a real app, this would be an API call
        const fetchPlayData = () => {
            // Simulated data
            setName(playName);
            setDescription("Enter play description...");
            setPlayers(5);
            setFormation("spread");
            // In a real app, you would set the image from the API response
            setPlayImage(null);
        };

        fetchPlayData();
    }, [playName]);

    const handleCanvasImageSave = (dataUrl: string) => {
        setPlayImage(dataUrl);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // In a real app, you would save the data to an API
        // For now, we'll just navigate back to the plays page
        router.push('/plays');
    };

    return (
        <div className="max-w-7xl mx-auto px-8 py-12">
            <div className="flex flex-col gap-8">
                {/* Header with Back Button */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/plays"
                        className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div>
                        <h1 className="text-4xl font-bold mb-2">Edit Play: {name}</h1>
                        <p className="text-gray-600">Modify play settings and configurations</p>
                    </div>
                </div>

                {/* Edit Form */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Play Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={4}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="players" className="block text-sm font-medium text-gray-700 mb-2">
                                        Number of Players
                                    </label>
                                    <input
                                        type="number"
                                        id="players"
                                        name="players"
                                        min="1"
                                        max="11"
                                        value={players}
                                        onChange={(e) => setPlayers(Number.parseInt(e.target.value))}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="formation" className="block text-sm font-medium text-gray-700 mb-2">
                                        Formation
                                    </label>
                                    <select
                                        id="formation"
                                        name="formation"
                                        value={formation}
                                        onChange={(e) => setFormation(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="spread">Spread</option>
                                        <option value="i-formation">I-Formation</option>
                                        <option value="shotgun">Shotgun</option>
                                        <option value="pistol">Pistol</option>
                                        <option value="single-back">Single Back</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Play Diagram
                                </label>
                                <div className="bg-white rounded-lg p-4 border border-gray-200">
                                    <CanvasDraw
                                        width={400}
                                        height={350}
                                        backgroundColor="#ffffff"
                                        onSave={handleCanvasImageSave}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-4">
                            <Link
                                href="/plays"
                                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                            >
                                Cancel
                            </Link>
                            <Button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
} 