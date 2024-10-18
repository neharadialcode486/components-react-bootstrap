import React from 'react';
import Icon from '../common/Icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { SWIPER_DATA } from '../../utils/Helper';

const DataSwiper = () => {
    return (
        <div className='mt-5 position-relative w-100'>
            <div className="d-flex w-100 justify-content-between mb-4">
                <h2 className='fw-bold text-2xl'>Recommended for you</h2>
                <div className="d-flex align-items-center gap-2 position-relative">
                    <Icon className="swiper-button-next position-relative cursor-pointer transition rounded-full" iconName='rightArrowIcon' />
                    <Icon className="swiper-button-prev top-auto position-relative cursor-pointer transition rounded-full" iconName='rightArrowIcon' />
                </div>
            </div>
            <div className=" w-100">
                <Swiper
                    className='pb-56'
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
                            <div className="position-relative overflow-hidden rounded-lg w-100 h-100 min-h-317 bg-white">
                                <div className="position-relative overflow-hidden">
                                    <img src={items.img} alt={items.img} className='w-100 position-relative z-10' />
                                </div>
                                <div className="bg-white w-100 p-4">
                                    <h2 className='mt-1 text-base lh-16 mb-0 fw-bold min-h-32'>{items.title}</h2>
                                    <div className="d-flex align-items-center gap-2 mt-3">
                                        <Icon iconName='clockIcon' />
                                        <p className='fw-normal mb-0 text-xs'>Online</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 mb-3 mt-1">
                                        <Icon iconName='locationIcon' />
                                        <p className='fw-normal mb-0 text-xs'>80000</p>
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