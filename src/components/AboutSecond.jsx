import React from 'react';
import MultiColouredImg from '../assets/images/png/multi-colored.webp'
export const AboutSecond = () => {
    return (
        <div className='min-vh-100 d-flex align-items-center'>
            <div className='container about-2-container'>
                <div className='row'>
                    <div className='col-xl-6 d-flex justify-content-center'>
                        <div className='overflow-hidden img-2-parent mx-auto mx-xl-0'>
                            <img className='w-100 multi-color-img' src={MultiColouredImg}
                                alt='multi color img' />
                        </div>
                    </div>
                    <div className='col-xl-6 d-flex flex-column justify-content-xl-start justify-content-center mb-xl-0 mb-5'>
                        <h3 className='main-heading-2 fw-semibold mb-3 text-xl-start text-center'>Lorem ipsum </h3>
                        <p className='about-text-2 mx-auto mx-xl-0'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
                            consectetur mi.
                            Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing
                            diam. Dis velit nam vitae hendrerit at egestas.</p>
                        <p className='about-text-2 mx-auto mx-xl-0'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
                            consectetur mi.
                            Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing
                            diam.
                        </p>
                        <button className='fw-semibold about-btn-2 mx-xl-0 mx-auto text-white'>
                            Button
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
