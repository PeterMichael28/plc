import React from 'react'
import SingleAbout from '../components/SingleAbout';
import img1 from "../assets/training.png";
import img2 from '../assets/about1.png'
import img3 from '../assets/about2.png'

const About = () => {
  const about1 = {
    img: img1,
    span: "Our Principle",
    h1: "Success starts with Hardwork",
    p: "We believe that reaching your best at Platform Lead ICT Solution requires hard work, dedication, and consistency. We are determined to help you get to that height of your quest to get the training to start your career and also be the best at any field you choose to learn."
  }

  const about2 = {
   img: img2,
   span: "Our Vision",
   h1: "Providing Innovative Ideas",
   p: "Giving Innovative ideas and values to our Students and team is has been the mission, values are priceless and it helps you to stand out when it comes to the tech realm. Our Innovation is for the future and we tend to carry you along in the journey.",
  };
  
   const about3 = {
    img: img3,
    span: "Our Goal",
    h1: "Students Satisfaction is our concern",
    p: "Putting people first is our priority and we achieve this seemlessly because that is the core belief and standard of the companies, student satisfaction is our major concern.",
   };













  return (
   <main className="mx-2">
    <div className="mt-[4.7rem] text-center px-4 md:mt-[6rem] sm:px-10">
     <h1 className="font-bold text-2xl mb-1 sm:text-3xl md:text-3xl md:mb-4">
      Platform Lead ICT Solution
     </h1>
     <p className="font text-[#5E6282] text-xs sm:text-sm md:text-base md:w-[80%] lg:w-[70%] mx-auto">
      We are a team of leaders who operate under different
      sectors and fields. But our mission and goals is to
      provide a standard and sound training to our students
      which is always has been the major concern of our
      institution.
     </p>
    </div>
    <div className="mt-12">
     <SingleAbout about={about1} classes="md:space-x-8 " />
     <SingleAbout
      about={about2}
      classes="md:flex-row-reverse"
      mr= 'md:mr-8'
     />
     <SingleAbout about={about3} classes="md:space-x-8 " />
    </div>
   </main>
  );
}

export default About