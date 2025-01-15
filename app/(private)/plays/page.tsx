import { Play as PlayIcon, Clock, Users, Send, Edit, BarChart } from 'lucide-react';
import Link from 'next/link';

const plays = [
    {
        name: "Smash",
        description: "A combination of corners and hitches",
        lastRun: "2024-01-15",
        successRate: "85%",
        players: 5
    },
    {
        name: "Hoss",
        description: "Hitches outside, Slots Seams",
        lastRun: "2024-01-14",
        successRate: "92%",
        players: 4
    },
    {
        name: "Run-Pass Option",
        description: "The option to hand the ball off or throw",
        lastRun: "2024-01-13",
        successRate: "78%",
        players: 6
    },
    {
        name: "Inside Zone",
        description: "Quick hitting inside run",
        lastRun: "2024-01-12",
        successRate: "88%",
        players: 7
    },
    {
        name: "Outside Zone",
        description: "Speed-based run attacking the edge",
        lastRun: "2024-01-11",
        successRate: "82%",
        players: 7
    },
    {
        name: "Four Verticals",
        description: "Receivers run deep verticals to stretch the defense",
        lastRun: "2024-01-10",
        successRate: "90%",
        players: 5
    },
    {
        name: "Screen Pass",
        description: "Quick pass with blockers out in front",
        lastRun: "2024-01-09",
        successRate: "87%",
        players: 6
    },
    {
        name: "Triple Option",
        description: "QB Option to either hand off, run, or pitch",
        lastRun: "2024-01-08",
        successRate: "75%",
        players: 6
    },
    {
        name: "Post Wheel",
        description: "WR Runs post and RB runs wheel behind them",
        lastRun: "2024-01-07",
        successRate: "80%",
        players: 5
    },
    {
        name: "Bubble Screen",
        description: "Quick screen pass to bubbling receiver",
        lastRun: "2024-01-06",
        successRate: "83%",
        players: 5
    },
    {
        name: "Flea Flicker",
        description: "Trick player where RB pitches the ball back to QB to throw a deep pass",
        lastRun: "2024-01-05",
        successRate: "89%",
        players: 7
    },
    {
        name: "Read Option",
        description: "QB reads defensive end to decide if they run or hand off",
        lastRun: "2024-01-04",
        successRate: "86%",
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