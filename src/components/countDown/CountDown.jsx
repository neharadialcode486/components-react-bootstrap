import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import women from "../../assets/images/webp/women-img.webp";

const CountDown = () => {
    const calculateTimeLeft = () => {
        const targetTime = new Date().setHours(24, 0, 0, 0);
        const currentTime = new Date();
        const difference = targetTime - currentTime;
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    const variants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -50, opacity: 0 },
    };
    const getTensAndUnits = (num) => ({
        tens: Math.floor(num / 10),
        units: num % 10,
    });
    const { tens: hoursTens, units: hoursUnits } = getTensAndUnits(timeLeft.hours || 0);
    const { tens: minutesTens, units: minutesUnits } = getTensAndUnits(timeLeft.minutes || 0);
    const { tens: secondsTens, units: secondsUnits } = getTensAndUnits(timeLeft.seconds || 0);

    return (
        <div className='bg-off-pink py-56 position-relative overflow-hidden'>
            <div className="container min-h-598 d-flex align-items-center">
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
                    <div className="max-w-456 w-100">
                        <h2 className="fw-normal text-center text-lg-left text-3xl text-sm-4xl text-md-5xl">Sale Of <span className="fw-bold">The Day</span></h2>
                        <p className="fw-normal text-center text-lg-left opacity-70 text-base mt-3">
                            Don't miss out on our exclusive daily deals! Enjoy significant discounts on select traditional Moroccan garments.
                        </p>
                        <div className="mt-28 d-flex mx-auto align-items-start mx-lg-0 gap-2 w-fit">
                            <div className="position-relative d-flex  text-center">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={hoursTens}
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.4 }}
                                        className=" w-100 fw-medium text-3xl text-sm-4xl text-md-55 text-center"
                                    >
                                        {hoursTens}
                                    </motion.p>
                                </AnimatePresence>
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={hoursUnits}
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.4 }}
                                        className=" fw-medium text-3xl text-sm-4xl text-md-55 text-center"
                                    >
                                        {hoursUnits}
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                            <p className="fw-medium text-3xl mb-0 text-sm-4xl text-md-55">:</p>
                            <div className="position-relative d-flex  text-center">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={minutesTens}
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.4 }}
                                        className=" w-100 fw-medium text-3xl text-sm-4xl text-md-55 text-center"
                                    >
                                        {minutesTens}
                                    </motion.p>
                                </AnimatePresence>
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={minutesUnits}
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.4 }}
                                        className=" fw-medium text-3xl text-sm-4xl text-md-55 text-center"
                                    >
                                        {minutesUnits}
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                            <p className="fw-medium text-3xl mb-0 text-sm-4xl text-md-55">:</p>
                            <div className="position-relative d-flex  text-center">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={secondsTens}
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.4 }}
                                        className=" w-100 fw-medium text-3xl text-sm-4xl text-md-55 text-center"
                                    >
                                        {secondsTens}
                                    </motion.p>
                                </AnimatePresence>
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={secondsUnits}
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.4 }}
                                        className="absolute -right-2.5 sm:-right-3 md:-right-5 w-100 fw-medium text-3xl text-sm-4xl text-md-55 text-center"
                                    >
                                        {secondsUnits}
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="d-flex mt-sm-2 align-items-center mx-auto mx-lg-0 w-fit">
                            <p className="fw-semibold text-lg ml-3">Hours</p>
                            <p className="fw-semibold text-lg mx-4 ms-sm-5 me-sm-4">Minutes</p>
                            <p className="fw-semibold text-lg pe-lg-2">Seconds</p>
                        </div>
                        <button className='mx-auto mx-lg-0 d-block fw-bold text-sm text-sm-base btn-shop text-white bg-off-red transition'>Shop Now</button>
                    </div>
                    <img src={women} alt="women" className="top-lg-50 mt-4 mt-lg-0 translate-middle-lg-y right-lg-0 position-lg-absolute w-100 w-lg-50" />
                </div>
            </div>
        </div>
    );
};

export default CountDown;