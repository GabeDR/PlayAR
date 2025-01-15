import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function EditPlay({ params }: { params: { slug: string } }) {
    // Convert slug back to play name
    const playName = params.slug.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');

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
                        <h1 className="text-4xl font-bold mb-2">Edit Play: {playName}</h1>
                        <p className="text-gray-600">Modify play settings and configurations</p>
                    </div>
                </div>

                {/* Edit Form */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Play Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                defaultValue={playName}
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
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                defaultValue="Enter play description..."
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
                                defaultValue="5"
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
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="spread">Spread</option>
                                <option value="i-formation">I-Formation</option>
                                <option value="shotgun">Shotgun</option>
                                <option value="pistol">Pistol</option>
                                <option value="single-back">Single Back</option>
                            </select>
                        </div>

                        <div className="flex justify-end gap-4">
                            <Link
                                href="/plays"
                                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
} 