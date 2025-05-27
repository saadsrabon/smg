import React from 'react';
import Communitycenter from '../assets/CommunityCenter.jpg'

const CommunityCenter = () => {
    return (
        <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
            <div className="max-w-6xl mx-auto">
                {/* Header with Construction Theme */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
                         Building Smarter Futures
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Laying the Foundation for <span className="text-green-600">Community Growth</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Through partnerships and collaboration, we build systems that create lasting, positive change.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    {/* Image Section */}
                    <div className="lg:w-1/2">
                        <div className="relative rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={Communitycenter}
                                alt="Vogdaburi Community Center"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <p className="text-sm font-medium bg-green-600 px-3 py-1 rounded-full inline-block">
                                    Community Hub
                                </p>
                                <h2 className="text-2xl font-bold mt-2">Vogdaburi Community Center</h2>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-800">
                            A Place for <span className="text-green-600">Everyone</span>
                        </h2>

                        <p className="text-lg text-gray-700">
                            The <strong>Vogdaburi Community Center (VCC)</strong> is the heart of the village where
                            education, health, and community activities come together for a brighter future.
                        </p>

                        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-400">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                                <span className="text-green-500 mr-2">🌍</span>
                                Creating Opportunities, Empowering Lives
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">📚</span>
                                    <span><strong>Youth educational programs</strong> to unlock opportunities</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">❤️</span>
                                    <span><strong>Women's health camps</strong> offering essential healthcare</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">👨‍👩‍👧‍👦</span>
                                    <span><strong>Community events</strong> that foster connections</span>
                                </li>
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="bg-green-100 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                                <span className="text-yellow-600 mr-2">💪</span>
                                Join Us in Empowering Communities
                            </h3>
                            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-colors">
                                Get Involved Today
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunityCenter;