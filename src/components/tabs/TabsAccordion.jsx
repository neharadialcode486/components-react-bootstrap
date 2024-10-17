import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { TABS_DATA } from "../../utils/Helper";
import Icon from '../common/Icons';

const TabsAccordion = () => {
    const { tabName } = useParams();
    const [activeTab, setActiveTab] = useState(0);
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);
    useEffect(() => {
        const tabIndex = TABS_DATA.findIndex(tab => tab.title.toLowerCase() === tabName?.toLowerCase());
        if (tabIndex !== -1) {
            setActiveTab(tabIndex);
        } else {
            setActiveTab(0);
        }
    }, [tabName]);
    useEffect(() => {
        contentRefs.current = contentRefs.current.slice(0, TABS_DATA[activeTab].accordionContent.length);
    }, [activeTab]);
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
        <div className='bg-black py-40 py-sm-56 py-md-64'>
            <div className="container my-2">
                <div className="w-fit mx-auto bg-linear-green p-px rounded-full"><p className='text-white py-12 px-20 fw-medium mb-0 rounded-full text-sm bg-deep-gray'>Nos formations</p></div>
                <div className="overflow-x-scroll overflow-x-lg-visible w-100 mt-4 p-2">
                    <div className="min-w-779 position-relative z-10 w-fit mx-auto d-flex justify-content-lg-center align-items-center gap-4">
                        {TABS_DATA.map((tab, idx) => (
                            <a href={`/${tab.title.toLowerCase()}`} key={idx}
                                className={`px-24 py-18 fw-bold text-lg position-relative tabs rounded-lg ${activeTab === idx ? "bg-deep-gray tabsActive" : ""}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveTab(idx);
                                    window.history.pushState(null, '', `/${tab.title.toLowerCase()}`);
                                }} >
                                <span className={activeTab === idx ? "text-transparent bg-linear-green bg-clip-text " : "text-white"}>{tab.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
                <div className={`mt-40 d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center gap-4`}>
                    <div className="max-w-500">
                        <img src={TABS_DATA[activeTab].image} alt={TABS_DATA[activeTab].title} className='w-100 rounded-2xl' />
                    </div>
                    <div className="max-w-764 w-100 p-sm-32">
                        <h2 className='fw-bold text-3xl mb-0 text-center text-lg-left text-white'>Investisseur {TABS_DATA[activeTab].title}</h2>
                        {TABS_DATA[activeTab].accordionContent.map((item, index) => (
                            <div key={index} className={`overflow-hidden d-flex mt-2 mt-sm-24 justify-content-center position-relative transition border rounded-2xl ${openIndex === index ? "border-off-green" : "border-light-gray"}`} >
                                <div className="accordion w-100">
                                    <div role="button"
                                        className={`position-relative z-1 d-flex align-items-center justify-content-between gap-1 cursor-pointer overflow-hidden ${openIndex === index ? "p-0 max-h-0" : "px-sm-24 py-3 px-3 py-sm-24"}`}
                                        onClick={() => handleToggle(index)}
                                        aria-expanded={openIndex === index}
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                handleToggle(index);
                                            }
                                        }}>
                                        <h3 className="fw-medium mb-0 text-off-white text-base text-sm-lg" >{item.title}</h3>
                                        <div className={`${openIndex === index ? '' : 'rotate-180'} w-12 w-sm-20 transition`}><Icon iconName='plusIcon' /></div>
                                    </div>
                                    <div ref={(el) => { contentRefs.current[index] = el; }}
                                        className={`accordion-content max-h-0 overflow-hidden transition ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                                        style={{ maxHeight: openIndex === index ? getHeight(index) : '0px', }}>
                                        <div className="d-flex flex-column p-24">
                                            <p className="text-dark-gray text-sm text-sm-base mb-0 fw-medium">{item.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabsAccordion;