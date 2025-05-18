import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useRef, useState } from 'react';
import rickshaw from '../assets/rickshaw.png';
import doctor from '../assets/doctor.jpg';
import vogdaburi from '../assets/Vogdaburi_cummunity_center.jpg';
import logo from '../assets/Shomajgori_Logo_1.jpeg';

const Hero = () => {
    const intervalRef = useRef(null);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    duration: 100,
    created: () => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        if (instanceRef.current) {
          instanceRef.current.next();
        }
      }, 4000); // Change slide every 4 seconds
    },
  });

  const images = [
    rickshaw
    ,doctor
    ,vogdaburi
  ];

   // Clean up interval on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div ref={sliderRef} className="keen-slider h-[50vh] md:h-[70vh] relative">
      {images.map((src, i) => (
        <div
          key={i}
          className="keen-slider__slide flex items-center justify-center bg-black/40 relative"
        >
          <img src={src} className="absolute inset-0 object-cover w-full h-full" alt="" />
            <div className="absolute inset-0 bg-black opacity-24"></div>
          <div className="relative z-10 text-center text-white px-6">
            <img
              src={logo}
              alt="Logo"
              className="mx-auto w-28 h-28 rounded-full mb-4 shadow-md border"
            />
            <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">
              Laying the Foundation for Smarter Futures
            </h1>
            <p className="mt-3 text-lg md:text-xl">
              Empowering Communities for Sustainable Change
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
