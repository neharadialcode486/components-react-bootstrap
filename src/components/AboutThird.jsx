import React from 'react';
import UninonImg from '../assets/images/png/union-img.webp'
export const AboutThird = () => {
    return (
        <div class='min-vh-100 d-flex align-items-center '>
            <div class='container about-3-container'>
                <div class='row'>
                    <div class='col-lg-6 d-flex align-items-center justify-content-center'>
                        <div class='pe-lg-0 pe-2 d-flex flex-column align-items-center align-items-lg-start justify-content-center'>
                            <h2 class='main-heading-3 mb-3 mt-5 mt-lg-0 text-center text-lg-start'>Submit a Request, We Start Immediately
                            </h2>
                            <p class='about-text-3 text-center text-lg-start'>For recurring projects, you’re able to simply start a request,
                                and we’ll start right away. For larger projects, we’ll be able to chat ahead of time to make sure we’re
                                ready to start designing. All brand guidelines are kept on file for an even faster experience.</p>
                            <button class='contact-button-3 text-white'>
                                Contact Us</button>
                        </div>
                    </div>
                    <div
                        class='col-lg-6 d-flex flex-column align-items-center align-items-lg-end justify-content-center justify-content-lg-end'>
                        <img class='section-img-3 mt-5 mt-lg-0 mb-5 mb-lg-0 w-100' src={UninonImg} alt='union img' />
                    </div>
                </div>
            </div>
        </div>
    );
}
