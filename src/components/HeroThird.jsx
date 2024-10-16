import React from 'react';

const HeroSection = () => {
  return (
    <section className="d-flex waves-bg-img align-items-center justify-content-center min-vh-100">
      <div className="d-flex align-items-center flex-column w-100">
        <h1 className="fw-bold mb-3 text-center heading">
          Lorem ipsum Lorem ipsum
        </h1>
        <div className="text-info mx-auto">
          <p className="text-center fw-normal">
            Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
            consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac
            posuere eget nam diam velit urna adipiscing diam.
          </p>
        </div>
        <button className='hero-btn fw-semibold'>button</button>
      </div>
    </section>
  );
};

export default HeroSection;
