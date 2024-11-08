import React from 'react';
import HeroBottomCube from '../assets/images/svg/hero-9-bottom-cube.svg'
import HeroBottomCubeShadow from '../assets/images/svg/hero-9-bottom-cube-shadow.svg'
import HeroBottomCircle from '../assets/images/svg/hero-9-circles-bottom.svg'
import HeroBottomNineCube from '../assets/images/svg/hero-9-cube.svg'
import HeroBottomNineCubeShadow from '../assets/images/svg/hero-9-cube-shadow.svg'
import HeroBottomTopCircle from '../assets/images/svg/hero-9-top-circle.svg'
const HeroSection = () => {
  return (
    <section
    class="min-vh-100 px-3 overflow-hidden position-relative bg-light-black d-flex align-items-center justify-content-center">
    <div class="container z-2 position-relative w-100">
        <h1 class="hero-9-heading fw-bold text-white mb-0 text-start">Build the Future</h1>
        <h1 class="hero-9-heading hero-9-colors-heading text-white mb-0 fw-bold">Deliver <span class="hero-9-color-heading">Today. </span>
        </h1>
        <div class="w-100 hero-9-box d-flex row-gap-3 justify-content-md-between align-items-center flex-column flex-md-row">
            <div class="hero-9-text-info-box ">
                <p class="hero-9-text-info mb-0">Innovative Concrete Logistics - Revolutionizing concrete delivery for
                    commercial and residential
                    projects in Houston, San Antonio, Austin, and Dallas.</p>
            </div>
            <button
                class="hero-9-btn position-relative text-black fw-semibold d-flex align-items-center border-0">Start
                Your Project</button>
        </div>
    </div>
    <img src={HeroBottomCube} alt="cube"
        class="hero-9-bottom-cube position-absolute z-1 pointer-event-none"/>
    <img src={HeroBottomCubeShadow} alt="hero-9-bottom-cube-shadow"
        class="position-absolute z-1 hero-9-bottom-cube-shadow end-0 bottom-0 pointer-event-none"/>
    <img src={HeroBottomCircle} alt="bottom-circle"
        class="bottom-circle z-1 position-absolute pointer-event-none"/>
    <img src={HeroBottomNineCube} alt="cube" class="position-absolute pointer-event-none hero-9-cube start-0 z-1"/>
    <img src={HeroBottomNineCubeShadow} alt="cube"
        class="position-absolute hero-9-cube-shadow-top start-0 z-1 pointer-event-none"/>
    <img src={HeroBottomTopCircle} alt="circle"
        class="position-absolute ring top-ring pointer-event-none z-1"/>
</section>);
};

export default HeroSection;
