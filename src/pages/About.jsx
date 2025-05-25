import { Link } from 'react-router-dom';
import doctor from '../assets/doctor.jpg';
import education from '../assets/education.jpeg';
import social from '../assets/011baa46-637a-4950-8c7b-e862743987f6.webp';
import tailorMachin from '../assets/tailorMachin.png';
export const missions = [
  {
    title: 'Education',
    description: 'Unlocking potential through access to learning.',
    image: education,
    to: '/about/education',
  },
  {
    title: 'Health & Wellness',
    description: 'Empowering communities with better healthcare.',
    image: doctor,
    to: '/about/health',
  },
  {
    title: 'Social Engagement',
    description: 'Strengthening community through unity.',
    image: social,
    to: '/about/engagement',
  },
  {
    title: 'Economic Opportunity',
    description: 'Building sustainable livelihoods.',
    image: tailorMachin,
    to: '/about/economy',
  },
];

export default function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
            Our Focus Areas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Mission <span className="text-blue-600">Pillars</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map(({ title, description, image, to }) => (
            <Link
              to={to}
              key={title}
              className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image with gradient overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                  {title}
                </h3>
                <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                  {description}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/30 transition-all duration-300 rounded-2xl pointer-events-none"></div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="mt-16 text-center">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full hover:shadow-lg transition-all">
            Explore All Initiatives
          </button>
        </div>
      </div>
    </section>
  );
}
