import React from 'react';

const HeroSection = () => {
  return (
    <div className="d-flex waves-bg-img align-items-center justify-content-center min-vh-100">
      <div className="d-flex align-items-center flex-column w-100">
        <h1 className="fw-bold mb-3 text-center heading">
          Lorem ipsum Lorem ipsum
        </h1>
        <div className="text-info mb-31 mx-auto">
          <p className="text-center mb-0 fw-normal">
            Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
            consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac
            posuere eget nam diam velit urna adipiscing diam.
          </p>
        </div>
        <button className='hero-btn fw-semibold'>button</button>
      </div>
    </div>
  );
};

export default HeroSection;
