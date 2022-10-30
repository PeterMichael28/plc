import React from 'react'

const Button = ({text}) => {
  return (
   <a
    href="https://wa.me/2347011617371"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-8 bg-[#FF6600] px-3 md:px-4 py-3 text-white rounded-lg font-semibold hover:bg-white hover:border-[#FF6600] hover:border hover:text-[#FF6600] transition duration-[.2s]"
   >
    {text}
   </a>
  );
}

export default Button;

