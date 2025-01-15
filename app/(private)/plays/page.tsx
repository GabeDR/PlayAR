import { Play as PlayIcon, Clock, Users, Send, Edit, BarChart } from 'lucide-react';
import Link from 'next/link';

const plays = [
    {
        name: "Smash",
        description: "Quick-hitting vertical route combination",
        lastRun: "2024-01-15",
        successRate: "85%",
        players: 5
    },
    {
        name: "Flood",
        description: "Three-level passing concept to one side",
        lastRun: "2024-01-14",
        successRate: "92%",
        players: 4
    },
    {
        name: "Mesh",
        description: "Crossing routes underneath coverage",
        lastRun: "2024-01-13",
        successRate: "78%",
        players: 4
    },
    {
        name: "Hoss",
        description: "Hitches outside, seams inside",
        lastRun: "2024-01-12",
        successRate: "88%",
        players: 4
    },
    {
        name: "Crossers",
        description: "Multiple crossing routes at different depths",
        lastRun: "2024-01-11",
        successRate: "82%",
        players: 5
    },
    {
        name: "Scissors",
        description: "Post and corner route combination",
        lastRun: "2024-01-10",
        successRate: "90%",
        players: 3
    },
    {
        name: "Run-pass Option",
        description: "Combined running and passing play",
        lastRun: "2024-01-09",
        successRate: "87%",
        players: 6
    },
    {
        name: "Inside Run",
        description: "Power running play between the tackles",
        lastRun: "2024-01-08",
        successRate: "75%",
        players: 7
    },
    {
        name: "Outside Run",
        description: "Speed-based run to the edge",
        lastRun: "2024-01-07",
        successRate: "80%",
        players: 7
    },
    // Additional plays
    {
        name: "Four Verticals",
        description: "All receivers run deep routes to stretch defense",
        lastRun: "2024-01-06",
        successRate: "83%",
        players: 5
    },
    {
        name: "Screen Pass",
        description: "Quick pass behind the line with blockers",
        lastRun: "2024-01-05",
        successRate: "89%",
        players: 6
    },
    {
        name: "Double Slant",
        description: "Two receivers running slant routes",
        lastRun: "2024-01-04",
        successRate: "86%",
        players: 4
    },
    {
        name: "Triple Option",
        description: "Three potential ball carriers in option play",
        lastRun: "2024-01-03",
        successRate: "77%",
        players: 6
    },
    {
        name: "Wheel Route",
        description: "Running back runs vertical route from backfield",
        lastRun: "2024-01-02",
        successRate: "81%",
        players: 5
    },
    {
        name: "Bubble Screen",
        description: "Quick pass to receiver with blockers",
        lastRun: "2024-01-01",
        successRate: "88%",
        players: 5
    },
    {
        name: "QB Draw",
        description: "Quarterback run disguised as pass play",
        lastRun: "2023-12-31",
        successRate: "79%",
        players: 6
    },
    {
        name: "Flea Flicker",
        description: "Trick play with handoff and deep pass",
        lastRun: "2023-12-30",
        successRate: "72%",
        players: 7
    },
    {
        name: "Zone Read",
        description: "QB reads defensive end for run decision",
        lastRun: "2023-12-29",
        successRate: "84%",
        players: 6
    }
];

export default function Plays() {
    return (
        <div className="max-w-7xl mx-auto px-8 py-12">
            <div className="flex flex-col gap-8">
                {/* Header */}
                <div>
                    <h1 className="text-4xl font-bold mb-2">Football Plays</h1>
                    <p className="text-gray-600">Your complete playbook with performance metrics</p>
                </div>

                {/* Plays Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plays.map((play) => (
                        <div key={play.name} className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <PlayIcon className="w-5 h-5 text-blue-600" />
                                    <h2 className="font-semibold">{play.name}</h2>
                                </div>
                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                                    {play.successRate}
                                </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">{play.description}</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{play.lastRun}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        <span>{play.players} players</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                        title="Send to Headset"
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                    <Link
                                        href={`/plays/edit/${play.name.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                        title="Edit Play"
                                    >
                                        <Edit className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}