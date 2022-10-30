import React from 'react'
import img1 from '../assets/testimonial.png'
import img2 from '../assets/NextIcon.png'

const Testimony = () => {
    return (
     <section className="flex flex-col md:flex-row items-start justify-center px-6 sm:px-16 lg:px-32 mt-20 md:mt-28 lg:w-[92%] m-auto">
      <h1 className="text-2xl md:hidden font-bold mb-4 text-center">
       What Our Students Say About Us
      </h1>
      <img
       src={img1}
       alt=""
       className="md:w-[45%] md:mr-8 lg:mr-12 md:h-[18rem] mb-6 md:mb-0"
      />
      <div className="flex flex-col">
       <h1 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-10 hidden md:flex">
        What Our Students Say About Us
       </h1>
       <p className="text-sm text-center md:text-justify text-[#5E6282] mb-4 md:mb-2 lg:mb-8">
        I will really like appreciate the Management of
        Platform Lead Limited and Instructors for making our
        training so much comfortable and easy to understand
        our various courses because of the way they they put
        so much efforts in order for us to understand is
        amazing. It always keeps me motivated and willing to
        learn more.
       </p>
       <hr className="mb-2 lg:mb-6" />
       <div className="flex w-[100%] items-start justify-between">
        <div className="m-auto md:m-0">
         <h2 className="font-semibold text-sm md:text-md mb-0">
          Adebayo Okogbowa
         </h2>
         <p className="text-xs font-light md:font-semibold text-[#5E6282]">
          Frontend Student
         </p>
        </div>
        <img
         src={img2}
         alt=""
         className="hidden md:flex w-12 h-12"
        />
       </div>
      </div>
     </section>
    );
}

export default Testimony