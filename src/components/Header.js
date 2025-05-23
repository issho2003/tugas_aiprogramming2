import React from 'react'
import Menuitem from './Menuitem'
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import Link from 'next/link';
import DarkMode from './DarkMode';

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3'>
      <div className='flex gap-4'>
        <Menuitem title="Home" address="/" Icon={AiFillHome}/>
        <Menuitem title="About" address="/about" Icon={BsFillInfoCircleFill}/>
      </div>
      <div className='flex items-center gap-4'>
        <DarkMode />
        <Link href={'/'} className='flex gap-1 items-center'>
          <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDb</span>
          <span className='text-xl hidden sm:inline'>Clone</span>
        </Link>
      </div>
    </div>
  )
}
