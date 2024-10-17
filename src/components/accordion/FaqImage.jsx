import React, { useState, useRef, useEffect } from 'react';
import { ACCORDION_DATA } from '../../utils/Helper';
import Icon from '../common/Icons';
import owl1 from "../../assets/images/webp/owl-bird.webp";
import owl2 from "../../assets/images/webp/owl-bird2.webp";
import owl3 from "../../assets/images/webp/owl-bird3.webp";
import owl4 from "../../assets/images/webp/owl-bird4.webp";

const FaqImage = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);
    const owlImages = [owl1, owl2, owl3, owl4];
    useEffect(() => {
        contentRefs.current = contentRefs.current.slice(0, ACCORDION_DATA.length);
    }, []);
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const getHeight = (index) => {
        if (contentRefs.current[index]) {
            return contentRefs.current[index].scrollHeight + 'px';
        }
        return '0px';
    };

    return (
        <div className='z-1 position-relative py-64'>
            <div className="container">
                <div className="d-flex flex-column flex-xl-row gap-40 align-items-center justify-content-center">
                    <div className="pt-1 max-xl-w-529 w-100">
                        <h2 className=' text-xl-left text-center fw-bold text-5xl'>FAQ </h2>
                        <p className=' text-xl-left mb-0 text-center opacity-70 fw-normal text-base mt-4'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam. </p>
                        {ACCORDION_DATA.slice(0, 4).map((item, index) => (
                            <div key={index} className={`overflow-hidden d-flex mt-2 justify-content-center position-relative transition border border-deep-blue rounded-2xl ${index === 0 ? "mt-sm-24" : "mt-sm-20"}`}>
                                <div className="accordion w-100">
                                    <div
                                        role="button"
                                        className={`bg-white position-relative z-1 d-flex align-items-center justify-content-between gap-1 cursor-pointer px-sm-24 py-3 px-3 pt-sm-20 ${openIndex === index ? "pb-sm-16" : "pb-sm-20"}`}
                                        onClick={() => handleToggle(index)}
                                        aria-expanded={openIndex === index}
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                handleToggle(index);
                                            }
                                        }}
                                    >
                                        <h3 className="fw-semibold text-deep-blue  text-base text-sm-xl">
                                            <span className=' fw-normal'>{index + 1} . </span>{item.title}
                                        </h3>
                                        <div className={`${openIndex === index ? 'rotate-180' : ''} w-12 w-sm-20 transition`}>
                                            <Icon iconName='downIcon' />
                                        </div>
                                    </div>
                                    <div
                                        ref={(el) => {
                                            contentRefs.current[index] = el;
                                        }}
                                        className={`accordion-content max-h-0 overflow-hidden transition ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                                        style={{
                                            maxHeight: openIndex === index ? getHeight(index) : '0px',
                                        }}
                                    >
                                        <div className="d-flex flex-column px-24 pb-16">
                                            <span className='bg-black d-flex w-100 h-1 opacity-40'></span>
                                            <p className="text-black opacity-70 pt-sm-12 pt-2 text-sm text-sm-base fw-normal ">
                                                Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero porttitor quam sed aliquet. Sodales vulputate elementum arcu donec. Feugiat nibh ullamcorper egestas
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="max-w-576 w-100 max-h-349 max-h-594 d-flex overflow-hidden">
                        <img src={openIndex !== null ? owlImages[openIndex] : owl1} alt="owl-bird" className='w-100' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqImage;