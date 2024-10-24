import React from 'react';
import HeroFourthImg from '../assets/images/png/leaves.png'

const HeroSection = () => {
  return (
    <div className="min-vh-100 d-flex pt-96 pt-md-72 overflow-hidden pt-sm-0 justify-content-center align-items-center">
      <div className="d-flex container flex-column justify-content-around align-items-center">
        <h1 className="hero-4-heading mb-0 fw-bold">Lorem ipsum Lorem ipsum</h1>
        <div className="hero-4-text-info mx-auto">
          <p className="text-center fw-normal">
            Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a
            bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam.
          </p>
        </div>
        <button className='hero-btn hero-4-btn fw-semibold'>
          Button
        </button>
        
        <img className="hero-leaves w-100" src={HeroFourthImg}alt="leaves" />
      </div>
    </div>
  );
};

export default HeroSection;
