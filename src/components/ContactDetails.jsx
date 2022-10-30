import React from 'react'
import SmContactDetails from './SmContactDetails';
import icon1 from '../assets/ContactIcon1.png'
import icon2 from "../assets/ContactIcon2.png";
import icon3 from "../assets/ContactIcon3.png";
import chatIcon from "../assets/Chat.png";

const ContactDetails = () => {
    const H1 = "Head Office"
    const H2 = "Contact"
    const H3 = "Email Address"
    const P1 = "4, Olubi street, Off Kunle Abass Street, Aree, Bodija, Ibadan Oyo State, Nigeria."
    const P2 = "+234 701 161 7371"
    const P3 = "No. 13, Mambila Street, ASO Drive, FCT Abuja, Nigeria."

  return (
   <div className="mt-8 lg:mt-0 flex flex-col items-start lg:w-[50%] lg:px-16">
    <SmContactDetails img={icon1} h={H1} p={P1} />
    <SmContactDetails img={icon3} h={H2} p={P2} />
    <SmContactDetails img={icon2} h={H3} p={P3} />
    <a
     href="https://wa.me/2347011617371"
     target="_blank"
     rel="noopener noreferrer"
     className="ml-8 mt-8"
    >
     <img
      src={chatIcon}
      alt=""
      className="w-[w-25%] mt-2"
     />
    </a>
   </div>
  );
}

export default ContactDetails