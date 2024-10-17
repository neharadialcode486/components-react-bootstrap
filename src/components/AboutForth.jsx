import React from 'react';
import  SecSideImg from '../assets/images/png/sec-4-side-img.webp'
export const AboutForth = () => {
  return (
    <section class="min-vh-100 mx-auto d-flex align-items-center justify-content-center">
        <div class="bg-color w-100">
            <div class="bg-img-4 w-100">
                <div class="container">
                    <div class="row top-bottom-spacing">
                        <div class="col-xl-6 col-12 justify-content-center justify-content-xl-start d-flex flex-column justify-content-center">
                            <h2 class="text-white text-center text-xl-start main-heading-4 mx-auto mx-xl-0 mb-3">Ready to make your <span class="heading-span">income a
                                    lot more passive?</span></h2>
                            <p class="light-gray text-center  text-xl-start mb-3 mb-sm-5">Book a service or consultation to get started today.</p>
                            <div class="d-flex justify-content-xl-start justify-content-center align-items-center gap-4">
                                <button class="services-btn fw-bold rounded-2">Services</button>
                                <button class="services-btn fw-bold rounded-2">Book A Call</button>
                            </div>
                        </div>
                        <div class="col-xl-6 d-flex justify-content-center col-12 img-position">
                            <img  class="sec-img-4" src={SecSideImg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}