import { useEffect, useState, useRef } from 'react';
import { PLATFORM_DATA } from '../../utils/Helper';
import ellipse from "../../assets/images/webp/ellipse-white.webp";
import whiteEllipse from "../../assets/images/webp/white-ellpise.webp";

const CounterPlatform = () => {
    const [percentages, setPercentages] = useState(PLATFORM_DATA.map(() => 0));
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const sectionElement = sectionRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        PLATFORM_DATA.forEach((item, index) => {
                            let start = 0;
                            const end = parseInt(item.number);
                            const increment = 1;
                            const duration = 2000;
                            const stepTime = Math.abs(Math.floor(duration / (end - start)));
                            const timer = setInterval(() => {
                                start += increment;
                                setPercentages((prevPercentages) => {
                                    const newPercentages = [...prevPercentages];
                                    newPercentages[index] = start;
                                    return newPercentages;
                                });

                                if (start >= end) {
                                    clearInterval(timer);
                                }
                            }, stepTime);
                        });

                        setHasAnimated(true);
                    }
                });
            },
            { threshold: 0.5 }
        );
        if (sectionElement) {
            observer.observe(sectionElement);
        }
        return () => {
            if (sectionElement) {
                observer.unobserve(sectionElement);
            }
        };
    }, [hasAnimated]);

    return (
        <div ref={sectionRef} className="py-64 bg-off-gray position-relative">
            <div className="container position-relative z-10">
                <p className="mx-auto w-fit text-off-blue  text-uppercase fw-medium text-sm text-sm-base">Platform</p>
                <h2 className='text-center mt-1 mt-sm-2 text-md-4xl text-3xl text-lg-40 fw-normal'>Through <span className='fw-semibold'>Our Platform</span></h2>
                <p className='max-w-710 mx-auto fw-normal text-base opacity-70 text-center mt-1 mt-sm-2'>We’ve helped our partners and patients achieve</p>
                <div className="mt-lg-56 mt-sm-32 pt-1 max-w-861 w-100 d-flex flex-row flex-wrap flex-md-nowrap justify-content-center justify-content-md-between mx-auto gap-md-2">
                    {PLATFORM_DATA.map((item, idx) => (
                        <div key={idx} className="d-flex justify-content-center px-3 mt-4 mt-md-0 w-100 px-md-0">
                            <div className={`max-w-268 position-relative z-10 rounded w-100 min-h-207 p-3 d-flex flex-column align-items-center justify-content-center ${idx === 0 ? "bg-light-green" : idx === 1 ? "bg-light-blue" : "bg-off-blue"}`}>
                                <p className={`text-5xl fw-semibold position-relative z-10 mb-0 text-white ${idx === 0 ? "text-custom-lg-4xl" : "text-custom-lg-2xl"}`}>
                                    {percentages[idx]}%
                                </p>
                                <p className={`fw-normal text-white position-relative z-10 mb-0 opacity-70 text-lg text-sm-xl text-center ${idx === 2 ? "mt-1" : ""}`}>
                                    {item.text}
                                </p>
                                <img src={whiteEllipse} className='w-98 h-88 position-absolute bottom-0 end-0' alt='ellipse' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <img src={ellipse} className='position-absolute top-0 d-none d-sm-flex end-0' alt='ellipse' />
        </div>
    );
};

export default CounterPlatform;