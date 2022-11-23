import React from 'react'
import Course from './Course';
import Icon from '../assets/Icon.png'
import BackImg from '../assets/course.png'
import UiImg from '../assets/img11.png'
import FrontImg from '../assets/img9.png'
import DataImg from '../assets/img12.png'
import MobileImg from '../assets/img13.png'
import PythonImg from '../assets/img14.png'
import GraphImg from '../assets/graph.png'
import Ielts from '../assets/ielts.png'
import DigiImg from "../assets/dig.png";

import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const TopCourses = ({title}) => {
  const course = {
   frontEnd:
    "Learn how to work and code with different languages such as Html, CSS, Tailwind, Javascript, Deploying HTML CSS on cPanel, Bootstrap 5, React Js, Redux, Next Js, Typescript and so much more.",
   backEnd:
    "We provide full understanding of Back End development by teaching you JavaScript, Web API’s,SQL, PHP, Deployment Process, Principles such as YAGNI,SOLID and so much more.",
   Ui: "With this course will be equipped with Design thinking, UI UX Laws, Product Design, Design System, Prototyping tools such as Figma and Adobe Xd, Web and Mobile Layout and so much more. ",
   datSci:
    "Learn about data, Python packages such as Pandas, Numpy, Map-plot library, Statistics, Error metrics, Probability, Positive and Negative correlation and so much more",
   digiM:
    "We Introduce you to the world of Digital Marketing, Website Planning, Search Engine Optimisation (SEO), Web Analytics, Adsence, VIdeo Marketing, Affiliate marketing and so much more.",
   pyth:
    "Learn and understand Python Overview, OOP Design, Data Structure and Algorithm, Desktop Application Development (GUI), API Development with Django, SQL, ORM, Database e.t.c",
   mobileDev:
    "Understand JavaScript Fundamentals, React Native, JSX, Styling and Layout, Data Structure and Algorithm, Solving FAANG, Redux and so much more.",
   graph:
    "We take you to the world of design by teaching the art of Branding, Design layouts, Logo designs, Vector Creation, Softwares such as Adobe Photoshop, Illustrator, Adobe After Effect and so on.",
   ielts:
    "We will the basics of IELTS, Academic IELTS, Listening, Speaking, Writing, Reading."
  };



  return (

   <section className="md:px-1 lg:px-20 mt-14 md:mt-24 flex flex-col items-center">
    {title && <h1 className="text-center mb-2 md:mb-6 text-3xl md:text-4xl font-bold">
     Our Top Courses
    </h1>}
    <div className="flex flex-wrap item-center justify-around">
      <Link to='/plc/courses/frontend'>
       <Course title="Frontend Development" prices='150,000' img={FrontImg} p={course.frontEnd} data='fade-up' />
      </Link>
      
      <Link to='/plc/courses/backend'>
        <Course title="Backend Development" prices='200,000' img={BackImg} p={course.backEnd} data='fade-in'/>
      </Link>
      
      <Link to='/plc/courses/uidesign'>
      <Course title="UI/UX Design" prices='100,000' img={UiImg} p={course.Ui} data="fade-right" />
      </Link>
      
      <Link to='/plc/courses/datascience'>
        <Course title="Data Science" prices='300,000' img={DataImg} p={course.datSci} data="fade-left"/>
      </Link>
      
      <Link  to='/plc/courses/digitalmarketing'>
        <Course title="Digital Marketing" prices='150,000' img={DigiImg} p={course.digiM} data="fade-down"/>
      </Link>
      
      <Link to='/plc/courses/python'>
          <Course title="Python" prices='150,000' img={PythonImg} p={course.pyth} data="fade-up-right"/>
      </Link>
      
      <Link to='/plc/courses/ieltstraining'>
        <Course title="IELTS Training" prices='40,000' img={Ielts} p={course.ielts} data="fade-down"/>
      </Link>
      
      <Link to='/plc/courses/mobileappdevelopment'>
        <Course title="Mobile Development" prices='150,000' img={ MobileImg } p={course.mobileDev} data="fade-up-left"/>
      </Link>
      
      <Link to='/plc/courses/graphics&multimedia'>
        <Course title="Graphics and Multimedia" prices='100,000' img={GraphImg} p={course.graph} data="fade-down-right"/>
      </Link>
    </div>
    <a
     href=""
     className="inline-flex space-x-3 items-center justify-center mt-4 bg-[ff660026] p-3 text-sm text-[FF6600] rounded-lg font-semibold m-auto"
    >
     <img src={Icon} alt="" className="w-3 h-3 mr-2" />
     Load more
    </a>
   </section>
  );
}

export default TopCourses