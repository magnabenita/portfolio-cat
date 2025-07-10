import React from 'react';
import mainBg from '../assets/main-bg.jpg';
import catWalk from '../assets/cat-walk.gif';

// Meow sounds
import meow1 from '../assets/meow1.mp3';
import meow2 from '../assets/meow2.mp3';
import meow3 from '../assets/meow3.mp3';
import meow4 from '../assets/meow4.mp3';

const meowSounds = [meow1, meow2, meow3, meow4];

let currentAudio = null;

const playMeow = () => {
  // Stop any currently playing sound
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Pick a random sound
  const randomIndex = Math.floor(Math.random() * meowSounds.length);
  const selectedSound = meowSounds[randomIndex];

  // Play the selected sound
  currentAudio = new Audio(selectedSound);
  currentAudio.play();
};

const Layout = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${mainBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
      className="relative min-h-screen overflow-x-hidden"
    >
      {/* Main content */}
      {children}

      {/* Left-walking cat */}
      <div onClick={playMeow} className="cursor-pointer">
        <img
          src={catWalk}
          alt="Left-walking Cat"
          className="fixed bottom-0 right-0 w-20 animate-walkleft z-50 "
        />
      </div>

      {/* Right-walking cat */}
      <div onClick={playMeow} className="cursor-pointer">
        <img
          src={catWalk}
          alt="Right-walking Cat"
          className="fixed bottom-0 left-0 w-20 animate-walkright z-50"
          style={{ transform: 'scaleX(-1)' }} // flip to face right
        />
      </div>
    </div>
  );
};

export default Layout;
