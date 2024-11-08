import React from 'react';
import SecSideImg from '../assets/images/png/sec-4-side-img.webp'
export const AboutForth = () => {
    return (
        <div class='min-vh-100 mx-auto d-flex align-items-center justify-content-center'>
            <div class='bg-color-4 w-100'>
                <div class='bg-img-4 w-100'>
                    <div class='container about-4-container'>
                        <div class='row top-bottom-spacing-4'>
                            <div
                                class='col-xl-6 col-12 justify-content-center justify-content-xl-start d-flex flex-column justify-content-center'>
                                <h2 class='text-white text-center text-xl-start main-heading-4 mx-auto mx-xl-0 mb-3'>Ready to
                                    make your <span class='heading-span'>income a
                                        lot more passive?</span></h2>
                                <p class='light-gray-4 text-center text-xl-start mb-lg-3 mb-4'>Book a service or consultation
                                    to get started today.</p>
                                <div
                                    class='d-flex justify-content-xl-start justify-content-center align-items-center gap-4'>
                                    <button class='services-btn-4 fw-bold rounded-2 mt-lg-4 mb-4 mb-lg-0'>Services</button>
                                    <button class='services-btn-4 fw-bold rounded-2 mt-lg-4 mb-4 mb-lg-0'>Book A Call</button>
                                </div>
                            </div>
                            <div
                                class='col-xl-6 d-flex justify-content-center justify-content-lg-end col-12 mt-lg-4 mt-xl-0 img-position-4'>
                                <img class='section-img-4 mx-auto mx-xl-0' src={SecSideImg} alt='section image' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}