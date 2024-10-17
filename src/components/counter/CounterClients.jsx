import { useEffect, useState, useRef } from 'react';
import { CLIENTS_DATA } from '../../utils/Helper';

const CounterClients = () => {
    const [percentages, setPercentages] = useState(CLIENTS_DATA.map(() => 0));
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    useEffect(() => {
        const sectionElement = sectionRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        CLIENTS_DATA.forEach((item, index) => {
                            let start = 0;
                            const isProfit = item.text === "GAINED IN PROFIT";
                            const end = parseInt(item.number.replace(/[^0-9]/g, ''));
                            const intermediateValue = 50000;
                            const threshold = isProfit ? 50 : Math.floor(end * 0.8);
                            const increment = 1;
                            const duration = 2000;
                            const stepTime = Math.abs(Math.floor(duration / (threshold - start)));
                            const timer = setInterval(() => {
                                start += increment;
                                setPercentages((prevPercentages) => {
                                    const newPercentages = [...prevPercentages];
                                    newPercentages[index] = start;
                                    return newPercentages;
                                });
                                if (start >= threshold) {
                                    clearInterval(timer);
                                    if (isProfit) {
                                        setTimeout(() => {
                                            setPercentages((prevPercentages) => {
                                                const newPercentages = [...prevPercentages];
                                                newPercentages[index] = intermediateValue;
                                                return newPercentages;
                                            });
                                            setTimeout(() => {
                                                setPercentages((prevPercentages) => {
                                                    const newPercentages = [...prevPercentages];
                                                    newPercentages[index] = end;
                                                    return newPercentages;
                                                });
                                            }, 500);
                                        }, 300);
                                    }
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
        <div ref={sectionRef} className="py-64 position-relative">
            <div className="container position-relative z-10">
                <h2 className='text-center text-md-4xl max-w-662 w-100 mx-auto text-3xl text-lg-40 fw-bold'>
                    Clients trust us with their <span className='text-medium-orange'>Amazon strategy for a reason.</span>
                </h2>
                <div className="mt-lg-56 pt-3 max-w-1086 w-100 d-flex flex-row flex-wrap flex-xl-nowrap justify-content-center justify-content-xl-between mx-auto gap-xl-4">
                    {CLIENTS_DATA.map((item, idx) => (
                        <div key={idx} className={`d-flex col-12 px-3 mt-4 mt-xl-0 col-md-6 w-xl-100 px-xl-0 ${idx === 0 ? "max-w-xl-308" : idx === 1 ? "max-w-xl-322" : "max-w-xl-356"}`}>
                            <div className={`border border-lighter-orange transition hover-border-medium-orange bg-white rounded-md min-h-140 gap-20 p-20 position-relative w-100 d-flex align-items-center justify-content-center `}>
                                <img src={item.img} alt="icon" className='max-w-70 w-100' />
                                <div className="d-flex flex-column">
                                    <p className='text-40 fw-bold mb-0'>
                                        {idx === 2 ? "$" : ""}{percentages[idx]}{idx === 0 || idx === 2 ? "+" : ""}
                                    </p>
                                    <p className='mt-1 text-uppercase fw-bold mb-0 text-base'>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CounterClients;