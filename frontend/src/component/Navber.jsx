import React from 'react'
import { NavLink } from 'react-router'

const Navber = () => {
  return (
    <nav className='bg-[#812972] sm:h-20 h-14 text-white flex justify-between items-center sticky'>
        <div className='xl:pl-44 md:pl-20 pl-2'>
          <div className='font-bold md:text-[1.5rem] text-[1rem]'>Durga Modren </div>
          <div className='font-bold md:text-[1.2rem] text-[.75rem] md:ml-32 ml-14'>Inter College</div>
        </div>

      <ul className='flex md:gap-8 gap-2 md:pr-30 pr-2'>
       <li className='text-[.75rem] md:text-[1rem] hover:font-bold cursor-pointer'><NavLink to="/" >HOME</NavLink></li>
        <li className='text-[.75rem] md:text-[1rem] hover:font-bold cursor-pointer'><NavLink to="/Payment">ONLINE FEE</NavLink></li>
        <li className='text-[.75rem] md:text-[1rem] hover:font-bold cursor-pointer'><NavLink to="/adimisson">ADIMISSION</NavLink></li>
      </ul>

    </nav>
  )
}

export default Navber
