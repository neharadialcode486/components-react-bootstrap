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
        <div className='bg-white lg:py-24 py-40 py-sm-56 py-md-64'>
            <div className="container my-2.5">
                <h2 className='font-normal md:text-4xl text-3xl lg:text-5xl text-center'>Shop By <span className='fw-bold'>Category</span></h2>
                <p className='font-normal text-base opacity-70 max-w-[695px] w-100 mx-auto text-center mt-4'>Explore our extensive collection of traditional Moroccan garments, each crafted with care and precision to bring you the finest in cultural fashion.</p>
                <div className="overflow-x-scroll md:overflow-x-visible w-100 mt-8 p-2">
                    <div className="min-w-[551px] position-relative z-10 w-fit mx-auto d-flex md:justify-content-center align-items-center gap-2.5 border-medium-gray border rounded-full p-2.5">
                        {TABS_SWIPER.map((tab, idx) => (
                            <a href={`/${tab.title.toLowerCase()}`} key={idx}
                                className={`px-[26px] py-2.5 fw-bold rounded-full text-base position-relative ${activeTab === idx ? "bg-light-orange text-white" : "bg-transparent"}`}
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
                <div className="max-w-[1140px] mx-auto mt-40 w-100">
                    <Swiper className='!pb-14'
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
                                <div className="overflow-hidden w-100 rounded-xl position-relative h-full max-h-[378px]">
                                    <img src={items.image} alt="djellabas" className='w-100 h-full' />
                                    <p className='font-semibold text-3xl absolute capitalize bottom-20 -left-4 z-10 -rotate-90 text-white'>{items.title}</p>
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