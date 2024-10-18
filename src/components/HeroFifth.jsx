import React from 'react';
import Flower from '../assets/images/png/hero-5-flower-img.png'
import HeroFifthImg from '../assets/images/png/hero-5-2nd-img.png'
const HeroSection = () => {
    return (
        <div className="d-flex py-3 justify-content-center align-items-center min-vh-100">
            <div className='container'>
                <div className="row row-gap-4">
                    <div className="col-lg-5 col-12">
                        <h1 className="hero-5-heading fw-bold">Lorem ipsum dolor sit</h1>
                        <p className="hero-5-text fw-normal">
                            Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a
                            bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam. Dis velit nam vitae
                            hendrerit at egestas. Tellus velit turpis at sed lorem vitae sed.
                        </p>
                        <button className="hero-btn fw-semibold" variant="outline-primary">
                            Button
                        </button>
                    </div>

                    <div  className="col-12 col-lg-7 d-flex justify-content-center align-items-center min-h-527">
                        <div className="absolute-5-div h-100 position-relative">

                            {/* Flower image */}
                            <img src={Flower} alt="flower" className="flower-img" />
                            <img src={HeroFifthImg} alt="hero-5-2nd-img" className="absolute-5-img position-absolute" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
