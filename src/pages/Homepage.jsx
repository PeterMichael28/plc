import React from 'react'
import Hero from '../components/Hero';
import bgImage from "../assets/hero.png";
import Bar from '../components/Bar';
import TopCourses from '../components/TopCourses';
import Training from '../components/Training';
import Banner from '../components/Banner';
import Testimony from '../components/Testimony';

const Homepage = () => {
  const text =" Still confused about your career choice? consult with our Counsellors"

  return (
   <main
    className=""
      >
    <div className='flex flex-col h-screen overflow-hidden'>
    <Hero />
    <Bar />  
    </div>
        <TopCourses />
        <Training />
        <Banner text={text} />
        <Testimony />
      </main>
      
  );
}

export default Homepage