import React from 'react';
import gradCat from '../assets/graduation.png';

const educationData = [
  {
    institution: "X'an Matriculation Higher Secondary School, Thoothukudi",
    period: "2010 – 2022",
    program: "Computer Science Group",
    achievement: "Scored 90%",
    icon: "🏫",
  },
  {
    institution: "VIT University, Chennai",
    period: "2022 – 2027",
    program: "Integrated M.Tech, Computer Science Specialization in Business Analytics",
    achievement: "",
    icon: "🎓",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16  px-4 text-center">
      {/* 🟪 Heading + Cat */}
      <div className="flex justify-center items-center gap-4 mb-6">
        
        <img
          src={gradCat}
          alt="Graduation Cat"
          className="w-20 md:w-28 inline-block"
        />
        <h2 className="text-3xl font-bold text-purple-800">Education Timeline</h2>
      </div>

      {/* Timeline content */}
      <div className="max-w-4xl mx-auto">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="relative pl-10 mb-12 border-l-4 border-purple-300"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-14px] top-0 text-2xl bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center shadow">
              {edu.icon}
            </div>

            {/* Card */}
            <div className="bg-white p-5 rounded shadow hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-purple-700">{edu.institution}</h3>
              <p className="text-sm text-gray-500 italic">{edu.period}</p>
              <p className="mt-1 text-gray-700">
                <strong>Program:</strong> {edu.program}
              </p>
              {edu.achievement && (
                <p className="text-gray-700">
                  <strong>Achievement:</strong> {edu.achievement}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
