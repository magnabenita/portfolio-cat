import React from 'react';
import profile from '../assets/profile.jpg'; // Make sure this exists
import aboutCat from '../assets/love.png';

const About = () => {
  return (
    <section id="about" className="py-16 px-4">
      {/* 🟪 Heading + Cat */}

            <div className="flex justify-center items-center gap-4 mb-6">
              <h2 className="text-3xl font-bold text-purple-800">About Me</h2>
              <img
                src={aboutCat}
                alt="About Cat"
                className="w-20 md:w-28 inline-block"
              />
              
            </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={profile}
            alt="Magna Benita"
            className="w-48 h-48 rounded-full object-cover border-4 border-purple-200 shadow-md"
          />
        </div>

        {/* Text */}
        <div className="text-gray-700 text-lg text-center md:text-left">
          <p className="mb-4">
            I’m a passionate student at <strong>VIT Chennai</strong> pursuing Integrated M.Tech in Computer Science
            with a specialization in Business Analytics. I love building ML projects that solve real-world challenges,
            from health monitoring systems to smart IoT applications.
          </p>
          <p>
            I'm particularly interested in explainable AI, deep learning, and how technology can solve
            societal problems in creative and meaningful ways.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
