import React from 'react';

const Mission = () => {
  return (
    <section className="px-6 py-12 bg-gray-50 text-gray-800">
      <h2 className="text-2xl font-semibold text-center mb-6">🌱💡🤝 Our Mission</h2>
      <p className="max-w-3xl mx-auto text-center text-lg mb-6">
        Our mission is to ignite the potential of underserved communities by empowering individuals,
        fostering collaboration, and creating sustainable, thriving futures through:
      </p>
      <ul className="list-disc list-inside max-w-md mx-auto space-y-2 text-lg">
        <li>📚 <strong>Education</strong></li>
        <li>❤️ <strong>Health & Wellness</strong></li>
        <li>🤝 <strong>Social Engagement</strong></li>
        <li>💼 <strong>Economic Opportunity</strong></li>
      </ul>
      <p className="mt-6 text-center font-medium text-green-700">
        We work towards a future where every individual has the resources and support to thrive! 🌟
      </p>
    </section>
  );
};

export default Mission;
