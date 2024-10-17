import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logo from "../../assets/images/svg/logo.svg";
import { TABS_DATA } from "../../utils/Helper";
import Icon from '../common/Icons';
import user from "../../assets/images/svg/user-icon.svg";

const Header = () => {
    const { tabName } = useParams();
    const [activeTab, setActiveTab] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1920);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const tabIndex = TABS_DATA.findIndex(tab => tab.title.toLowerCase() === tabName?.toLowerCase());
        setActiveTab(tabIndex !== -1 ? tabIndex : 0);
    }, [tabName]);
    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 1920);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", open && window.innerWidth < 640);
    }, [open]);
    const handleClick = (idx, title) => {
        setActiveTab(idx);
        window.history.pushState(null, '', `/${title.toLowerCase()}`);
        setOpen(false);
    };

    return (
        <div className={`px-md-120 position-absolute position-sm-relative z-200 transition px-sm-96 min-vh-100 ${open ? "start-0" : "left100"}`}>
            <div className="top-0 max-w-sm-192 max-w-md-240 max-w-240 w-100 d-flex flex-column justify-content-between min-vh-100 position-sm-fixed bg-black p-sm-2 p-4 p-md-4"
                style={{ left: isLargeScreen ? 'calc((100vw - 1920px) / 2)' : '0%' }}>
                <div className="d-flex flex-column">
                    <a href="/" className="w-fit mx-auto mt-4"><img src={logo} alt="logo" /></a>
                    <div className="d-flex flex-column mt-64 gap-32">
                        {TABS_DATA.map((tab, idx) => (
                            <div key={idx} className="d-flex align-items-center gap-20">
                                <span className={`w-6 h-6 rounded-full ${activeTab === idx ? "bg-off-yellow" : "bg-black"}`} />
                                <a href={`/${tab.title.toLowerCase()}`}
                                    className={`text-base d-flex align-items-center gap-20 fw-normal ${activeTab === idx ? "text-off-yellow" : "text-white"}`}
                                    onClick={(e) => { e.preventDefault(); handleClick(idx, tab.title); }}>
                                    <Icon svgClass={activeTab === idx ? "fill-off-yellow" : "fill-white"} iconName={tab.icon} />
                                    {tab.title}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-md-3 p-sm-0 p-3 d-flex flex-column">
                    {["Help", "Contact us", "Log out"].map((text, idx) => (
                        <a key={idx} href="/" className="w-fit text-white opacity-50 mt-4 btn-hover transition text-sm">{text}</a>
                    ))}
                    <a href="/" className="d-flex align-items-center gap-3 text-white mt-44">
                        <img src={user} alt="user" /> Zareh Geertjes
                    </a>
                </div>
            </div>
            <div onClick={() => setOpen(!open)} className="position-fixed w-56 h-40 bg-white top-0 left-0 d-sm-none z-150 d-grid place-items-center border-light-gray">
                {open ? "Close" : "Menu"}
            </div>
        </div>
    );
};

export default Header;