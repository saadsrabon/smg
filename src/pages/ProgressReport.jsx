import React from 'react';

const ProgressReport = () => {

    const metrics = [
        { title: "Individuals Empowered through Skill Training", value: "3,800+", icon: "💡", trend: "↑ 18%" },
        { title: "Collaborative Community Projects", value: "125+", icon: "🤝", trend: "↑ 22%" },
        { title: "Sustainability Programs Launched", value: "40+", icon: "🌱", trend: "New: 12 this year" },
        { title: "Women-led Businesses Initiated", value: "290", icon: "👩‍💼", trend: "↑ 30%" }
    ];


    const initiatives = [
        { title: "Vogdaburi Community Pilot Initiative", progress: 92 },
        { title: "Empowerment through Skill Development Program", progress: 88 },
        { title: "Sustainable Agriculture & Eco-awareness Drive", progress: 75 },
        { title: "Women Entrepreneurship & Leadership Circle", progress: 81 }
    ];




    return (
        <section className="bg-green-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                        Impact Report
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Building a <span className="text-green-600">Resilient</span> Vogdaburi
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We've laid foundational assessments and strategic plans to build robust community resilience.
                    </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {metrics.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-300"
                        >
                            <div className="text-3xl mb-3 text-green-500">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-1">{item.title}</h3>
                            <p className="text-3xl font-bold text-gray-800 mb-2">{item.value}</p>
                            <p className="text-sm text-green-600 font-medium">{item.trend}</p>
                        </div>
                    ))}
                </div>

                {/* Progress Bars */}
                <div className="bg-white rounded-xl shadow-sm p-8 mb-12 border border-green-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">Key Initiatives Progress</h2>
                    <div className="space-y-6">
                        {initiatives.map((item, index) => (
                            <div key={index}>
                                <div className="flex justify-between mb-2">
                                    <h3 className="font-medium text-gray-700">{item.title}</h3>
                                    <span className="text-green-600 font-medium">{item.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2.5">
                                    <div
                                        className="bg-gradient-to-r from-green-300 to-green-200 h-2.5 rounded-full"
                                        style={{ width: `${item.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgressReport;