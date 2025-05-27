import React from 'react';
import Health from '../assets/WeeklyPrimaryHealth.jpg'
import Education from "../assets/WeeklyEducation.proggram.webp"
import Economic from "../assets/FCABSiteVisitMeetingDirector_Sep2022_29.webp"
import { Link } from 'react-router-dom';

const CommunittyProgress = () => {

    const programs = [
        {
            category: "Health",
            title: "Community Health Initiative",
            progress: 78,
            milestones: ["Mobile clinic established", "500+ villagers screened", "Health education workshops"],
            challenges: ["Limited local healthcare workers", "Cultural barriers to modern medicine"],
            image: Health
        },
        {
            category: "Women's Empowerment",
            title: "Entrepreneurship Program",
            progress: 72,
            milestones: [
                "120 women trained in business skills",
                "35 micro-enterprises launched",
                "Digital literacy workshops conducted"
            ],
            challenges: [
                "Access to startup capital",
                "Balancing domestic responsibilities"
            ],
            image: Economic 
        },
        {
            category: "Education",
            title: "Village Learning Center",
            progress: 92,
            milestones: ["3 classrooms built", "120 children enrolled", "Adult literacy program launched"],
            challenges: ["Teacher retention", "After-school transportation"],
            image: Education
        },

    ];
    return (
        <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                        Vogdaburi Transformation
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Building <span className="text-green-600">Sustainable Change</span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our data-driven approach ensures every initiative creates lasting impact in the Vogdaburi community.
                    </p>
                </div>

                {/* Progress Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {programs.map((program, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full mb-2">
                                        {program.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-white">{program.title}</h3>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm font-medium text-gray-500">Progress</span>
                                    <span className="text-green-600 font-bold">{program.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                                    <div
                                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                                        style={{ width: `${program.progress}%` }}
                                    ></div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                            <span className="text-green-500 mr-2">✓</span> Key Milestones
                                        </h4>
                                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                            {program.milestones.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                            <span className="text-yellow-500 mr-2">⚠️</span> Challenges
                                        </h4>
                                        <p className="text-sm text-gray-600">{program.challenges.join(", ")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Methodology Section */}
                <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Data-Driven Approach</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">1</span>
                                Baseline Assessment
                            </h3>
                            <p className="text-gray-600">
                                Comprehensive 2022 survey identified critical needs in health, education, and economic development.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">2</span>
                                Community Feedback
                            </h3>
                            <p className="text-gray-600">
                                Regular input from villagers ensures our programs remain relevant and effective.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">3</span>
                                Impact Measurement
                            </h3>
                            <p className="text-gray-600">
                                Quantitative metrics and qualitative stories track real transformation.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">4</span>
                                Program Adaptation
                            </h3>
                            <p className="text-gray-600">
                                Continuous improvement based on data insights and changing needs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Gallery CTA */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore Our Progress Gallery</h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        View detailed reports with impact metrics, success stories, and ongoing challenges for each program.
                    </p>
                    <Link to={'/progressGallery'}>
                        <button className="px-8 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md transition-all">
                            View Program Reports →
                        </button>
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default CommunittyProgress;