import React from 'react';
import { Link } from 'react-router-dom';
import mainBg from '../assets/main-bg.jpg'; // ✅ adjust path if needed

const allProjects = [
  {
    title: "Network Reliability Optimization",
    type: "Solo",
    tech: "Dijkstra’s Algorithm, Backtracking",
    desc: "Optimized network paths for reliability using Dijkstra's algorithm and backtracking.",
    //github: "https://github.com/your-repo-1",
  },
  {
    title: "Hands-Free Smart Cart",
    type: "Team (6)",
    tech: "SCAMPER, TRIZ, Embedded Design",
    desc: "Smart luggage/cart system designed using SCAMPER & TRIZ techniques for hands-free movement.",
    //github: "https://github.com/your-repo-2",
  },
  {
    title: "COVID-19 Dashboard",
    type: "Solo",
    tech: "Python, EDA, Data Visualization",
    desc: "Interactive dashboard showing COVID trends and statistics using EDA techniques.",
    //github: "https://github.com/your-repo-3",
  },
  {
    title: "AI Mental Health Monitor",
    type: "Team (5)",
    tech: "NLP, Audio, Text Classification",
    desc: "Detects mental health issues using speech and text analysis.",
    //github: "https://github.com/your-repo-4",
  },
  {
    title: "Skin Tone-Based Dress Recommender",
    type: "Team (3)",
    tech: "Deep Learning, Rule-based Logic",
    desc: "Suggests dress colors based on user’s skin tone using CNN and fashion heuristics.",
    //github: "https://github.com/your-repo-5",
  },
  {
    title: "Smart Fridge Magnet (IoT)",
    type: "Team (3)",
    tech: "Arduino, Sensors, ML",
    desc: "Tracks food usage and suggests recipes using IoT sensors.",
    //github: "https://github.com/your-repo-6",
  },
  {
    title: "Eye Disease Detection with ResNet & XAI",
    type: "Team (2)",
    tech: "Python, ResNet50, Grad-CAM",
    desc: "Classifies eye diseases using CNNs with explainable AI across three image resolutions.",
    github: "https://github.com/magnabenita/Explainable-AI-for-Eye-Disease-Detection-A-Deep-Learning-Approach-Using-ResNet-and-XAI-Techniques",
  },
  {
    title: "Fly Repellent System",
    type: "Solo",
    tech: "Multimodal Sensors, PIR, Pygame Simulation",
    desc: "Simulates an intelligent fly repellent with vibration, ultrasonic, and PIR sensors.",
    //github: "https://github.com/your-repo-8",
  },
  {
    title: "ResNet-24 AI Image Classifier",
    type: "Team (4)",
    tech: "Custom ML pipeline, ResNet",
    desc: "Trained a ResNet-24 model to distinguish AI-generated vs real images.",
    //github: "https://github.com/your-repo-9",
  },
  {
    title: "CKD Detection with Hybrid CNN",
    type: "Team",
    tech: "ResNet + EfficientNetB0, Ultrasound",
    desc: "Predicts Chronic Kidney Disease using hybrid deep learning from ultrasound images.",
    github: "https://github.com/magnabenita/Ultrasound-based-Stage-Classification-of-CKD-using-ResNet-and-EfficientNet-with-XAI-support",
  },
  {
    title: "E-commerce Website (Internship)",
    type: "Solo",
    tech: "MERN Stack, Firebase, Firestore",
    desc: "Full-stack ecommerce platform with auth, admin dashboard, order history, and analytics.",
    github: "https://github.com/magnabenita/Ecom-website-fb",
  },
];

const ProjectsPage = () => {
  return (
    <div
      className="min-h-screen pt-24 px-6 bg-cover bg-center"
      style={{
        backgroundImage: `url(${mainBg})`,
      }}
    >
      <h1 className="text-4xl font-bold text-purple-800 text-center mb-12">
        All Projects 💡
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {allProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-6 hover:scale-[1.02] transition duration-300"
          >
            <h3 className="text-xl font-bold text-purple-700 mb-2">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-1">
              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                {project.type}
              </span>
            </p>
            <p className="text-sm text-gray-600"><strong>Tech:</strong> {project.tech}</p>
            <p className="text-sm text-gray-700 mt-2">{project.desc}</p>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-purple-600 hover:underline"
              >
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/"
          className="text-purple-700 hover:underline text-sm"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ProjectsPage;
