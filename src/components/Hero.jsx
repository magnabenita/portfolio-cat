import React from 'react';
import heroBg from '../assets/hero-bg.jpg'; // Replace with your image

const Hero = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center px-6 pt-20"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="w-full max-w-7xl mx-auto flex">
        {/* Left-side content */}
        <div className="w-full md:w-1/2 text-left text-purple-900">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Magna Benita. P</h1>
          <p className="text-xl mb-2">Student | Machine Learning & Data Science Enthusiast</p>
          <p className="text-md text-gray-700 mb-6">
            Solving real-world problems with data-driven solutions.
          </p>
          <div className="flex gap-4">
            <a
              href="/Resume_magna.pdf"
              download
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full transition"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="border border-purple-600 hover:bg-purple-100 text-purple-700 py-2 px-6 rounded-full transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right side empty to let background/cat be visible */}
        <div className="w-1/2 hidden md:block"></div>
      </div>
    </section>
  );
};

export default Hero;
