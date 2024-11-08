import React from 'react'
import HeroFirstImg from '../assets/images/png/hero-image.png'

const HeroFirst = () => {
  return (
    <div className="min-vh-100 d-flex overflow-hidden align-items-center justify-content-center py-lg-4 py-3 ">
    <div className="container hero-first-container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <p className="mb-0 fw-normal text-black line-height-150 hero-first-subheading">A nice headline</p>
          <h1 className="fw-semibold mb-0 line-height-150 text-black hero-first-heading">Goes here</h1>
          <p className="mb-0 line-height-150 pt-3 hero-first-text-info">Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
            porttitor quam sed aliquet. Sodales vulputate elementum arcu donec. Feugiat nibh ullamcorper egestas
            lectus risus iornare ullamcorper fames. Cursus libero nec facilisis risus malesuada arcu cum. </p>
          <p className="mb-0 line-height-150 hero-first-text-info mt-3">Lorem ipsum dolor sit amet consectetur. Velit pulvinar
            libero porttitor quam sed aliquet. Sodales vulputate elementum arcu donec. </p>
          <div className="d-flex flex-wrap hero-first-button-parent">
            <button className="hero-first-btn fw-semibold">Button</button>
            <button className="hero-first-btn fw-semibold">Button</button>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={HeroFirstImg} alt="hero-image" className="hero-first-image"/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroFirst