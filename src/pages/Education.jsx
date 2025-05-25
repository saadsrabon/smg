import React from 'react';
import EducationImage from '../assets/education.jpeg'

const Education = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-5xl mx-auto">
        {/* Header with decorative elements */}
        <div className="text-center mb-12 relative">
          <div className="absolute -top-2 -left-4 w-10 h-10 bg-yellow-200 rounded-full opacity-30"></div>
          <div className="absolute -bottom-2 -right-4 w-12 h-12 bg-blue-200 rounded-full opacity-30"></div>
          <h1 className="text-5xl font-bold mb-4 text-blue-800 relative z-10">
            <span className="inline-block mr-3">📚</span>
            Education Initiatives
          </h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content with card-like layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src={EducationImage}
                alt="Education Program"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              We're focused on improving educational access, mentorship, and literacy in underserved communities.
              <span className="block mt-3 font-medium text-blue-700">
                Education is the foundation for a sustainable future.
              </span>
            </p>

            {/* Impact Highlights with icons */}
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-400">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Impact Highlights</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🎓</span>
                  <span className="text-lg"><strong>37 students</strong> mentored</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">📚</span>
                  <span className="text-lg"><strong>Monthly</strong> community learning sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">📖</span>
                  <span className="text-lg"><strong>50+</strong> education guides distributed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Education;