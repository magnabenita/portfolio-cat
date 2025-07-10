import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-purple-700 text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg tracking-wide">Magna Benita P</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#education" className="hover:underline">Education</a>
          <a href="#certifications" className="hover:underline">Certifications</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-purple-800 text-white px-6 py-4 space-y-2 text-sm font-medium">
          <a href="#about" className="block hover:underline">About</a>
          <a href="#projects" className="block hover:underline">Projects</a>
          <a href="#skills" className="block hover:underline">Skills</a>
          <a href="#experience" className="block hover:underline">Experience</a>
          <a href="#education" className="block hover:underline">Education</a>
          <a href="#certifications" className="block hover:underline">Certifications</a>
          <a href="#contact" className="block hover:underline">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
