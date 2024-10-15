import React, { useState, useEffect, useRef } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slick1 from '../assets/slider-2-img-1.webp';
import Slick2 from '../assets/slider-2-img-2.webp';
import Slick3 from '../assets/slider-2-img-3.webp';
import Slick4 from '../assets/slider-2-img-4.webp';
import Slick5 from '../assets/slider-2-img-5.webp';



export default function Slicksyncing() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const sliderRef = useRef(null);


    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };
    return (
        <>
            <div className='second-slider flex min-h-screen items-center'>
                <div className='max-w-[1140px] mx-auto px-3 relative'>
                    <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}
                        arrow={false}
                        fade={true}
                        adaptiveHeight={true}
                    >
                        <div>
                            <div className="flex items-center gap-12">
                                <div>
                                    <img src={Slick1} alt="image-1" className="min-w-[531px] h-[387px] rounded-xl" />
                                </div>
                                <div>
                                    <h2 className="lato font-semibold text-5xl leading-[57px]">
                                        Lorem ipsum
                                    </h2>
                                    <p className="inter text-base leading-6 text-opacity-[70%] py-4 max-w-[533px]">
                                        Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                                        eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                                        quam. Hac posuere eget nam diam velit urna adipiscing diam.
                                        Dis velit nam vitae hendrerit at egestas.
                                    </p>
                                    <p className="inter text-base leading-6 text-opacity-[70%] pb-8 max-w-[533px]">
                                        Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                                        eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                                        quam. Hac posuere eget nam diam velit urna adipiscing diam.
                                        Dis velit nam vitae hendrerit at egestas. Tellus velit turpis
                                        at sed lorem vitae sed. Proin urna ornare dolor mauris
                                        convallis varius nunc.
                                    </p>
                                    <button className="inter font-semibold text-base text-white py-4 px-14 rounded-xl bg-[#3C278D] transition-all duration-300 hover:bg-[#25089b] ">
                                        Button
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-12">
                                <div>
                                    <img src={Slick2} alt="image-2" className="min-w-[531px] h-[387px] rounded-xl" />
                                </div>
                                <div>
                                    <h2 className="lato font-semibold text-5xl leading-[57px]">
                                        Lorem ipsum
                                    </h2>
                                    <p className="inter text-base leading-6 text-opacity-[70%] py-4 max-w-[533px]">
                                        Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                                        eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                                        quam. Hac posuere eget nam diam velit urna adipiscing diam.
                                        Dis velit nam vitae hendrerit at egestas.
                                    </p>
                                    <p className="inter text-base leading-6 text-opacity-[70%] pb-8 max-w-[533px]">
                                        Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                                        eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                                        quam. Hac posuere eget nam diam velit urna adipiscing diam.
                                        Dis velit nam vitae hendrerit at egestas. Tellus velit turpis
                                        at sed lorem vitae sed. Proin urna ornare dolor mauris
                                        convallis varius nunc.
                                    </p>
                                    <button className="inter font-semibold text-base text-white py-4 px-14 rounded-xl bg-[#3C278D] transition-all duration-300 hover:bg-[#25089b] ">
                                        Button
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-12">
                                <div>
                                    <img src={Slick3} alt="image-3" className="min-w-[531px] h-[387px] rounded-xl" />
                                </div>
                                <div>
                                    <h2 className="lato font-semibold text-5xl leading-[57px]">
                                        Lorem ipsum
                                    </h2>
                                    <p className="inter text-base leading-6 text-opacity-[70%] py-4 max-w-[533px]">
                                        Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                                        eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                                        quam. Hac posuere eget nam diam velit urna adipiscing diam.
                                        Dis velit nam vitae hendrerit at egestas.
                                    </p>
                                    <p className="inter text-base leading-6 text-opacity-[70%] pb-8 max-w-[533px]">
                                        Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                                        eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                                        quam. Hac posuere eget nam diam velit urna adipiscing diam.
                                        Dis velit nam vitae hendrerit at egestas. Tellus velit turpis
                                        at sed lorem vitae sed. Proin urna ornare dolor mauris
                                        convallis varius nunc.
                                    </p>
                                    <button className="inter font-semibold text-base text-white py-4 px-14 rounded-xl bg-[#3C278D] transition-all duration-300 hover:bg-[#25089b] ">
                                        Button
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-12">
                                <div>
                                    <img src={Slick4} alt="image-4" className="min-w-[531px] h-[387px] rounded-xl" />
                                </div>
                                <div>
                                    <h2 className="lato font-semibold text-5xl leading-[57px]">
                                        Lorem ipsum
                                    </h2>
                                    <p className="inter text-base leading-6 text-opacity-[70%] py-4 max-w-[533px]">
                                        Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                                        eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                                        quam. Hac posuere eget nam diam velit urna adipiscing diam.
                                        Dis velit nam vitae hendrerit at egestas.
                                    </p>
                                    <p className="inter text-base leading-6 text-opacity-[70%] pb-8 max-w-[533px]">
                                        Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                                        eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                                        quam. Hac posuere eget nam diam velit urna adipiscing diam.
                                        Dis velit nam vitae hendrerit at egestas. Tellus velit turpis
                                        at sed lorem vitae sed. Proin urna ornare dolor mauris
                                        convallis varius nunc.
                                    </p>
                                    <button className="inter font-semibold text-base text-white py-4 px-14 rounded-xl bg-[#3C278D] transition-all duration-300 hover:bg-[#25089b] ">
                                        Button
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-12">
                                <div>
                                    <img src={Slick5} alt="image-5" className="min-w-[531px] h-[387px] rounded-xl" />
                                </div>
                                <div>
                                    <h2 className="lato font-semibold text-5xl leading-[57px]">
                                        Lorem ipsum
                                    </h2>
                                    <p className="inter text-base leading-6 text-opacity-[70%] py-4 max-w-[533px]">
                                        Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                                        eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                                        quam. Hac posuere eget nam diam velit urna adipiscing diam.
                                        Dis velit nam vitae hendrerit at egestas.
                                    </p>
                                    <p className="inter text-base leading-6 text-opacity-[70%] pb-8 max-w-[533px]">
                                        Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                                        eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                                        quam. Hac posuere eget nam diam velit urna adipiscing diam.
                                        Dis velit nam vitae hendrerit at egestas. Tellus velit turpis
                                        at sed lorem vitae sed. Proin urna ornare dolor mauris
                                        convallis varius nunc.
                                    </p>
                                    <button className="inter font-semibold text-base text-white py-4 px-14 rounded-xl bg-[#3C278D] transition-all duration-300 hover:bg-[#25089b] ">
                                        Button
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Slider>

                    <div className="max-w-[1006px] mx-auto px-3">
                        <Slider asNavFor={nav1}
                           ref={sliderRef}
                            slidesToShow={5}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            arrows={true}
                            className='mt-10'>
                            <div className='max-w-[182px] mx-auto'>
                                <img src={Slick1} alt="image-1" className='rounded-xl' />
                            </div>
                            <div className='max-w-[182px] mx-auto'>
                                <img src={Slick2} alt="image-1" className='rounded-xl' />
                            </div>
                            <div className='max-w-[182px] mx-auto'>
                                <img src={Slick3} alt="image-1" className='rounded-xl' />
                            </div>
                            <div className='max-w-[182px] mx-auto'>
                                <img src={Slick4} alt="image-1" className='rounded-xl' />
                            </div>
                            <div className='max-w-[182px] mx-auto'>
                                <img src={Slick5} alt="image-1" className='rounded-xl' />
                            </div>
                        </Slider>
                        <div  className="flex items-center justify-between absolute w-full top-[510px]">
                            <button onClick={handlePrev} className="w-10 h-[38px] rounded-full bg-[#3C278D] flex items-center justify-center absolute left-[-52px]">
                                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.7973 2.0881C12.9077 1.97804 12.994 1.84856 13.0513 1.70707C13.1085 1.56557 13.1357 1.41483 13.1311 1.26346C13.1266 1.11208 13.0904 0.963027 13.0248 0.824811C12.9591 0.686596 12.8652 0.561923 12.7484 0.457911C12.6316 0.353899 12.4942 0.272585 12.3441 0.218611C12.1939 0.164638 12.034 0.139062 11.8734 0.143344C11.7127 0.147627 11.5546 0.181683 11.4079 0.243569C11.2612 0.305455 11.129 0.393958 11.0186 0.504026L0.620099 10.8801C0.405357 11.0941 0.285706 11.3775 0.285706 11.6721C0.285706 11.9667 0.405357 12.2501 0.620099 12.4642L11.0186 22.8414C11.1282 22.9538 11.2605 23.0447 11.4077 23.1086C11.5549 23.1725 11.7141 23.2082 11.8761 23.2136C12.038 23.219 12.1995 23.194 12.3512 23.1402C12.5028 23.0863 12.6416 23.0045 12.7594 22.8997C12.8772 22.7948 12.9718 22.6689 13.0376 22.5293C13.1033 22.3897 13.139 22.2392 13.1426 22.0865C13.1461 21.9338 13.1174 21.782 13.0581 21.6398C12.9989 21.4977 12.9102 21.368 12.7973 21.2584L3.19158 11.6721L12.7973 2.0881Z" fill="white" />
                                </svg>
                            </button>
                            <button onClick={handleNext} className="w-10 h-[38px] rounded-full bg-[#3C278D] flex items-center justify-center absolute right-[115px]">
                                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.20267 2.0881C1.0923 1.97804 1.00601 1.84856 0.948743 1.70707C0.891471 1.56557 0.864331 1.41483 0.868876 1.26346C0.87342 1.11208 0.909557 0.963027 0.975225 0.824811C1.04089 0.686596 1.13481 0.561923 1.2516 0.457911C1.36839 0.353899 1.50578 0.272585 1.65592 0.218611C1.80607 0.164638 1.96601 0.139062 2.12664 0.143344C2.28727 0.147627 2.44543 0.181683 2.5921 0.243569C2.73876 0.305455 2.87105 0.393958 2.98142 0.504026L13.3799 10.8801C13.5946 11.0941 13.7143 11.3775 13.7143 11.6721C13.7143 11.9667 13.5946 12.2501 13.3799 12.4642L2.98142 22.8414C2.87178 22.9538 2.73952 23.0447 2.59231 23.1086C2.44511 23.1725 2.2859 23.2082 2.12394 23.2136C1.96198 23.219 1.80048 23.194 1.64884 23.1402C1.4972 23.0863 1.35843 23.0045 1.24059 22.8997C1.12276 22.7948 1.02821 22.6689 0.962434 22.5293C0.896659 22.3897 0.86097 22.2392 0.857442 22.0865C0.853913 21.9338 0.882614 21.782 0.941878 21.6398C1.00114 21.4977 1.08979 21.368 1.20267 21.2584L10.8084 11.6721L1.20267 2.0881Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

