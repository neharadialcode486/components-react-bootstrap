import React from 'react'
import Slider from "react-slick";
import Elegant from '../assets/Elegant-img.webp';
import Luxurious from '../assets/luxurious-image.webp';
import Classic from '../assets/classic-img.webp';


const Simpleslider = () => {
    const settings = {
        dots: true,
      
    };
  return (
      <>
          <div className='min-h-screen flex items-center'>
              <div className='max-w-7xl mx-auto px-3'>
                  <div>
                      <h2 className='playfair text-center font-normal text-5xl'>New <span className='font-bold'>Arrivals</span></h2>
                      <p className='lato font-normal text-base leading-6 text-center max-w-xl mx-auto pt-4'>Discover the latest additions to our collection, showcasing the finest in traditional Moroccan craftsmanship and contemporary design.</p>
                  </div>
                 
              </div>
          </div>
      </>
  )
}

export default Simpleslider