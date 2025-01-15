import ClientImage from "@/app/(public)/client-image";
import { Activity, Eye, Brain, Zap } from 'lucide-react';

export default function LiveView() {
    return (
        <div className="max-w-7xl mx-auto px-8 py-12">
            <div className="flex flex-col gap-8">
                {/* Header */}
                <div>
                    <h1 className="text-4xl font-bold mb-2">Live Training Session</h1>
                    <p className="text-gray-600">Real-time performance monitoring and analysis</p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border">
                        <div className="flex items-center gap-3 mb-4">
                            <Activity className="w-5 h-5 text-blue-600" />
                            <h3 className="font-semibold">Heart Rate</h3>
                        </div>
                        <p className="text-3xl font-bold">142 <span className="text-sm text-gray-500">bpm</span></p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border">
                        <div className="flex items-center gap-3 mb-4">
                            <Eye className="w-5 h-5 text-blue-600" />
                            <h3 className="font-semibold">Focus Score</h3>
                        </div>
                        <p className="text-3xl font-bold">92<span className="text-sm text-gray-500">%</span></p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border">
                        <div className="flex items-center gap-3 mb-4">
                            <Brain className="w-5 h-5 text-blue-600" />
                            <h3 className="font-semibold">Decision Time</h3>
                        </div>
                        <p className="text-3xl font-bold">0.45<span className="text-sm text-gray-500">s</span></p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border">
                        <div className="flex items-center gap-3 mb-4">
                            <Zap className="w-5 h-5 text-blue-600" />
                            <h3 className="font-semibold">Energy Level</h3>
                        </div>
                        <p className="text-3xl font-bold">85<span className="text-sm text-gray-500">%</span></p>
                    </div>
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