import React from 'react';
import Explorevcc from '../assets/progressGallery/exploreVCC.webp'
import { Link } from 'react-router-dom';

const ExploreVCC = () => {
    return (
        <section className="bg-green-50 py-16 px-4">
            {/* Hero Introduction */}
            <div className="max-w-4xl mx-auto text-center mb-20">
                <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
                    🌟 Community Heartbeat
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Welcome to <span className="text-green-600">Vogdaburi Community Center</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    A vibrant space for healthcare, education, and economic development - now nearing completion to serve as our community's cornerstone.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-yellow-400 mx-auto rounded-full"></div>
            </div>

            {/* Big Image */}

            <div className="max-w-3xl mx-auto px-4 my-12">
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <img
                        src={Explorevcc}
                        alt="Explore Vogdaburi Community Center"
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>


                    <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium bg-green-600/90 px-3 py-1 rounded-full inline-block">
                            VCC Construction Progress
                        </p>
                    </div>
                </div>
            </div>

            {/* Objectives Grid */}
            <div className="max-w-6xl mx-auto mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">
                    <span className="text-green-500">🌱</span> Key Objectives
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: "🏥",
                            title: "Healthcare for All",
                            desc: "Medical services, wellness check-ups, and health education programs"
                        },
                        {
                            icon: "📚",
                            title: "Educational Empowerment",
                            desc: "Vocational training and lifelong learning initiatives"
                        },
                        {
                            icon: "💼",
                            title: "Economic Opportunities",
                            desc: "Business support and entrepreneurial training"
                        },
                        {
                            icon: "🎉",
                            title: "Social Engagement",
                            desc: "Community events and cultural celebrations"
                        },
                        {
                            icon: "🤝",
                            title: "Collaborative Growth",
                            desc: "Space for meetings and collective decision-making"
                        },
                        {
                            icon: "🔨",
                            title: "Construction Journey",
                            desc: "Explore our building process from vision to reality",
                            cta: true
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all ${item.cta ? 'border-2 border-green-300' : 'border-l-4 border-green-300'}`}
                        >
                            <div className="text-3xl mb-3">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600 mb-4">{item.desc}</p>
                            {item.cta && (
                                <a
                                    href="https://www.notion.so/13dc08499b5281549f44fa415fbbb03e"
                                    className="inline-block mt-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Construction Journey →
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Construction Timeline Teaser */}
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 border-t-4 border-yellow-400">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                        <img
                            src={Explorevcc}
                            alt="VCC Construction Progress"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            <span className="text-yellow-500">🔨</span> From Vision to Reality
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Trace the VCC's journey from initial blueprints to the nearly completed community hub. Our transparent process involved:
                        </p>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span>Community consultations</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span>Sustainable building practices</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span>Local labor empowerment</span>
                            </li>
                        </ul>
                        <Link to={'/constructionGallery'}>
                            <button
                                href=""
                                className="inline-block mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Explore Full Timeline
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExploreVCC;