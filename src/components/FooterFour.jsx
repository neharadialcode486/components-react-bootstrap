import React from 'react'
import FooterFourLogo from '../assets/image/svg/gaming-logo.svg'
import FooterFourLeftLayer from '../assets/image/svg/left-side-layer.svg'
import FooterFourRightLayer from '../assets/image/svg/right-side-layer.svg'
import FooterFourLeftEllips from '../assets/image/svg/ellips-left.svg'
import FooterFourRightEllips from '../assets/image/svg/ellips-right.svg'
import FooterFourInsta from '../assets/image/svg/footer-4-insta.svg'
import FooterFourTwitter from '../assets/image/svg/footer-4-twitter.svg'
import FooterFourFb from '../assets/image/svg/footer-4-fb.svg'
import FooterFourYoutube from '../assets/image/svg/footer-4-youtube.svg'

const FooterFour = () => {
    return (
        <footer
        class="position-relative bg-cover min-vh-100 bg-black d-flex align-items-center justify-content-center flex-column">
        <div class="left-side-layer Footer-bg-4">
          <img class="position-absolute d-sm-block d-none left-layer" src={FooterFourRightLayer}
            alt="layer"/>
          <img class="position-absolute right-layer" src={FooterFourLeftLayer} alt="layer"/>
          <img class="position-absolute  left-ellips" src={FooterFourLeftEllips} alt="layer"/>
          <img class="position-absolute d-sm-block d-none right-ellips" src={FooterFourRightEllips}
            alt="layer"/>
        </div>
        <div class="container d-flex align-items-center justify-content-center flex-column">
         <a href="/"> <img class="game-logo-4" src={FooterFourLogo} alt="gaming"/></a>
          <div class="d-flex flex-md-row flex-column gap-4 footer-links-4 text-md-start text-center">
            <div class="d-flex gap-4">
              <p class="light-gray-4 mb-0 common-hover-4 transitions">Home</p>
              <p class="light-gray-4 mb-0 common-hover-4 transitions">About Us</p>
              <p class="light-gray-4 mb-0 common-hover-4 transitions">Tokenomics</p>
            </div>
            <div class="d-flex gap-4 ">
              <p class="light-gray-4 mb-0 common-hover-4 transitions">Utility</p>
              <p class="light-gray-4 mb-0 common-hover-4 transitions">Ecosystem</p>
            </div>
          </div>
          <div class="d-flex gap-3">
            <a href="https://www.instagram.com/"><img src={FooterFourInsta} alt="insta"/></a>
                    <a href="https://www.twitter.com/" target="_blank"><img src={FooterFourTwitter} alt="twitter"/></a>
                    <a href="https://www.facebook.com/" target="_blank"><img src={FooterFourFb} alt="fb"/></a>
                    <a href="https://www.youtube.com/" target="_blank"><img src={FooterFourYoutube} alt="youtube"/></a>
                 </div>
          <div class="bottom-line-4"></div>
          <p class="light-gray-4">Copyright Gaming Kirby</p>
        </div>
      </footer>
    )
}

export default FooterFour
