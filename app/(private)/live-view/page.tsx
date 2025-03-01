import ClientImage from "@/app/(public)/client-image";

export default function LiveView() {
    return (
        <div className="max-w-7xl mx-auto px-8 py-12">
            <div className="flex flex-col gap-8">
                {/* Header */}
                <div>
                    <h1 className="text-4xl font-bold mb-2">Live Training Session</h1>
                    <p className="text-gray-600">Real-time performance monitoring and analysis</p>
                </div>

                {/* Live Feed */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">Live Feed</h2>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                            Live
                        </span>
                    </div>
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <ClientImage />
                    </div>
                </div>
            </div>
        </div>
    );
}