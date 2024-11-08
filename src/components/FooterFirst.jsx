import React from 'react'
import FooterOneTwitter from '../assets/image/svg/twiteer-icon.svg'
import FooterOneFacebook from '../assets/image/svg/facebook-icon.svg'

const FooterFirst = () => {
    return (
        <div id='footer' className='d-flex align-items-center justify-content-center min-vh-100 flex-column'>
        <div className='container'>
            <div className='row  justify-content-md-between'>
                <div className='col-lg-3 col-md-6 mt-sm-5 mt-4 mt-md-0 d-flex flex-column '>
                    <a href='#footer'
                        className='text-decoration-none bg-logo align-items-center d-flex justify-content-center mb-4'>
                        <p className='fw-semibold leading-150 dark-blue m-0'>Logo</p>
                    </a>
                    <p className='leading-150 text-gray footer-text m-0'>Discover Stellar
                        blockchain's unrivaled speed,
                        security, & scalability with Volag. Revolutionize finance.</p>
                </div>
                <div className='col-lg-2 col-6 mt-5 mt-md-0  d-flex  flex-column'>
                    <p className='leading-150 fw-normal mb-3'>Quick Links</p>
                    <ul className='d-flex flex-column gap-3 ps-0'>
                        <li><a href='#footer'
                                className='leading-150 shade-gray transitions common-hover text-decoration-none'>Home</a>
                        </li>
                        <li><a href='#footer'
                                className='leading-150 shade-gray transitions common-hover text-decoration-none'>About</a>
                        </li>
                        <li><a href='#footer'
                                className='leading-150 shade-gray transitions common-hover text-decoration-none'>Community</a>
                        </li>
                        <li><a href='#footer'
                                className='leading-150 shade-gray transitions common-hover text-decoration-none'>RoadMap</a>
                        </li>
                        <li><a href='#footer'
                                className='leading-150 shade-gray transitions common-hover text-decoration-none mb-lg-0 mb-4'>Faqs</a>
                        </li>
                    </ul>
                </div>
                <div className='col-lg-2 col-6 mt-5 mt-lg-0 d-flex  flex-column'>
                    <div>
                        <p className='leading-150 fw-normal mb-3 '>Links</p>
                        <ul className='d-flex flex-column gap-3 ps-0'>
                            <li><a className='leading-150 shade-gray text-decoration-none transitions common-hover'
                                    href=''>Terms &
                                    Conditions</a></li>
                            <li><a className='leading-150 shade-gray text-decoration-none transitions common-hover'
                                    href=''>Privacy
                                    Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-4 ps-lg-1 col-md-6 col-12 d-flex '>
                    <div className='max-sm-w w-100 mt-lg-0 mt-5'>
                        <p className='leading-150 fw-normal mb-3 '>Get in Touch</p>
                        <form className='mail max-sm-w  d-flex py-1 pe-1 mb-3'>
                            <input type='email' placeholder='Type Your Mail'
                                className='leading-150 email ms-2 me-0 border-0' required/>
                            <button className='Search-btn leading-150 text-white transitions leading-150'>Search</button>
                        </form>
                        <p className='leading-150 text-black  d-flex text-decoration-none'>Follow
                            us
                            now</p>
                        <div className='d-flex gap-3 mt-3'>
                            <a className='icon-hover transitions' href='https://www.twiteer.com/' target='_blank'><img
                                    src={FooterOneTwitter} alt='twitter'/></a>
                            <a className='icon-hover transitions' href='https://www.facebook.com/' target='_blank'><img
                                    src={FooterOneFacebook} alt='facebook'/></a>
                            <a className='icon-hover transitions' href='#'>
                            <svg width='34' height='32' viewBox='0 0 34 32' fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <g clip-path='url(#clip0_5012_26)'>
                                        <ellipse cx='16.5' cy='16' rx='16.5' ry='16' fill='#3C278D' />
                                        <path
                                            d='M8.40909 21V9.36364H12.4773C13.2879 9.36364 13.9564 9.50379 14.483 9.78409C15.0095 10.0606 15.4015 10.4337 15.6591 10.9034C15.9167 11.3693 16.0455 11.8864 16.0455 12.4545C16.0455 12.9545 15.9564 13.3674 15.7784 13.6932C15.6042 14.0189 15.3731 14.2765 15.0852 14.4659C14.8011 14.6553 14.4924 14.7955 14.1591 14.8864V15C14.5152 15.0227 14.8731 15.1477 15.233 15.375C15.5928 15.6023 15.8939 15.928 16.1364 16.3523C16.3788 16.7765 16.5 17.2955 16.5 17.9091C16.5 18.4924 16.3674 19.017 16.1023 19.483C15.8371 19.9489 15.4186 20.3182 14.8466 20.5909C14.2746 20.8636 13.5303 21 12.6136 21H8.40909ZM9.81818 19.75H12.6136C13.5341 19.75 14.1875 19.572 14.5739 19.2159C14.964 18.8561 15.1591 18.4205 15.1591 17.9091C15.1591 17.5152 15.0587 17.1515 14.858 16.8182C14.6572 16.4811 14.3712 16.2121 14 16.0114C13.6288 15.8068 13.1894 15.7045 12.6818 15.7045H9.81818V19.75ZM9.81818 14.4773H12.4318C12.8561 14.4773 13.2386 14.3939 13.5795 14.2273C13.9242 14.0606 14.197 13.8258 14.3977 13.5227C14.6023 13.2197 14.7045 12.8636 14.7045 12.4545C14.7045 11.9432 14.5265 11.5095 14.1705 11.1534C13.8144 10.7936 13.25 10.6136 12.4773 10.6136H9.81818V14.4773ZM22.2926 21.1818C21.4517 21.1818 20.7263 20.9962 20.1165 20.625C19.5104 20.25 19.0426 19.7273 18.7131 19.0568C18.3873 18.3826 18.2244 17.5985 18.2244 16.7045C18.2244 15.8106 18.3873 15.0227 18.7131 14.3409C19.0426 13.6553 19.5009 13.1212 20.0881 12.7386C20.679 12.3523 21.3684 12.1591 22.1562 12.1591C22.6108 12.1591 23.0597 12.2348 23.5028 12.3864C23.946 12.5379 24.3494 12.7841 24.7131 13.125C25.0767 13.4621 25.3665 13.9091 25.5824 14.4659C25.7983 15.0227 25.9062 15.7083 25.9062 16.5227V17.0909H19.179V15.9318H24.5426C24.5426 15.4394 24.4441 15 24.2472 14.6136C24.054 14.2273 23.7775 13.9223 23.4176 13.6989C23.0616 13.4754 22.6411 13.3636 22.1562 13.3636C21.6222 13.3636 21.16 13.4962 20.7699 13.7614C20.3835 14.0227 20.0862 14.3636 19.8778 14.7841C19.6695 15.2045 19.5653 15.6553 19.5653 16.1364V16.9091C19.5653 17.5682 19.679 18.1269 19.9062 18.5852C20.1373 19.0398 20.4574 19.3864 20.8665 19.625C21.2756 19.8598 21.7509 19.9773 22.2926 19.9773C22.6449 19.9773 22.9631 19.928 23.2472 19.8295C23.535 19.7273 23.7831 19.5758 23.9915 19.375C24.1998 19.1705 24.3608 18.9167 24.4744 18.6136L25.7699 18.9773C25.6335 19.4167 25.4044 19.803 25.0824 20.1364C24.7604 20.4659 24.3627 20.7235 23.8892 20.9091C23.4157 21.0909 22.8835 21.1818 22.2926 21.1818Z'
                                            fill='white' />
                                    </g>
                                    <defs>
                                        <clipPath id='clip0_5012_26'>
                                            <rect width='34.01' height='31.92' fill='white'/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bottom-line mb-2 w-100'></div>
        <div className='container'>
            <p className='text-center shade-gray leading-150 mb-md-0 mb-sm-5 mb-4'>© 2024 Copyright company name. All Right Reserved. </p>
        </div>
    </div>
    )
}

export default FooterFirst