import React from "react";
import bgImage from "../assets/bg.png";
import hero from "../assets/hero.png";
import Button from "./Button";

const Hero = () => {
 return (
  <section
   className="h-[78vh] bg-cover bg-no-repeat bg-center md:bg-left-top flex flex-col lg:flex-row items-end lg:items-center justify-between px-4 xs:px-8 sm:px-10 md:px-12 lg:pr-12 lg:pl-16"
   style={{ backgroundImage: `url(${bgImage})` }}
  >
   <div
    className="mt-16 xs:mt-[5rem] sm:mt-[7rem] md:mt-20 lg:mt-24 z-20 "
   >
    <h1 className="text-[1.9rem] md:text-[2.8rem] text-[#181E4B] font-bold leading sm:w-[80%] md:w-[90%] lg:w-[90%]">
     Get Trained At Platform Lead ICT Solution
    </h1>
    <p className="text-[#5E6282] md:text-[1.2rem] md:w-[80%] lg:w-[90%] font-semibold mt-3 mb-10 xs:mb-16 sm:w-[80%]">
     Do you want to start a career in Tech? You are at the
     right place to bring your dream into existence.
    </p>
    <Button text="Click here" />
   </div>

   <img
    src={hero}
    alt=""
    className="h-[40vh] xs:h-[45vh] xs:bottom-[2rem] sm:h-[50vh] sm:bottom-[6rem] md:h-[60vh] md:bottom-[12rem] lg:h-[70vh] relative lg:top-24 lg:right-2 "
   />
  </section>
 );
};

export default Hero;
