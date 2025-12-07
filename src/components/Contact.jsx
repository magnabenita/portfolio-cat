import React from 'react';
import contactcat from '../assets/sales.png';

const Contact = () => {
  return (
    <section id="contact" className="py-16  px-4 text-center">
      {/* 🟪 Heading + Cat */}
      <div className="flex justify-center items-center gap-4 mb-6">
        
        <img
          src={contactcat}
          alt="Contact Cat"
          className="w-20 md:w-28 inline-block"
        />
        <h2 className="text-3xl font-bold text-purple-800">Contact</h2>
      </div>
      <p className="text-lg text-gray-700 mb-4">Feel free to reach out to collaborate or say hi! 🐱</p>

      <div className="max-w-md mx-auto space-y-4">
        <div className="bg-purple-100 p-4 rounded shadow">
          <strong>Email:</strong>
          <p><a href="mailto:magnabenita123@gmail.com" className="text-purple-700">magnabenita123@gmail.com</a></p>
        </div>
        <div className="bg-purple-100 p-4 rounded shadow">
          <strong>Instagram:</strong>
          <p>@magnabenita</p>
        </div>
        <div className="bg-purple-100 p-4 rounded shadow">
          <strong>Connect:</strong>
          <p>
            <a href="https://github.com/magnabenita" className="text-purple-700" target="_blank" rel="noreferrer">GitHub</a> | 
            <a href="https://www.linkedin.com/in/magna-benita-p-804671250/" className="text-purple-700 ml-2" target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
