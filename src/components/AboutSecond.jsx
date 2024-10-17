import React from 'react';
import MultiColouredImg from '../assets/images/png/multi-colored.webp'
export const AboutSecond = () => {
  return (
    <section class=" min-vh-100 d-flex align-items-center justify-content-center">
    <div class="container">
        <div class="row">
            <div class="col-xl-6 col-12">
                <div class="overflow-hidden rounded-4 img-parent xl-mx-auto">
                    <img class="multi-color-img rounded-4" src={MultiColouredImg}
                        alt="multi color img"/>
                </div>
            </div>
            <div class="col-xl-6 col-12">
                <h3 class="main-heading-2 fw-semibold mb-3 text-xl-start text-center">Lorem ipsum </h3>
                <p class="sec-text-2 xl-mx-auto text-xl-start text-center">Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi.
                    Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing
                    diam. Dis velit nam vitae hendrerit at egestas.</p>
                <p class="sec-text-2 xl-mx-auto text-xl-start text-center">Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi.
                    Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing
                    diam. </p>
                <div class="mt-4 pt-2 text-xl-start text-center">
                    <button class="button rounded-3 border-0 p-0 ">
                        <span class="front-btn rounded-3 d-block text-white">
                            Button
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}
