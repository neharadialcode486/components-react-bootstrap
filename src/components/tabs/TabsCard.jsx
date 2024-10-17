import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { TABS_SWIPER } from "../../utils/Helper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const TabsCard = () => {
    const { tabName } = useParams();
    const [activeTab, setActiveTab] = useState(0);
    const contentRefs = useRef([]);
    useEffect(() => {
        const tabIndex = TABS_SWIPER.findIndex(tab => tab.title.toLowerCase() === tabName?.toLowerCase());
        if (tabIndex !== -1) {
            setActiveTab(tabIndex);
        } else {
            setActiveTab(0);
        }
    }, [tabName]);
    useEffect(() => {
        contentRefs.current = contentRefs.current.slice(0, TABS_SWIPER[activeTab].tabsContent.length);
    }, [activeTab]);

    return (
        <div className='bg-white py-40 py-md-64'>
            <div className="container my-2">
                <h2 className='fw-normal text-md-4xl text-3xl text-lg-5xl text-center'>Shop By <span className='fw-bold'>Category</span></h2>
                <p className='fw-normal text-base opacity-70 max-w-695 w-100 mx-auto text-center mt-4'>Explore our extensive collection of traditional Moroccan garments, each crafted with care and precision to bring you the finest in cultural fashion.</p>
                <div className="overflow-x-scroll overflow-x-md-visible w-100 mt-32 p-2">
                    <div className="min-w-551 position-relative z-10 w-fit mx-auto d-flex justify-content-md-center align-items-center gap-2 border-medium-gray border rounded-full p-2">
                        {TABS_SWIPER.map((tab, idx) => (
                            <a href={`/${tab.title.toLowerCase()}`} key={idx}
                                className={`px-26 py-10 fw-bold rounded-full text-base position-relative ${activeTab === idx ? "bg-light-orange text-white" : "text-black"}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveTab(idx);
                                    window.history.pushState(null, '', `/${tab.title.toLowerCase()}`);
                                }} >
                                {tab.title}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="max-w-1140 mx-auto mt-40 w-100">
                    <Swiper className='pb-56'
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 3,
                            }
                        }}
                    >
                        {TABS_SWIPER[activeTab]?.tabsContent?.map((items, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="overflow-hidden w-100 rounded-xl position-relative h-100 max-h-378">
                                    <img src={items.image} alt="djellabas" className='w-100 h-100' />
                                    <p className='fw-semibold text-3xl position-absolute text-capitalize bottom-80 left-16 z-10 rotate-90 text-white'>{items.title}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default TabsCard;