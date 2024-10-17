import React from 'react';
import Icon from '../common/Icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { SWIPER_DATA } from '../../utils/Helper';

const DataSwiper = () => {
    return (
        <div className='mt-7 position-relative w-100'>
            <div className="d-flex w-100 justify-content-between mb-6">
                <h2 className='fw-bold text-2xl'>Recommended for you</h2>
                <div className="d-flex align-items-center gap-2 position-relative">
                    <Icon className="hover:scale-95 swiper-button-next !top-auto !position-relative !right-auto !w-8 !h-8 cursor-pointer hover:bg-white transition hover:border-off-yellow rounded-full border border-[#BBBAB6]" iconName='rightArrowIcon' />
                    <Icon className="hover:scale-95 swiper-button-prev !top-auto !position-relative !left-auto rotate-180 cursor-pointer !w-8 !h-8 hover:bg-white transition hover:border-off-yellow rounded-full border border-[#BBBAB6]" iconName='rightArrowIcon' />
                </div>
            </div>
            <div className=" w-100">
                <Swiper
                    className='!pb-14'
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[Navigation]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        }
                    }}
                >
                    {SWIPER_DATA.map((items, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="position-relative overflow-hidden rounded-lg w-100 h-100 min-h-[292px] bg-white">
                                <div className="position-relative overflow-hidden">
                                    <img src={items.img} alt={items.img} className='w-100 position-relative z-10 hover:scale-110 transition' />
                                </div>
                                <div className="bg-white w-100 -mt-0.5 p-6">
                                    <h2 className='mt-0.5 text-base leading-4 fw-bold min-h-8'>{items.title}</h2>
                                    <div className="d-flex align-items-center gap-2.5 mt-4">
                                        <Icon iconName='clockIcon' />
                                        <p className='fw-normal text-xs'>Online</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-2.5 mb-4 mt-2">
                                        <Icon iconName='locationIcon' />
                                        <p className='fw-normal text-xs'>80000</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default DataSwiper;