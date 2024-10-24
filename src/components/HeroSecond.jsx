import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroTwoTopLeftFirstImg from '../assets/images/png/hero-2-top-left-first-img.png'
import HeroTwoTopLeftSecImg from '../assets/images/png/hero-2-top-left-sec-img.png'
import HeroTwoTopRightFirstImg from '../assets/images/png/hero-2-top-right-first-img.png'
import HeroTwoTopRightSecImg from '../assets/images/png/hero-2-top-right-sec-img.png'
import HeroTwoBottomLeftFirstImg from '../assets/images/png/hero-2-bottom-left-first-img.png'
import HeroTwoBottomLeftSecImg from '../assets/images/png/hero-2-bottom-left-sec-img.png'
import HeroTwoBottomRightFirstImg from '../assets/images/png/hero-2-bottom-right-first-img.png'
import HeroTwoBottomRightSecImg from '../assets/images/png/hero-2-bottom-right-sec-img.png'

const HeroSection = () => {
  return (
    <div className="d-flex position-relative align-items-center justify-content-center min-vh-100">
      <div className="position-absolute top-0 start-0">
        <div className="position-relative">
          <img
            src={HeroTwoTopLeftFirstImg}
            alt="hero-2-top-first-img"
            className="w-md-50"
          />
          <img
            src={HeroTwoTopLeftSecImg}
            alt="hero-2-top-sec-img"
            className="position-absolute w-md-50 hero-top-left-2-img"
          />
        </div>
      </div>
      <div className="position-absolute top-right-div top-0 end-0">
        <div className="position-relative">
          <img
            src={HeroTwoTopRightFirstImg}
            alt="hero-2-top-first-img"
            className="w-md-50"
          />
          <img
            src={HeroTwoTopRightSecImg}
            alt="hero-2-top-sec-img"
            className="position-absolute w-md-50 hero-top-right-2-img"
          />
        </div>
      </div>
      <div className="hero-2-content-div position-relative z-3 d-flex align-items-center justify-content-center flex-column mx-auto w-100">
        <p className="hero-2-sub-heading fw-normal text-center mb-0 text-black">A nice headline</p>
        <h1 className="hero-2-heading fw-semibold mb-2 text-black text-center">Goes here</h1>
        <p className="hero-2-text-info mb-0 text-center">
          Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero porttitor quam sed aliquet. Sodales vulputate
          elementum arcu donec. Feugiat nibh ullamcorper egestas lectus risus ornare ullamcorper fames. Cursus libero
          nec facilisis risus malesuada arcu cum.
        </p>
        <div className="d-flex gap-4 flex-wrap mt-30 btn-div">
          <button className="hero-btn fw-semibold">Button</button>
          <button className="hero-btn fw-semibold">Button</button>
        </div>
      </div>
      <div className="position-absolute bottom-6 start-0">
        <div className="position-relative">
          <img
            src={HeroTwoBottomLeftFirstImg}
            alt="hero-2-bottom-first-img"
            className="w-md-50"
          />
          <img
            src={HeroTwoBottomLeftSecImg}
            alt="hero-2-bottom-sec-img"
            className="position-absolute hero-bottom-left-2-img w-md-50"
          />
        </div>
      </div>
      <div className="position-absolute right-bottom-div bottom-0 w-md-50 end-34">
        <div className="position-relative">
          <img
            src={HeroTwoBottomRightSecImg}
            alt="hero-2-bottom-right-sec-img"
            className="w-md-50"
          />
          <img
            src={HeroTwoBottomRightFirstImg}
            alt="hero-2-bottom-right-first-img"
            className="position-absolute hero-bottom-right-2-img w-md-50"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
