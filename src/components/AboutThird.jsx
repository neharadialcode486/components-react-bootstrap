import React from 'react';
import UninonImg from '../assets/images/png/union-img.webp'
export const AboutThird = () => {
  return (
    <section class="min-vh-100 d-flex align-items-center justify-content-center">
    <div class="container">
        <div class="row">
            <div class="col-xl-6 d-flex flex-column align-items-center align-items-xl-start justify-content-center">
                <h2 class="main-heading-3 mb-3 mt-5 mt-xl-0 text-center text-xl-start">Submit a Request, We Start Immediately</h2>
                <p class="sec-text-3 text-center text-xl-start">For recurring projects, you’re able to simply start a request, and we’ll start right away. For larger projects, we’ll be able to chat ahead of time to make sure we’re ready to start designing. All brand guidelines are kept on file for an even faster experience.</p>
                <button class="button-3"><span class="span-1"></span><span class="span-2"></span><span class="span-3"></span> Contact Us</button>
            </div>
            <div class="col-xl-6 d-flex flex-column align-items-center align-items-xl-start justify-content-center">
                <img class="sec-img-3 mt-5 mt-xl-0 w-100" src={UninonImg} alt="union"/>
            </div>
        </div>
    </div>
</section>
  );
}
