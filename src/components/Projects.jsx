import React from 'react';
import { Link } from 'react-router-dom';
import mainBg from '../assets/main-bg.jpg'; // adjust path if needed
import reading from '../assets/reading.png';

const allProjects = [
  {
    title: 'Eye Disease Detection using ResNet & XAI',
    type: 'Team',
    tech: 'Python, ResNet50, Grad-CAM',
    desc: 'Detects eye diseases using CNNs with explainability.',
  },
  {
    title: 'E-commerce Website (Internship)',
    type: 'Solo',
    tech: 'MERN, Firebase',
    desc: 'Full-stack ecommerce with auth, dashboard, analytics.',
  },
  {
    title: 'CKD Detection with Hybrid CNN',
    type: 'Team',
    tech: 'ResNet + EfficientNet',
    desc: 'Predicts CKD from ultrasound images.',
  },
];

const Projects = () => {
  const displayedProjects = allProjects.slice(0, 3); // show only first 3

  return (
    <section id="projects" className="py-16 px-4">
      {/* 🟪 Heading + Cat */}
            <div className="flex justify-center items-center gap-4 mb-6">
              
              <img
                src={reading}
                alt="Project Cat"
                className="w-20 md:w-28 inline-block"
              />
              <h2 className="text-3xl font-bold text-purple-800">Projects</h2>
            </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white/70 shadow-md hover:shadow-xl transition duration-300 rounded-xl p-6 flex flex-col justify-between hover:scale-[1.02]"
          >
            <div>
              <h3 className="text-xl font-bold text-purple-700 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                <span className="inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                  {project.type}
                </span>
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Tech:</strong> {project.tech}
              </p>
              <p className="text-gray-700 text-sm">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Link */}
      <div className="text-center mt-10">
        <Link
          to="/projects"
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full transition"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
};

export default Projects;
