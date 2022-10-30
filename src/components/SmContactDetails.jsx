import React from 'react'

const SmContactDetails = ({img, h, p}) => {
  return (
   <div className="flex items-center px-6 md:px-12 lg:px-0 mt-4 lg:mb-4 pr-16 space-x-3">
    <img src={img} alt="icon" className="w-14 h-14" />
    <div>
     <h1 className="font-bold text-sm">{h}</h1>
     <p className="text-sm font-semibold text-[#5E6282]">{p}</p>
    </div>
   </div>
  );
}

export default SmContactDetails