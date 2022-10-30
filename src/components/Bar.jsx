import React from 'react'
import bar1 from '../assets/barIcon1.png'
import bar2 from '../assets/barIcon2.png'
import bar3 from '../assets/barIcon3.png'

const Bar= () => {
  return (
   <div className="bottom-0 px-2 space-x-1 md:px-20 lg:px-32 flex justify-between items-center py-5 bg-[#585656] text-white font-semibold text-xs lg:text-lg relative z-10 top-16">
    <div className="flex items-center space-x-1 lg:space-x-2">
     <img src={bar1} alt="" className="w-6 h-6 md:w-8 md:h-8" />
     <p className='text-[.7rem] md:text-base'>Project Based Training</p>
    </div>
    <div className="flex items-center space-x-1 lg:space-x-2">
     <img src={bar2} alt="" className="w-4 h-4 md:w-6 md:h-6" />
     <p className='text-[.7rem] md:text-base'>Expert Instructors</p>
    </div>
    <div className="flex items-center space-x-1 lg:space-x-2">
     <img src={bar3} alt="" className="w-4 h-4 md:w-6 md:h-6" />
     <p className='text-[.7rem] md:text-base'>Conducive Environments</p>
    </div>
   </div>
  );
}

export default Bar
