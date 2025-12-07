import React from 'react';
import skillCat from '../assets/coding.png';

const skills = [
  { name: "Machine Learning" },
  { name: "Deep Learning"},
  { name: "Python" },
  { name: "C++"},
  { name: "C" },
  { name: "MERN Stack"},
  { name: "Firebase"},
  { name: "Excel"},
  { name: "Data Visualization"},
  { name: "Arduino" },
  { name: "IoT" },
  { name: "Git" },
  { name: "Figma" },
  { name: "Canva" },
  { name: "R" },
  { name: "MongoDB" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4">
      {/* 🟪 Heading + Cat */}
      <div className="flex justify-center items-center gap-4 mb-6">
        
        <img
          src={skillCat}
          alt="Skills Cat"
          className="w-20 md:w-28 inline-block"
        />
        <h2 className="text-3xl font-bold text-purple-800">Skills</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-purple-100 hover:bg-purple-200 text-purple-900 font-medium py-3 px-4 rounded-lg text-center shadow transition-all duration-200 transform hover:scale-105"
          >
            <span className="text-xl">{skill.icon}</span>
            <div className="mt-1 text-sm">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
