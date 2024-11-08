import React from 'react';
import EllipseImg from '../assets/images/svg/ellipse.svg'
import EllpiseShadow from '../assets/images/svg/shadow.svg'
import Vehical from  '../assets/images/png/vehical-img.png'

const HeroSection = () => {
  return (
    <div className="position-relative hero-7-section py-3 overflow-hidden min-vh-100 d-flex justify-content-center align-items-center">
    <div className="container hero-7-container p-xl-0">
        <div className="row hero-7-row">
            <div
                className="col-xl-6 p-xl-0 col-12 d-flex hero-7-col justify-content-center align-items-center align-items-lg-start flex-column">
                <h1 className="hero-7-heading text-center mb-0 text-lg-start fw-normal">Build the Future.<span
                        className="hero-color-heading"> Deliver Today.
                    </span></h1>
                <p className="hero-7-text text-center text-lg-start">Innovative Concrete Logistics - Revolutionizing concrete delivery for commercial and residential projects in Houston, San Antonio, Austin, and Dallas.</p>
                <button className="hero-7-btn fw-semibold">Start Your Project</button>
            </div>
            <div className="col-xl-6 p-0 col-12">
                <img className="pointer-event-none vehical-img" src={Vehical}
                    alt="Vehical-img"/>
            </div>
        </div>
    </div>
    <img src={EllipseImg} alt="ellipse"
        className="position-absolute ellipse-img pointer-event-none"/>
    <img src={EllpiseShadow} alt="shadow"
        className="position-absolute bottom-0 start-0 pointer-event-none"/>
</div>
  );
};

export default HeroSection;
