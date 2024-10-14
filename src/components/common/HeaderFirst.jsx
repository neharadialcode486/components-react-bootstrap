import React, { useState, useEffect } from 'react';
import navLogo from '../../assets/images/webp/nav-logo.webp';
import { NAV_ITEMS } from '../../utils/Helper'

const HeaderFirst = () => {
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
                <div className='d-flex justify-content-between align-content-center nav-py'>
                    <a href="/">
                        <img src={navLogo} alt="Navigation-Logo" className='nav-logo pointer-none' />
                    </a>

                    <div className={`menu-list d-flex flex-lg-row align-items-center g-lg-5 d-lg-flex mb-0 ${open ? "show" : ""}`}>
                        {NAV_ITEMS.map((item) => (
                            <a key={item.href} href={item.href} className="list-text fw-normal text-black">
                                {item.text}
                            </a>
                        ))}
                        <button className='nav-button fw-semibold text-white d-lg-none'>Button</button>
                    </div>
                    <button className='nav-button fw-semibold text-white d-lg-block d-none'>Button</button>
                    <div className="toggle-button" onClick={toggleOpen}>
                        {open ? "Close" : "Open Menu"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderFirst;
