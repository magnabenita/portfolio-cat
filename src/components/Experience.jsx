import React from 'react';
import exp from '../assets/online-education.png';

const Experience = () => {
  return (
    <section id="experience" className="py-16  px-4 text-center">
      {/* 🟪 Heading + Cat */}
      <div className="flex justify-center items-center gap-4 mb-6">
        
        <img
          src={exp}
          alt="Experience Cat"
          className="w-20 md:w-28 inline-block"
        />
        <h2 className="text-3xl font-bold text-purple-800">Experience</h2>
      </div>

      {/* Digisailor Internship */}
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-[1.02]">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-purple-700">
            Intern - Digisailor, Thoothukudi
          </h3>
          <p className="text-sm text-gray-500 mb-3">June 2025 – July 2025</p>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Built a feature-rich <strong>e-commerce system</strong> using the <strong>MERN stack</strong>. Integrated user authentication with Firebase, designed Firestore database, and developed analytics dashboards and admin panels with responsive UI.
        </p>
      </div>
      <div className="my-8"></div>
      {/* AMDOX Internship */}
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-[1.02]">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-purple-700">
            Intern - AMDOX, Remote
          </h3>
          <p className="text-sm text-gray-500 mb-3">September 2025 – October 2025</p>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Worked on an <strong>AI Task Optimizer</strong> project that recommends tasks based on real-time emotion detection. Integrated text and webcam-based emotion analysis using <strong>Hugging Face Transformers</strong> and <strong>FER</strong>, with a Streamlit dashboard for tracking productivity and mood trends.
        </p>
      </div>
    </section>
  );
};

export default Experience;
