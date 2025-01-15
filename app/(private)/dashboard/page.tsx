import { ArrowUpRight, Activity, Users, Target, Clock } from "lucide-react";

export default function Dashboard() {
    return (
        <div className="max-w-7xl mx-auto px-8 py-12">
            <div className="flex flex-col gap-8">
                {/* Header */}
                <div>
                    <h1 className="text-4xl font-bold mb-2">Welcome to PlayAR Dashboard</h1>
                    <p className="text-gray-600">Pine Crest School Training Center</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border">
                        <div className="flex justify-between items-start mb-4">
                            <Activity className="w-8 h-8 text-blue-600" />
                            <span className="text-sm text-gray-500">Last 30 days</span>
                        </div>
                        <p className="text-2xl font-bold mb-1">78%</p>
                        <p className="text-gray-600">Pass Completion Rate</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border">
                        <div className="flex justify-between items-start mb-4">
                            <Clock className="w-8 h-8 text-blue-600" />
                            <span className="text-sm text-gray-500">Average</span>
                        </div>
                        <p className="text-2xl font-bold mb-1">0.45s</p>
                        <p className="text-gray-600">Reaction Time</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border">
                        <div className="flex justify-between items-start mb-4">
                            <Target className="w-8 h-8 text-blue-600" />
                            <span className="text-sm text-gray-500">Success Rate</span>
                        </div>
                        <p className="text-2xl font-bold mb-1">23/30</p>
                        <p className="text-gray-600">Completed Catches</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border">
                        <div className="flex justify-between items-start mb-4">
                            <Users className="w-8 h-8 text-blue-600" />
                            <span className="text-sm text-gray-500">Per Game</span>
                        </div>
                        <p className="text-2xl font-bold mb-1">12</p>
                        <p className="text-gray-600">Defensive Disruptions</p>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold">Recent Plays</h2>
                            <a href="/plays" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                                View all <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>
                        <div className="space-y-4">
                            {[
                                { name: "Smash", date: "2024-01-01", success: "85%" },
                                { name: "Flood", date: "2024-01-02", success: "92%" },
                                { name: "Mesh", date: "2024-01-03", success: "78%" },
                                { name: "Hoss", date: "2024-01-04", success: "88%" },
                            ].map((play) => (
                                <div key={play.name} className="flex items-center justify-between py-2 border-b last:border-0">
                                    <div>
                                        <p className="font-medium">{play.name}</p>
                                        <p className="text-sm text-gray-500">{play.date}</p>
                                    </div>
                                    <span className="text-green-600 font-medium">{play.success}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold">System Status</h2>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">All Systems Online</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <p className="text-gray-600">VR Headset Connection</p>
                                <span className="text-green-600">Connected</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-gray-600">Motion Tracking</p>
                                <span className="text-green-600">Active</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-gray-600">Eye Tracking</p>
                                <span className="text-green-600">Calibrated</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-gray-600">AI Analysis Engine</p>
                                <span className="text-green-600">Running</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}