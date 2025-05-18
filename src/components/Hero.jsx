import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-white">
      <img
        src="/assets/Vogdaburi_cummunity_center.jpg"
        alt="SHOMAJGORI Foundation Hero"
        className="w-full h-[50vh] object-cover object-center rounded-b-2xl shadow-lg"
      />
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white text-center px-4">
        <img
          src="/assets/Shomajgori_Logo_1.jpeg"
          alt="Shomajgori Logo"
          className="w-24 h-24 rounded-full mb-4 border-2 border-white shadow-lg"
        />
        <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
          🏗️🌱🌍 Laying the Foundation for Smarter Futures
        </h1>
        <p className="mt-2 text-base md:text-lg max-w-xl">
          SHOMAJGORI Foundation: Empowering Communities for Sustainable Change
        </p>
      </div>
    </section>
  );
};

export default Hero;
