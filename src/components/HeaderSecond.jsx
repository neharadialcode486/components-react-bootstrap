import React, { useState, useEffect } from 'react';
import navLogo from '../assets/images/webp/nav-logo.webp';

const HeaderSecond = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        if (window.innerWidth < 1024) {
            setOpen((prevOpen) => !prevOpen);
        }
    };
    useEffect(() => {
        const handleOverflow = () => {
            if (open && window.innerWidth < 1024) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);

    return (
        <div className='bg-white'>
            <div className='container'>
                <div className='d-flex justify-content-lg-center justify-content-between align-content-center nav-py'>
                    <a href="/">
                        <img src={navLogo} alt="Navigation-Logo" className='nav-logo d-lg-none pointer-none' />
                    </a>

                    <div className={`menu-list d-flex flex-lg-row align-items-center g-lg-5 d-lg-flex mb-0 ${open ? "show" : ""}`}>
                        <a href="" className="list-text fw-normal text-black">TAB NAME</a>
                        <a href="" className="list-text fw-normal text-black">TAB NAME</a>
                        <div className='d-none d-lg-block'>
                            <a href="/">
                                <img src={navLogo} alt="Navigation-Logo" className='nav-logo pointer-none' />
                            </a>
                        </div>
                        <a href="" className="list-text fw-normal text-black">TAB NAME</a>
                        <a href="" className="list-text fw-normal text-black">TAB NAME</a>
                    </div>
                    <div className="toggle-button" onClick={toggleOpen}>
                        {open ? (
                            <span className="icon-cross"><svg xmlns="http://www.w3.org/2000/svg" fill="#3c278d" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                            </svg></span> 
                        ) : (
                                <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="black" class="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                                </svg></span> 
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSecond;

