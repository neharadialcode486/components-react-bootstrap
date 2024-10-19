import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-6-section min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container px-3">
        <div className="hero-6-content">
          <h1 className="hero-6-heading fw-normal">
            Build the Future.
            <span className="hero-6-color-heading"> Deliver Today. </span>
          </h1>
          <p className="hero-6-text">
            Innovative Concrete Logistics - Revolutionizing concrete delivery for commercial and residential projects in Houston, San Antonio, Austin, and Dallas.
          </p>
          <btn className="hero-6-btn fw-semibold">
            Start Your Project
          </btn>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
