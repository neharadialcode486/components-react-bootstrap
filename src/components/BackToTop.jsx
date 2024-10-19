import { useEffect, useState } from 'react';
import arrowIcon from "../assets/images/svg/arrow-icon.svg"

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const SCROLL_TO_TOP = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={SCROLL_TO_TOP} className="top-scroll d-flex justify-content-center align-items-center ">
                    <img src={arrowIcon} alt="arrow-icon" />
                </button>
            )}
        </>
    );
};

export default BackToTop;