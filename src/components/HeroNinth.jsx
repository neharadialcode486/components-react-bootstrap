import React from 'react';
import HeroBottomCube from '../assets/images/svg/hero-9-bottom-cube.svg'
import HeroBottomCubeShadow from '../assets/images/svg/hero-9-bottom-cube-shadow.svg'
import HeroBottomCircle from '../assets/images/svg/hero-9-circles-bottom.svg'
import HeroBottomNineCube from '../assets/images/svg/hero-9-cube.svg'
import HeroBottomNineCubeShadow from '../assets/images/svg/hero-9-cube-shadow.svg'
import HeroBottomTopCircle from '../assets/images/svg/hero-9-top-circle.svg'
const HeroSection = () => {
  return (
    <div className="min-vh-100 px-3 overflow-hidden position-relative bg-light-black d-flex align-items-center justify-content-center">
      <div className="z-2 container position-relative w-100">
        <h1 className="hero-9-heading fw-bold text-white text-start">Build the Future</h1>
        <h1 className="text-lg-end hero-9-heading text-white fw-bold">
          Deliver <span className="hero-9-color-heading">Today.</span>
        </h1>
        <div className="w-100 box d-flex row-gap-3 justify-content-md-between flex-column flex-md-row">
          <div className="text-9-info-div">
            <p className="hero-9-text-info">
              Innovative Concrete Logistics - Revolutionizing concrete delivery for commercial and residential projects in Houston, San Antonio, Austin, and Dallas.
            </p>
          </div>
          <button className="hero-9-btn position-relative text-black fw-semibold d-flex align-items-center border-0">
            Start Your Project
          </button>
        </div>
      </div>
      <img src={HeroBottomCube} alt="cube" className="hero-9-bottom-cube position-absolute z-1 pointer-event-none" />
      <img src={HeroBottomCubeShadow} alt="hero-9-bottom-cube-shadow" className="position-absolute z-1 hero-9-bottom-cube-shadow end-0 bottom-0 pointer-event-none" />
      <img src={HeroBottomCircle} alt="bottom-circle" className="bottom-circle z-1 bottom-0 position-absolute pointer-event-none" />
      <img src={HeroBottomNineCube} alt="cube" className="position-absolute pointer-event-none hero-9-cube start-0 z-1" />
      <img src={HeroBottomNineCubeShadow} alt="cube" className="position-absolute hero-9-cube-shadow-top start-0 z-1 pointer-event-none" />
      <img src={HeroBottomTopCircle} alt="circle" className="position-absolute top-0 end-0 pointer-event-none z-1" />
    </div>
  );
};

export default HeroSection;
