import React from 'react'
import FooterTwoLogo from '../assets/image/svg/footer-2-logo.svg'
import FooterTwoFacebook from '../assets/image/svg/footer-2-fb-icon.svg'
import FooterTwoTwitter from '../assets/image/svg/footer-2-twitter-icon.svg'
import FooterTwoLinkedin from '../assets/image/svg/footer-2-linkedin-icon.svg'
import FooterTwoInsta from '../assets/image/svg/footer-2-insta-icon.svg'

const FooterSecond = () => {
  return (
    <footer className="footer-bg-2 min-vh-100 d-flex align-items-center justify-content-center flex-column">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-6 col-12 text-md-start text-center ">
                    <div className="footer-logo-2 mb-4">
                        <a href="/"> <img src={FooterTwoLogo} alt="footer-logo"/></a>
                    </div>
                    <p className="light-gray-2 about-text-2">Lorem ipsum dolor sit amet consectetur. Interdum est donec lacus
                        vitae elit dictum eros cras sagittis. Ac in sem mi ipsum urna</p>
                    <div className="gap-3 d-flex icons-link-2">
                        <a target="_blank" href="https://www.facebook.com/"><img 
                                src={FooterTwoFacebook} alt="fb-icon"/></a>
                        <a target="_blank" href="https://www.twitter.com"><img 
                                src={FooterTwoTwitter} alt="twitter"/></a>
                        <a target="_blank" href="https://www.linkedin.com"><img 
                                src={FooterTwoLinkedin} alt="linkedin"/></a>
                        <a target="_blank" href="https://www.instagram.com"> <img 
                                src={FooterTwoInsta} alt="insta"/></a>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                    <div className="d-flex flex-column ">
                        <div className="ms-lg-3 ms-0">
                            <p className="fs-md leading-150 text-white fw-semibold">Service</p>
                            <p className="light-gray-2 common-hover-2">Hero</p>
                            <p className="light-gray-2 common-hover-2">Why DatingStars</p>
                            <p className="light-gray-2 common-hover-2">Meet DatingStars Talk</p>
                            <p className="light-gray-2 common-hover-2">Contact Us</p>
                            <p className="light-gray-2 common-hover-2">Testimonial</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12 text-lg-start text-center">
                    <p className="fs-md leading-150 text-white fw-semibold">Join a Newsletter</p>
                    <p className="leading-150 fw-normal mb-4 light-gray-2 common-hover-2">Your Email</p>
                    <div className="d-flex email-parnt-2 flex-md-row flex-column">
                        <form className="mail-2 justify-content-between d-flex ps-3  mb-4">
                            <input type="email" placeholder="Enter Your Email" className="email-2 border-0"/>
                        </form>
                        <button className="mail-btn-2 transitions fw-semibold ">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="bottom-line-2"></div>
            <div className="row">
                <div className="col-xl-4 col-12 text-lg-start text-center">
                    <p className="light-gray-2">© 2024 DatingStars. All rights Reserved</p>
                </div>
                <div className="col-xl-8 col-12">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-12 text-md-end text-center">
                            <a href="/" className="light-gray-2 common-hover-2 "><svg width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9C5 5.13 8.13 2 12 2ZM7 9C7 11.85 9.92 16.21 12 18.88C14.12 16.19 17 11.88 17 9C17 6.24 14.76 4 12 4C9.24 4 7 6.24 7 9ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z"
                                        fill="#F7B103" />
                                </svg>
                                8819 Ohio St. South Gate</a>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 text-md-end text-center">
                            <a href="mailto:webmaster@example.com" className="light-gray-2 common-hover-2"><svg width="30"
                                    height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5 25C4.3125 25 3.72417 24.7554 3.235 24.2662C2.74583 23.7771 2.50083 23.1883 2.5 22.5V7.5C2.5 6.8125 2.745 6.22417 3.235 5.735C3.725 5.24583 4.31333 5.00083 5 5H25C25.6875 5 26.2763 5.245 26.7663 5.735C27.2563 6.225 27.5008 6.81333 27.5 7.5V22.5C27.5 23.1875 27.2554 23.7762 26.7663 24.2662C26.2771 24.7562 25.6883 25.0008 25 25H5ZM15 16.25L5 10V22.5H25V10L15 16.25ZM15 13.75L25 7.5H5L15 13.75ZM5 10V7.5V22.5V10Z"
                                        fill="#F7B103" />
                                </svg>
                                support@datingstars.com</a>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 text-lg-start text-center">
                            <a href="tel:+1 386-688-3295" target="_blank" className="common-hover-2 light-gray-2"><svg
                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z"
                                        fill="#F7B103" />
                                </svg> +1 386-688-3295</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterSecond