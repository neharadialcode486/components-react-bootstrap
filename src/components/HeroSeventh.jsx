import React from 'react';
import EllipseImg from '../assets/images/svg/ellipse.svg'
import EllpiseShadow from '../assets/images/svg/shadow.svg'
import Vehical from  '../assets/images/png/vehical-img.png'

const HeroSection = () => {
  return (
    <div className="position-relative hero-7-section py-3 overflow-hidden min-vh-100 d-flex justify-content-center align-items-center">
      <div className='container'>
        <div className="row-gap-4 row flex-lg-nowrap">
          <div className="d-flex col-lg-6 justify-content-center align-items-center align-items-lg-start flex-column">
            
            <h1 className="hero-7-heading text-center text-lg-start fw-normal">
              Build the Future.
              <span className="hero-7-color-heading"> Deliver Today.</span>
            </h1>

            <p className="hero-7-text text-center text-lg-start">
              Innovative Concrete Logistics - Revolutionizing concrete delivery for commercial and residential projects in Houston, San Antonio, Austin, and Dallas.
            </p>

            <button className="hero-7-btn fw-semibold">
              Start Your Project
            </button>
          </div>

          <div>
            <img className="pointer-event-none col-lg-6 vehical-img" src={Vehical} alt="Vehical-img" />
          </div>
        </div>
      </div>

      <img src={EllipseImg} alt="ellipse" className="position-absolute ellipse-img pointer-event-none" />
      <img src={EllpiseShadow} alt="shadow" className="position-absolute bottom-0 start-0 pointer-event-none" />
    </div>
  );
};

export default HeroSection;
