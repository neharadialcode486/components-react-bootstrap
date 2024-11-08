import React from 'react';
import HeroFourthImg from '../assets/images/png/leaves.png'

const HeroSection = () => {
  return (
    <section className="min-vh-100 d-flex justify-content-center align-items-center">
        <div className="container d-flex flex-column justify-content-around align-items-center">
            <h1 className="hero-4-heading mb-3 fw-bold">Lorem ipsum Lorem ipsum</h1>
            <div className="hero-4-text-info mx-auto">
                <p className="text-center mb-md-10 fw-normal">Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam. </p>
              </div>
              <button className="hero-4-btn fw-semibold">Button</button>
              <img className="hero-4-leaves w-100" src={HeroFourthImg} alt="leaves"/>
        </div>
    </section>
  );
};

export default HeroSection;
