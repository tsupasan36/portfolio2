import React from 'react';
import '../App.css';

import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={`${process.env.PUBLIC_URL}/videos/video-1.mp4`} autoPlay loop muted />
      <h1>TSUBASA SUZUKI</h1>
      <p>Web Developer</p>
    </div>
  );
}

export default HeroSection;
