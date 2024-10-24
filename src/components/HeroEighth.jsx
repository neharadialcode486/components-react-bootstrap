import React from 'react';
import HeroCube from '../assets/images/svg/hero-8-cube.svg'
import HeroCubeShadow from '../assets/images/svg/hero-8-cube-shadow.svg'

const HeroSection = () => {
  return (
    <div className="hero-8-section position-relative min-vh-100 overflow-hidden d-flex justify-content-center align-items-center">
      <div className="d-flex container justify-content-center align-items-center px-3">
        <div className="hero-8-content d-flex flex-column justify-content-center align-items-center">
          <h1 className="hero-8-heading text-center mb-0 fw-normal">
            Build the Future.<span className="hero-8-color-heading">Deliver Today.</span>
          </h1>
          <p className="hero-8-text text-center">
            Innovative Concrete Logistics - Revolutionizing concrete delivery for commercial and residential projects in Houston, San Antonio, Austin, and Dallas.
          </p>
          <button className="hero-8-btn fw-semibold">Start Your Project</button>
        </div>
      </div>
      <img src={HeroCube} alt="cube" className="position-absolute pointer-event-none cube" />
      <img src={HeroCubeShadow} alt="hero-8-cube-shadow" className="position-absolute pointer-event-none cube-shadow" />
      <img src={HeroCube} alt="cube" className="position-absolute cube-top pointer-event-none" />
      <img src={HeroCubeShadow} alt="hero-8-cube-shadow" className="position-absolute pointer-event-none cube-shadow-top" />
    </div>
  );
};

export default HeroSection;