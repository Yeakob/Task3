import React from 'react'
import { FaRegBell } from "react-icons/fa6";
import Img from "../Img2.jpeg"

const NavBar = () => {
  return (
    <div className='w-full h-auto flex justify-between items-center flex-row font-mono text-sm text-slate-100 bg-slate-900 px-[10rem] py-2'>
      <div>
        <button className='border-none px-3 py-3 font-semibold justify-center items-center'>Dashboard</button>
        <button className='border-none px-3 py-3 font-semibold justify-center items-center'>Master Price</button>
        <button className='border-none px-3 py-3 font-semibold justify-center items-center'>Custom Price</button>
        <button className='border-none px-3 py-3 font-semibold justify-center items-center'>Calender</button>
        <button className='border-none px-3 py-3 font-semibold justify-center items-center'>Report</button>
      </div>
      <div className='flex flex-row justify-center items-center text-lg'><FaRegBell />
      <div><img className='w-[2rem] h-[2rem] rounded-full mx-3' src={Img} alt="" /></div></div>
    </div>
  )
}

export default NavBar
