import { motion } from 'framer-motion';
import { missions } from '../pages/About';
import { Link } from 'react-router-dom';

const features = [
  { icon: '📚', title: 'Education' },
  { icon: '❤️', title: 'Health & Wellness' },
  { icon: '🤝', title: 'Social Engagement' },
  { icon: '💼', title: 'Economic Opportunity' },
];

const Mission = () => {
  return (
    <section className="py-16 bg-white text-center text-gray-800 px-4 md:px-8">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🌱 Our Mission
      </motion.h2>
      <motion.p
        className="max-w-2xl mx-auto text-lg text-gray-600 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
       Our mission is to ignite the potential of underserved communities by empowering individuals, fostering collaboration, and creating sustainable, thriving futures through:
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 container mx-auto">
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
};

export default Mission;
