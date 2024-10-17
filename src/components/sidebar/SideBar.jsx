import React from 'react'
import Header from './Header'
import plus from "../../assets/images/webp/plus-iocns.webp";
import Icon from '../common/Icons';
import { EVENTS_DATA } from '../../utils/Helper';
import DataSwiper from './DataSwiper';

const SideBar = () => {
    const Data = ['Requirements', 'Events', 'Career event', 'Activities', 'Masterclasses']
    return (
        <div className='d-flex justify-content-between bg-dark-gray'>
            <Header />
            <div className="bg-off-yellow w-100 position-fixed max-w-[1920px] top-0 d-flex justify-end left-1/2 -translate-x-1/2 h-[240px]">
                <img src={plus} alt="plus" className='max-w-[200px] w-100 lg:opacity-100 opacity-30' />
            </div>
            <div className="lg:p-8 p-3 position-relative z-20 w-100 sm:w-[83.3%] overflow-hidden">
                <h2 className='font-bold text-3xl md:text-4xl mt-7 sm:mt-2'>Welcome back, Zareh 👋🏻</h2>
                <p className='mt-5 fw-normal text-base'>Below you find your upcoming events, enrolled programmes and progress</p>
                <div className="mt-12 xl:flex-row flex-column d-flex justify-content-between gap-20">
                    <div className="rounded-lg w-100 xl:w-[58.7%] bg-white p-3 lg:p-8">
                        <h2 className='font-bold text-2xl mb-4 lg:mb-9'>You have 3 upcoming events</h2>
                        {EVENTS_DATA.map((items, idx) => (
                            <div key={idx} className="d-flex justify-content-between align-items-center mt-4 w-100">
                                <div className="d-flex flex-column align-items-center justify-center bg-black md:w-20 md:h-20 sm:h-16 w-14 h-14 sm:w-16 rounded-full">
                                    <p className='font-black text-lg sm:text-xl md:text-3xl text-white md:leading-7'>{items.date}</p>
                                    <p className='font-light text-xs sm:text-sm md:text-lg text-white md:leading-5 capitalize'>{items.months}</p>
                                </div>
                                <div className="d-flex flex-column max-w-[444px] w-8/12 lg:w-100">
                                    <p className='font-bold text-sm md:text-base'>{items.title}</p>
                                    <div className="d-flex align-items-center mt-2">
                                        <Icon iconName='clockIcon' />
                                        <p className='fw-normal text-xs ml-1'>{items.time}</p>
                                        <Icon className=' ml-2 sm:ml-4' iconName='locationIcon' />
                                        <p className='fw-normal text-xs ml-1'>{items.location}</p>
                                    </div>
                                </div>
                                <a href="/" className='w-8 h-8 justify-center align-items-center d-flex hover:bg-dark-gray transition hover:border-off-yellow group rounded-full border border-dark-gray'><Icon className='transition group-hover:scale-90' iconName='rightArrowIcon' /></a>
                            </div>
                        ))}
                        <a href="/" className='d-flex align-items-center gap-2 font-semibold text-sm transition group hover:scale-105 mt-12 w-fit mb-5 md:mb-14'>More events <Icon className='transition group-hover:scale-90' iconName='rightArrowIcon' /></a>
                    </div>
                    <div className="rounded-lg w-100 xl:w-[41.3%] bg-white p-3 lg:p-8">
                        <h2 className='font-bold text-2xl mb-4 lg:mb-9'>Your programmes</h2>
                        {[...Array(2)].map((_, index) => (
                            <div key={index} className="border border-dark-gray rounded-lg py-8 px-6 mt-4 position-relative overflow-hidden">
                                <h2 className='font-bold text-lg mb-4'>The role of LNG</h2>
                                {[...Array(5)]
                                    .slice(0, index === 0 ? 5 : 2)
                                    .map((_, idx) => (
                                        <div key={idx} className="mt-3 max-w-[256px] w-100">
                                            <p className="fw-normal text-xs">{Data[idx]}</p>
                                            <div className="d-flex gap-2 mt-0.5">
                                                {idx === 2 ? null : <span className="w-1/2 d-flex bg-black rounded-3xl h-2"></span>}
                                                {Array.from({ length: idx === 1 || idx === 3 ? 4 : 1 }).map((_, spanIdx) => (
                                                    <span
                                                        key={spanIdx}
                                                        className={`d-flex bg-dark-gray rounded-3xl h-2 ${idx === 2 ? "w-100" : "w-1/2"}`}
                                                    ></span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                <span className='d-flex bg-off-yellow w-[120px] h-[120px] position-absolute rounded-full -top-11 -right-11'></span>
                                <Icon className='position-absolute top-4 right-4' iconName={index === 0 ? "lngIcon" : "hydrogenIcon"} />
                            </div>
                        ))}
                        <a href="/" className='d-flex align-items-center gap-2 font-semibold text-sm transition group hover:scale-105 mt-12 w-fit mb-1'>More programmes <Icon className='transition group-hover:scale-90' iconName='rightArrowIcon' /></a>
                    </div>
                </div>
                <DataSwiper />
            </div>
        </div>
    )
}

export default SideBar