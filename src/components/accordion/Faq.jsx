import React, { useState, useRef, useEffect } from 'react';
import { ACCORDION_DATA } from '../../utils/Helper';
import Icon from '../common/Icons';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);
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
            <div className="container mt-1 mb-64">
                <h2 className='text-center mb-0 fw-bold text-5xl'>FAQ </h2>
                <p className='text-center mb-0 max-w-788 w-100 mx-auto opacity-70 fw-normal text-base mt-4'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam. </p>
                <div className="pt-1">
                    {ACCORDION_DATA.map((item, index) => (
                        <div key={index} className="overflow-hidden d-flex mx-auto max-w-793 mt-2 mt-sm-3 justify-content-center position-relative transition border border-deep-blue rounded-2xl">
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
                                    <h3 className="fw-semibold text-deep-blue mb-0 text-base text-sm-xl">
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
                                        <p className="text-black opacity-70 pt-sm-12 pt-2 text-sm text-sm-base mb-0 fw-normal ">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;