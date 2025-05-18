export default function Education() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-4">📚 Education</h1>
      <p className="mb-6 text-lg">
        We’re focused on improving educational access, mentorship, and literacy in underserved
        communities. Education is the foundation for a sustainable future.
      </p>
      <img
        src="/assets/education-detail.jpg"
        alt="Education Program"
        className="rounded-xl shadow mb-6"
      />
      <h2 className="text-2xl font-semibold mb-2">Impact Highlights:</h2>
      <ul className="list-disc list-inside space-y-1 text-lg">
        <li>🎓 37 students mentored</li>
        <li>📚 Monthly community learning sessions</li>
        <li>📖 50+ education guides distributed</li>
      </ul>
    </section>
  );
}
