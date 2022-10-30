import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SingleAbout = ( { about, classes, mr, data1, data2 } ) => {
    
    useEffect(() => {
    AOS.init({ duration: 1000 });
    }, [] );
    
 return (
  <div className={`flex flex-col md:flex-row mb-8 mb:mb-0 justify-center items-center xs:px-8 sm:px-16 md:px-4 lg:w-[80%] mx-auto ${classes && classes}`}>
   <img src={about.img} alt="" className="w-[93%] md:w-[45%] lg:w-[43%]" data-aos={data1}/>

   <div className={`mt-6 w-[93%] md:mt-0 md:w-[45%] ${mr && mr}`} data-aos={data2}>
    <span className="text-[.9rem] font-semibold text-[#5E6282] xs:text-[.9rem] lg:text-[1rem]">
     {about.span}
    </span>

    <h1 className="mt-1 font-bold mb-1 text-black md:mt-3 md:mb-4 md:text-lg lg:text-[1.3rem]">
     {about.h1}
    </h1>
    <p className="text-[.8rem] text-[#5E6282] text-justify md:text-[.8rem] lg:text-[.9rem]">
    {about.p}
    </p>
   </div>
  </div>
 );
};

export default SingleAbout;
