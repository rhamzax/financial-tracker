import React, { useState } from 'react'
import { NavButtons } from './NavButtons'
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrOverview } from 'react-icons/gr';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { RiLeafLine } from 'react-icons/ri';
import Image from 'next/image';
import logo from '../images/EcoNTransparent.png'
import Link from 'next/link';

export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className={`${open ? "w-32 lg:w-72" : "w-14 lg:w-24"} duration-300 h-screen bg-mintgreen` }>
      <div className='flex flex-col justify-center px-2 py-1'>
        <GiHamburgerMenu className={`w-6 h-6  duration-300 ${!open && "rotate-180 duration-300"}`}
        onClick={()=>setOpen(!open)}/>
          
        <Image
            src = {logo}
            width={100}
            height={100}
            className={`bg-gray-500 rounded-md my-2 duration-300 ${!open && "scale-0"}`}
          />
        
        <div className='flex flex-col w-fit'>
          <div className='py-2 px-1 w-fit'>
            <Link href={`/Overview`} className={`flex justify-between items-center`}>
                <GrOverview className ="w-9 h-9"/>
                <div className={`duration-75 ${!open && "scale-0"}`}>
                  Overview
                </div>
            </Link>
          </div>

          <div className='py-2 px-1 w-fit' >
            <Link href={`/Financial`} className='flex justify-between items-center'>
                <RiMoneyDollarBoxLine className = "w-9 h-9"/>
                <div className={`duration-75 ${!open && "scale-0"}`}>
                  Financial
                </div>
            </Link>
          </div>

          <div className='py-2 px-1 w-fit'>
            <Link href={`/Environmental`} className='flex justify-between items-center'>
                <RiLeafLine className = "w-9 h-9"/>
                <div className={`duration-75 ${!open && "scale-0"}`}>
                  Eco
                </div>
            </Link>
          </div>

        </div>
         
        </div>
    </div>
  )
}
