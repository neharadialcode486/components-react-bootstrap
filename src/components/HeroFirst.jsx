import React from 'react'
import HeroFirstImg from '../assets/images/png/hero-image.png'

const HeroFirst = () => {
  return (
    <div className="min-vh-100 d-flex overflow-hidden align-items-center justify-content-center py-lg-4 py-3">
    <div  className='container'>
      <div className="row row-gap-4">
        <div className="col-lg-6">
          <p className="mb-0 fw-normal text-black line-height-150 hero-subheading">A nice headline</p>
          <h1 className="fw-semibold mb-0 line-height-150 text-black hero-heading">Goes here</h1>
          <p className="mb-0 line-height-150 mt-3 hero-text-info">
            Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero porttitor quam sed aliquet. Sodales vulputate elementum arcu donec. Feugiat nibh ullamcorper egestas lectus risus iornare ullamcorper fames. Cursus libero nec facilisis risus malesuada arcu cum.
          </p>
          <p className="mb-0 line-height-150 hero-text-info mt-3">
            Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero porttitor quam sed aliquet. Sodales vulputate elementum arcu donec.
          </p>
          <div className="d-flex flex-wrap gap-19 btn-div">
            <button className='hero-btn fw-semibold'>Button</button>
            <button className='hero-btn fw-semibold'>Button</button>
          </div>
        </div>
        <div className='col-lg-6 col-12'>
          <img src={HeroFirstImg} alt="hero" className="hero-first-image pointer-event-none" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroFirst