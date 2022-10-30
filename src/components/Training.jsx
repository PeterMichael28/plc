import {useEffect} from 'react'
import icon1 from '../assets/TrainIcon1.png'
import icon2 from "../assets/TrainIcon2.png";
import icon3 from "../assets/barIcon1.png";
import Button from './Button';
import img1 from "../assets/training.png"
import AOS from "aos";
import "aos/dist/aos.css";

const Training = () => {
         useEffect(() => {
          AOS.init({ duration: 1000 });
         }, []);

  return (
   <section className='mt-16 md:mt-28 m-auto w-[85%] sm:w-[70%] mb-8'>
    <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 md:w-[80%] lg:w-[70%] m-auto' data-aos="zoom-in">
     Get trained at our institution with this few steps
    </h1>
    <div className='flex flex-col lg:flex-row items-center'>
        <div className='md:w-[70%] lg:w-[40%] lg:mr-20 mb-10 lg:mb-0' data-aos="fade-right">
           <div>
             <div className='flex mb-5 items-center'>
                <img src={icon1} alt="" className='w-11 h-11 mr-4'/>
                <div>
                    <h1 className='font-bold text-base mb-1'>Select a Course</h1>
                    <p className='text-sm text-[#5E6282] font-semibold'>Choose a course you want to start your tech career with.</p>
                </div>
                </div>
                 <div className='flex mb-5 items-center'>
                <img src={icon2} alt="" className='w-11 h-11 mr-4'/>
                <div>
                    <h1 className='font-bold text-sm mb-1'>Make Payment</h1>
                    <p className='text-sm text-[#5E6282] font-semibold'>Make payment to the designated account assigned to you</p>
                    </div>
                    </div>
                 <div className='flex mb-12 items-center'>
                <img src={icon3} alt="" className='w-11 h-11 mr-4'/>
                <div>
                    <h1 className='font-bold text-sm mb-1'>Start Training</h1>
                    <p className='text-sm text-[#5E6282] font-semibold'>Classes will take place at our institutions which is very conducive for learning</p>
                </div>
            </div>
            <div className='ml-5'>
                
            <Button text='Get Started'/>
            </div>
           </div>
            </div>
                <img src={img1} alt="" className='h-[auto] md:w-[70%] lg:w-[45%] shadow-lg' data-aos="fade-left"/>
            </div>
   </section>
  );
}

export default Training