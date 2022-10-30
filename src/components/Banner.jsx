import React from 'react'
import Img from '../assets/BannerImg.png'
import Button from './Button';

const Banner = ({text}) => {
  return (
   <section className={`flex justify-between items-center lg:px-36 px-4 sm:px-10 h-auto mt-20 lg:mt-24 py-6 relative bg-[#201e1ebf]`}>
    <div className="lg:w-[51%]">
     <h1 className="text-lg sm:text-2xl lg:text-4xl font-bold text-white">
     {text}
     </h1>
     <div className='mt-8 lg:mt-10'>
        
     <Button text="Contact Us" />
     </div>
    </div>
    <img src={Img} alt="" className='hidden lg:flex lg:w-[40%] h-[100%]' />
   </section>
  );
}

export default Banner