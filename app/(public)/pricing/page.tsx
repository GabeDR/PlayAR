import React from 'react';

const PricingPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="p-6 bg-white rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Pricing</h1>
                <h2 className="text-xl mb-2">$400/month</h2>
                <p className="mb-4">Our pricing includes. Here's what you get:</p>
                <ul className="list-disc list-inside">
                    <li>Immersive VR/AR Training</li>
                    <li>Tailored Athletic Practices</li>
                    <li>Interactive User Interface</li>
                    <li>AI-Enhanced Feedback</li>
                    <li>Safety-Focused Design</li>
                    <li>Post-Practice Analysis</li>
                    <li>Advanced Software Integration</li>
                    <li>Customizable Training Sessions</li>
                    </ul>
                                        <a href="/signup">
                                            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                                            <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">
                                                Sign up
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            );
};

export default PricingPage;