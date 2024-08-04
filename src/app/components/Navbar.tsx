import React from 'react'
import { IoIosContact } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
function Navbar() {
  return (
    <div className='bg-gray-400 p-5' ><ul className='flex justify-between '>
      <ul className='flex gap-3'><li className='text-[28px]'><IoHomeSharp/></li>
      <li><a href='#home'>Home</a></li></ul>
    <li><ul className='flex gap-3'><li><a href="#footer">contact</a></li>
    <li className='text-[28px]'> <IoIosContact/></li>
    </ul></li></ul></div>
  )
}

export default Navbar