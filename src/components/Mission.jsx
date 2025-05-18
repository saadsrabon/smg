import { motion } from 'framer-motion';

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
        Empowering individuals, fostering collaboration, and creating sustainable, thriving futures.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {features.map(({ icon, title }, i) => (
          <motion.div
            key={i}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-4xl mb-3">{icon}</div>
            <h4 className="font-semibold text-xl">{title}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Mission;
