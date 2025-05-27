import React from 'react';

const ProgressReport = () => {

    const metrics = [
        { title: "Community Responders Trained", value: "5,200+", icon: "🦺", trend: "↑ 12%" },
        { title: "Fire Safety Audits Conducted", value: "3,450", icon: "🔥", trend: "↑ 8%" },
        { title: "Emergency Calls Responded", value: "24/7", icon: "🚨", trend: "99.9% uptime" },
        { title: "Schools Engaged", value: "180", icon: "🏫", trend: "New: 15" }
    ];

    const initiatives = [
        { title: "Community First Responder Program", progress: 85 },
        { title: "High-Rise Fire Safety Initiative", progress: 72 },
        { title: "Disaster Resilience Workshops", progress: 91 }
    ];



    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
                        SCDF Impact Report
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Building a <span className="text-red-600">Resilient</span> Singapore
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Key milestones in our mission to safeguard communities through preparedness and rapid response.
                    </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {metrics.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-red-500">
                            <div className="text-3xl mb-3">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                            <p className="text-3xl font-bold text-gray-900 mb-2">{item.value}</p>
                            <p className="text-sm text-green-600 font-medium">{item.trend}</p>
                        </div>
                    ))}
                </div>

                {/* Progress Bars */}
                <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Initiatives Progress</h2>
                    <div className="space-y-6">
                        {initiatives.map((item, index) => (
                            <div key={index}>
                                <div className="flex justify-between mb-2">
                                    <h3 className="font-medium text-gray-800">{item.title}</h3>
                                    <span className="text-red-600 font-medium">{item.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div
                                        className="bg-gradient-to-r from-red-400 to-red-600 h-3 rounded-full"
                                        style={{ width: `${item.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md transition-colors">
                        Download Full Report
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProgressReport;