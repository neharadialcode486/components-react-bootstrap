import React from 'react'
import FooterFiveLogo from '../assets/image/svg/cointips-logo.svg'

const FooterFive = () => {
    return (
        <div id='footer' className='bg-cover min-vh-100 mx-auto d-flex align-items-center justify-content-center flex-column'>
        <div className='bg-color-5 rounded-4 w-100'>
            <div className='container footer-5-container'>
                <div className='row'>
                    <div className='col-xl-4 col-lg-6 text-lg-start text-center'>
                        <a href='/'><img className='mb-2' src={FooterFiveLogo} alt='logo' /></a>
                        <p className='light-gray-5 m-0 d-xl-block d-none'>© 2024 Cointips LLC. Tous droits réservés.</p>
                    </div>
                    <div className='col-lg-6 d-flex align-items-center mt-4 mt-lg-0'>
                        <div className='d-flex flex-wrap gap-4 mx-auto justify-content-lg-start justify-content-center'>
                            <a href='#footer' className='text-decoration-none light-gray-5 common-hover-5 mb-0 transitions'>CGV</a>
                            <a href='#footer' className='text-decoration-none light-gray-5 common-hover-5 mb-0 transitions'>Politique
                                de confidentialité</a>
                            <a href='#footer' className='text-decoration-none light-gray-5 common-hover-5 mb-0 transitions'>Mentions
                                légales</a>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-12 d-flex align-items-center '>
                        <div className='mx-auto mt-xl-0 mt-4'>
                            <a className='me-3 pe-1 text-decoration-none' href='https://www.youtube.com/' target='_blank'>
                                <svg className='icon-hover-5' width='35' height='35' viewBox='0 0 35 35' fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <rect x='0.5' y='0.74707' width='33' height='33' rx='16.5' stroke='white' />
                                    <path
                                        d='M26.8409 14.0006C26.7188 12.8096 26.4539 11.4944 25.4802 10.8023C24.7249 10.2659 23.7333 10.2462 22.8077 10.2471C20.8504 10.2489 18.8931 10.2507 16.9358 10.2525C15.0534 10.2542 13.171 10.256 11.2886 10.2578C10.5021 10.2578 9.73787 10.197 9.00756 10.5377C8.37979 10.8309 7.88936 11.388 7.5951 12.0076C7.18491 12.8704 7.0984 13.8468 7.04936 14.8008C6.9584 16.5372 6.96822 18.2789 7.0779 20.0135C7.15726 21.2804 7.35967 22.6797 8.33609 23.4871C9.20195 24.2024 10.4236 24.2372 11.5454 24.2381C15.1087 24.2408 18.672 24.2435 22.2352 24.2471C22.6918 24.2471 23.1689 24.239 23.6343 24.1881C24.551 24.0888 25.424 23.8259 26.0125 23.1455C26.6064 22.4597 26.7589 21.5039 26.8499 20.6C27.0692 18.4076 27.0665 16.192 26.8409 14.0006ZM14.875 20.3219V14.1722L20.187 17.2471L14.875 20.3219Z'
                                        fill='white' />
                                </svg>
                            </a>
                            <a href='https://x.com/home?lang=en' target='_blank'>
                                <svg className='icon-hover-5' width='35' height='35' viewBox='0 0 35 35' fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <rect x='0.5' y='0.74707' width='33' height='33' rx='16.5' stroke='white' />
                                    <path
                                        d='M20.8597 11.1807H22.9178L18.4214 16.32L23.7112 23.3132H19.5692L16.3252 19.0718L12.6133 23.3132H10.5538L15.3632 17.8163L10.2888 11.1807H14.5357L17.4681 15.0574L20.8597 11.1807ZM20.1373 22.0813H21.2778L13.9161 12.348H12.6923L20.1373 22.0813Z'
                                        fill='white' />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='light-gray-5 m-0 d-xl-none d-block text-center mt-4'>© 2024 Cointips LLC. Tous droits réservés.</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default FooterFive
