import React from 'react';
import cat from '../assets/cat-sticker.png'; // You'll add this cute sticker later

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-6 relative text-center">
      <p>&copy; 2025 Magna Benita. All rights reserved.</p>
      <img
        src={cat}
        alt="Cute Cat"
        className="absolute bottom-0 right-4 w-20 animate-float hidden sm:block"
      />
    </footer>
  );
};

export default Footer;
