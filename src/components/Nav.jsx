import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = ({navbarOpen, setNavbarOpen}) => {
  return (
   <>
    <div
     className={
      "lg:flex flex-grow lg:items-center py-4 lg:justify-center" +
      (navbarOpen
       ? " flex flex-col items-start lg:flex-row bg-[#FFF1DA]"
       : " hidden")
     }
     id="example-navbar-danger"
    >
     <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
      <li className="nav-link">
       <NavLink
        to="/plc"
        end
        className={`px-3 py-1 flex items-center hover:opacity-75 ${({
         isActive,
        }) => (isActive ? "active" : "inactive")}`} // setting the active class
        onClick={() => setNavbarOpen(!navbarOpen)} //closing the nav onClick
       >
        <span className="ml-2">Home</span>
       </NavLink>
      </li>
      <li className="nav-link">
       <NavLink
        to="/plc/contact"
        className={`px-3 py-1 flex items-center hover:opacity-75 ${({
         isActive,
        }) => (isActive ? "active" : "inactive")}`} // setting the active class
        onClick={() => setNavbarOpen(!navbarOpen)} //closing the nav onClick
       >
        <span className="ml-2">Contact</span>
       </NavLink>
      </li>
      <li className="nav-link">
       <a
        href="#"
        className={`px-3 py-1 flex items-center hover:opacity-75`}
        onClick={() => setNavbarOpen(!navbarOpen)} //closing the nav onClick
       >
        <span className="ml-2">Courses</span>
       </a>
      </li>
      <li className="nav-link">
       <NavLink
        to="/plc/about"
        className={`px-3 py-1 flex items-center hover:opacity-75 ${({
         isActive,
        }) => (isActive ? "active" : "inactive")}`} // setting the active class
        onClick={() => setNavbarOpen(!navbarOpen)} //closing the nav onClick
       >
        <span className="ml-2">About Us</span>
       </NavLink>
      </li>
     </ul>
     <a
      href="https://wa.me/2347011617371"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-[#FF6600] p-2 text-[.8rem] font-semibold px-4 text-[#FF6600] rounded-lg hover:bg-[#FF6600] hover:text-white transition duration-[.2s] mt-4 lg:ml-5 lg:mt-0"
     >
      Get Started
     </a>
    </div>
   </>
  );
}

export default Nav