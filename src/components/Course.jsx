import React, {useEffect} from "react";
// import img from "../assets/course.png";
// import dp from "../assets/dp.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Course = ( { title, prices, img, p, data } ) => {
  
     useEffect(() => {
      AOS.init({ duration: 1000 });
     }, []);
 return (
  <div
   className="flex flex-col space-y-3  h-auto w-[89%] xs:w-[360px] items-center py-4 px-3 mx-auto mb-4 m-2 cursor-pointer shadow hover:shadow-xl shadow-[#5E6282] transition-all duration-[.4s]"
   data-aos={data}
  >
   <img src={img} alt="" className="h-48 w-[100%] mb-2" />
   <div className="mt-5">
    <h1 className="text-[1.4rem] mb-1 font-bold text">
     {title}
    </h1>
    <p className="text-sm font-semibold text-[#5E6282] mb-8 ">
     {p}
    </p>
   </div>
   <div className="mt-16 flex space-x-2 items-center justify-end w-[100%]">
    {/* <img src={img} alt="" className="w-6 h-6" />
    <div className="flex justify-end item-center w-full">
     <div className="flex flex-col">
      <h1 className="text-sm font-bold">Mr Michael</h1>
      <p className="text-xs text-[#5E6282] font-semibold">
       Instructor
      </p>
     </div>
    </div> */}
    <h1 className="font-bold text-lg">{prices}</h1>
   </div>
  </div>
 );
};

export default Course;
