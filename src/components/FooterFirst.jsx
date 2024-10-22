import React from 'react'
import FooterOneTwitter from '../assets/image/svg/twiteer-icon.svg'
import FooterOneFacebook from '../assets/image/svg/facebook-icon.svg'
import FooterOneBeIcon from '../assets/image/svg/be-icon.svg'

const FooterFirst = () => {
  return (
    <footer className="d-flex align-items-center justify-content-center min-vh-100 flex-column">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 center-text">
                <div className="bg-logo align-items-center d-flex justify-content-center mb-4 mt-3 mt-sm-0">
                    <p className="fw-medium leading-150 dark-blue m-0 ">Logo</p>
                </div>
                <p className="leading-150 text-gray footer-text ">Discover Stellar blockchain's unrivaled speed,
                    security, & scalability with Volag. Revolutionize finance.</p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-5 mt-sm-0 ">
                <p className="leading-150 fw-normal mb-4 center">Quick links</p>
                <div className="d-flex flex-column gap-3 center">
                    <a href="/"
                        className="leading-150 shade-gray transitions common-hover text-decoration-none ">Home</a>
                    <a href="/"
                        className="leading-150 shade-gray transitions common-hover text-decoration-none ">About</a>
                    <a href="/"
                        className="leading-150 shade-gray transitions common-hover text-decoration-none ">Community</a>
                    <a href="/"
                        className="leading-150 shade-gray transitions common-hover text-decoration-none ">RoadMap</a>
                    <a href="/"
                        className="leading-150 shade-gray transitions common-hover text-decoration-none mb-4">Faqs</a>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 mt-sm-0">
                <p className="leading-150 fw-normal mb-4 center">Links</p>
                <div className="d-flex flex-column gap-3">
                    <a className="leading-150 shade-gray text-decoration-none transitions common-hover  center" href="">Terms &
                        conditions</a>
                    <a className="leading-150 shade-gray text-decoration-none transitions common-hover center" href="">Privacy
                        Policy</a>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-50 mt-4 mt-sm-0">
                <div className="max-sm-w mx-auto mt-50 ">
                    <p className="leading-150 fw-normal mb-4 center">Get in Touch</p>
                    <form className="mail justify-content-between d-flex py-1 ps-3 pe-1 mb-4">
                        <input type="email" placeholder="Type Your Mail" className="email border-0"/>
                        <button className="mail-btn text-white transitions ">Search</button>
                    </form>
                    <a className="leading-150 text-black text-decoration-none transitions common-hover center" href="/">Follow
                        us
                        now</a>
                    <div className="d-flex gap-3 mt-3 center">
                        <a href="https://www.twiteer.com/" target="_blank"><img className="" src={FooterOneTwitter} alt="twitter"/></a>
                        <a href="https://www.facebook.com/" target="_blank"><img className="" src={FooterOneFacebook} alt="facebook"/></a>
                        <div className="bg-icon d-flex align-items-center justify-content-center">
                            <a href="https://www.facebook.com/" target="_blank"><img className="" src={FooterOneBeIcon} alt="be-icon"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="line mt-4 mt-sm-0"></div>
    <div className="container">
        <p className="text-center shade-gray mt-2">© 2023 Copyright company name. All Right Reserved. </p>
    </div>
</footer>
  )
}

export default FooterFirst