import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { BiMenu } from "react-icons/bi";
import Nav from "../components/Nav";

export default function Navbar({ fixed }) {
    const [ navbarOpen, setNavbarOpen ] = useState( false );
    const [scroll, setScroll] = useState(true);

    useEffect(() => {
     const handleScroll = () => {
      if (window.scrollY > 6) {
       setScroll(true);
      } else setScroll(false);
     };

     window.addEventListener("scroll", handleScroll);

     return () => {
      window.removeEventListener("scroll", handleScroll);
     };
    }, []);


  return (
   <>
    <nav
     className={` flex flex-wrap items-center justify-between px-2 md:px-10 py-2 md:py-3 header ${
      scroll && "bg-[#FFF1DA]"
     } ${navbarOpen && "bg-[#FFF1DA]"}`}
    >
     <div className="containe w-[100%] px-4 mx-auto flex flex-wrap items-center justify-between">
      <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
       <a
        className="text-sm font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap uppercase text-black"
        href="#pablo"
       >
        <img
         src={Logo}
         alt="logo"
         width={100}
         height={100}
         className="cursor-pointer object-contain  m-0 p-0"
        />
       </a>
       <button
        className="text-black cursor-pointer text-xl leading-none px-3 py-0 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        onClick={() => setNavbarOpen(!navbarOpen)}
       >
        <BiMenu className="w-8 h-8" />
       </button>
      </div>
      <Nav
       navbarOpen={navbarOpen}
       setNavbarOpen={setNavbarOpen}
      />
     </div>
    </nav>
   </>
  );
}