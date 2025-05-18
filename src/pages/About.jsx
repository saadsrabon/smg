import { Link } from 'react-router-dom';
import doctor from '../assets/doctor.jpg';
export const missions = [
  {
    title: 'Education',
    description: 'Unlocking potential through access to learning.',
    image: '/assets/mission-education.jpg',
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
    image: '/assets/mission-engagement.jpg',
    to: '/about/engagement',
  },
  {
    title: 'Economic Opportunity',
    description: 'Building sustainable livelihoods.',
    image: '/assets/mission-economy.jpg',
    to: '/about/economy',
  },
];

export default function About() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Our Mission Pillars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {missions.map(({ title, description, image, to }) => (
          <Link to={to} key={title} className="group">
            <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img src={image} alt={title} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition">
                  {description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
