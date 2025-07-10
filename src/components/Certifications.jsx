import React from 'react';
import certiCat from '../assets/certificate.png';

const certifications = [
  "Arduino Level 1 & 2 (07/2023)",
  "Advanced Excel Workshop (2021)",
  "C Programming Training (09/2022)",
  "C++ Programming Training (09/2022)",
  "Python Programming Training (09/2022)"
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 px-4 text-center">
      {/* 🟪 Heading + Cat */}
      <div className="flex justify-center items-center gap-4 mb-6">
        
        <img
          src={certiCat}
          alt="Certification Cat"
          className="w-20 md:w-28 inline-block"
        />
        <h2 className="text-3xl font-bold text-purple-800">Certifications</h2>
      </div>
      <ul className="max-w-xl mx-auto text-left space-y-3">
        {certifications.map((cert, index) => (
          <li key={index} className="bg-white shadow p-4 rounded text-gray-700">{cert}</li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
