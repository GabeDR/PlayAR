import React from 'react';
import { Check } from 'lucide-react';

const PricingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="py-24 px-8 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6">Revolutionary Training at Your Fingertips</h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Transform your football training with PlayAR's cutting-edge VR/AR technology.
                        Experience game-like scenarios without the physical toll.
                    </p>
                    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <h2 className="text-4xl font-bold">$800</h2>
                            <span className="text-gray-600">/month</span>
                        </div>
                        <a href="/dashboard">
                            <button
                                type="button"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-2xl transition-colors mb-6"
                            >
                                Get Started Now
                            </button>
                        </a>
                        <p className="text-sm text-gray-600">No long-term contract required. Cancel anytime.</p>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Everything You Need to Excel</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Immersive Training Environment",
                                description: "Practice with realistic VR/AR simulations that replicate game-day scenarios"
                            },
                            {
                                title: "Advanced Play Analysis",
                                description: "Upload and practice specific plays with AI-powered feedback and analysis"
                            },
                            {
                                title: "Head Movement Tracking",
                                description: "Monitor quarterback vision and decision-making patterns in real-time"
                            },
                            {
                                title: "Performance Analytics",
                                description: "Comprehensive data on play outcomes and decision-making effectiveness"
                            },
                            {
                                title: "Customizable Scenarios",
                                description: "Create and modify training scenarios to match your team's needs"
                            },
                            {
                                title: "Safety-First Design",
                                description: "Practice complex plays without physical contact or injury risk"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <Check className="w-5 h-5 text-green-500" />
                                    <h3 className="font-semibold">{feature.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's Included Section */}
            <section className="py-24 px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Your Subscription Includes</h2>
                    <div className="space-y-6">
                        {[
                            {
                                title: "Complete Software Access",
                                description: "Full access to PlayAR's advanced XR training platform designed specifically for football quarterbacks"
                            },
                            {
                                title: "Professional Onboarding",
                                description: "Comprehensive setup and training process to ensure your team gets the most out of PlayAR"
                            },
                            {
                                title: "AI Analysis & Feedback",
                                description: "Advanced artificial intelligence analyzing every throw, decision, and play execution"
                            },
                            {
                                title: "Dedicated Support",
                                description: "Priority access to our technical support team and regular software updates"
                            }
                        ].map((item, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                <Check className="w-5 h-5 text-green-500 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PricingPage;