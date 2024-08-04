import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
function Footer() {
  return (
    <div className='bg-gray-400 h-[400px] p-6' >
      <div className=' flex justify-center'>
        <ul className='flex gap-5 '>
          <li className='text-[32px]'><a href="https://github.com/IsmaBano"><FaGithubSquare/></a></li>
          <li className='text-[30px]'><a href=""><BsLinkedin/></a></li>
        </ul>
      </div>
      <div className='m-6  flex justify-center p-5'>Discover innovative solutions tailored to meet your unique needs on our cutting-edge platform.</div>
    <div className='text-[12px] flex justify-center '>Copyright@2024</div>
    </div>
  )
}

export default Footer