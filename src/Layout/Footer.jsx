import React from 'react'
import logo from '../assets/logo1.png'
import chatIcon from "../assets/Chat.png";
import {
 FaFacebook,
 FaInstagramSquare,
 FaLinkedin,
 FaTwitterSquare,
 FaDribbbleSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
   <footer className="text-[.6rem] xs:text-xs px-6 lg:px-[8rem] mt-24 py-2 pt-12 text-white font-semibold bg-[#585656]">
    <div className=" lg:w-[85%] m-auto grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-16 justify-start items-start">
     <div className="flex sm:flex-col">
      <div>
       <img
        src={logo}
        alt=""
        width={100}
        height={100}
        className="mb-1"
       />
       <p className="text-[.7rem] xs:text-xs mr-2 md:mr-0">
        Build your Career with us. It starts with Us!
       </p>
      </div>
      <div className="flex flex-wrap mt-4">
       <FaFacebook className="text-2xl mr-3" />
       <FaInstagramSquare className="text-2xl rounded-full mr-3" />
       <FaLinkedin className="text-2xl rounded-full mr-3" />
       <FaTwitterSquare className="text-2xl rounded-full mr-3" />
       <FaDribbbleSquare className="text-2xl rounded-full mr-3" />
      </div>
     </div>

     <div className="flex items-center justify-between mb-3 md:mb-0">
      <div className="">
       <h1 className="text-[#FF6600] text-lg font-bold mb-4">
        Links
       </h1>
       <ul>
        <li>
         <a href="#" className="text-sm">
          Courses
         </a>
        </li>
        <li>
         <a href="#" className="text-sm">
          Get Started
         </a>
        </li>
        <li>
         <a href="#" className="text-sm">
          About us
         </a>
        </li>
       </ul>
      </div>
      <div>
       <h1 className="text-[#FF6600] text-lg font-bold mb-4">
        Learning
       </h1>
       <ul>
        <li className="text-sm mb-1">Front End</li>
        <li className="text-sm mb-1">Back End</li>
        <li className="text-sm mb-1">Mobile Dev</li>
       </ul>
      </div>
     </div>
     <div>
      <h1 className="text-[#FF6600] text-lg font-bold mb-4">
       Contact
      </h1>
      <p className="text-sm mb-1">
       4, Olubi street, Off Kunle Abass Street, Aree,
       Bodija, Ibadan Oyo State Nigeria
      </p>
      <p className="text-sm mb-1"> +234 701 161 7371</p>
      <p className="text-sm mb-1">info@plitsolutions.com</p>

      <a
       href="https://wa.me/2347011617371"
       target="_blank"
       rel="noopener noreferrer"
      >
       <img
        src={chatIcon}
        alt=""
        className="w-[w-25%] mr-10 mt-2"
       />
      </a>
     </div>
    </div>
    <p className="text-sm text-center mt-12 mb-6">
     © Copyright 2022 Platform Lead ICT Solution.
    </p>
   </footer>
  );
}

export default Footer