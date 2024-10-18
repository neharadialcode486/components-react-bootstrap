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
            <div className="bg-off-yellow w-100 position-fixed max-w-1920 top-0 d-flex justify-content-end translate-middle-x start-50 h-840">
                <img src={plus} alt="plus" className='dot-img' />
            </div>
            <div className="p-lg-4 p-2 position-relative z-20 w-100 w-sm-83 overflow-hidden">
                <h2 className='fw-bold text-3xl text-md-4xl mt-4 mt-sm-2'>Welcome back, Zareh 👋🏻</h2>
                <p className='mt-3 fw-normal text-base'>Below you find your upcoming events, enrolled programmes and progress</p>
                <div className="mt-5 flex-xl-row flex-column d-flex justify-content-between gap-20">
                    <div className="rounded-lg w-100 w-xl-58 bg-white p-2 p-lg-32">
                        <h2 className='fw-bold text-2xl mb-4 mb-lg-5'>You have 3 upcoming events</h2>
                        {EVENTS_DATA.map((items, idx) => (
                            <div key={idx} className="d-flex justify-content-between align-items-center mt-4 w-100">
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black w-md-80 h-md-80 h-sm-64 w-56 h-56 w-sm-64 rounded-full">
                                    <p className='fw-black text-lg text-sm-xl mb-0 text-md-3xl text-white lh-sm'>{items.date}</p>
                                    <p className='fw-light text-xs text-sm-sm mb-0 text-md-lg text-white text-capitalize lh-sm'>{items.months}</p>
                                </div>
                                <div className="d-flex flex-column max-w-444 col-8 w-lg-100">
                                    <p className='fw-bold text-sm mb-0 text-md-base'>{items.title}</p>
                                    <div className="d-flex align-items-center mt-2">
                                        <Icon iconName='clockIcon' />
                                        <p className='fw-normal text-xs mb-0 ms-1'>{items.time}</p>
                                        <Icon className=' ms-2 ms-sm-4' iconName='locationIcon' />
                                        <p className='fw-normal mb-0 text-xs ms-1'>{items.location}</p>
                                    </div>
                                </div>
                                <a href="/" className='justify-content-center align-items-center d-flex transition rounded-full arrow-icon'><Icon className='transition' iconName='rightArrowIcon' /></a>
                            </div>
                        ))}
                        <a href="/" className='d-flex align-items-center gap-2 fw-semibold text-sm transition mt-5 w-fit mb-5 mb-md-56 text-black'>More events <Icon className='transition' iconName='rightArrowIcon' /></a>
                    </div>
                    <div className="rounded-lg w-100 w-xl-41 bg-white p-2 p-lg-32">
                        <h2 className='fw-bold text-2xl mb-4 mb-md-5'>Your programmes</h2>
                        {[...Array(2)].map((_, index) => (
                            <div key={index} className="rounded-lg box position-relative overflow-hidden">
                                <h2 className='fw-bold text-lg mb-4'>The role of LNG</h2>
                                {[...Array(5)]
                                    .slice(0, index === 0 ? 5 : 2)
                                    .map((_, idx) => (
                                        <div key={idx} className="mt-2 max-w-256 w-100">
                                            <p className="fw-normal mb-0 text-xs">{Data[idx]}</p>
                                            <div className="d-flex gap-2 mt-1">
                                                {idx === 2 ? null : <span className="w-50 d-flex bg-black rounded-3xl h-8"></span>}
                                                {Array.from({ length: idx === 1 || idx === 3 ? 4 : 1 }).map((_, spanIdx) => (
                                                    <span
                                                        key={spanIdx}
                                                        className={`d-flex bg-dark-gray rounded-3xl h-8 ${idx === 2 ? "w-100" : "w-50"}`}
                                                    ></span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                <span className='d-flex yellow-circle position-absolute rounded-full'></span>
                                <Icon className='position-absolute black-icon' iconName={index === 0 ? "lngIcon" : "hydrogenIcon"} />
                            </div>
                        ))}
                        <a href="/" className='d-flex align-items-center gap-2 fw-semibold text-sm transition text-black w-fit mt-4 mb-1'>More programmes <Icon className='transition group-hover:scale-90' iconName='rightArrowIcon' /></a>
                    </div>
                </div>
                <DataSwiper />
            </div>
        </div>
    )
}

export default SideBar