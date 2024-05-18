import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function App1() {
    const [toggleMenu,setToggleMenu]=useState(false);
return (
    <header className='flex justify-between px-5 py-2 items-center bg-fuchsia-500  font-bold text-black '>
    <a href="https://dhamodharans206.wixstudio.io/my-site-1">DHAMODHARAN S</a>
    <nav className='hidden md:block'>
    <ul className="flex font-bold text-black">
        <li className=" uppercase"><a href="#">home</a></li>
        <li className=" uppercase"><a href="#about">about</a></li>
        <li className=" uppercase"><a href="#project">project</a></li>
        <li className=" uppercase"><a href="#resume">resume</a></li>
        <li className=" uppercase"><a href="#contect">content</a></li>    
    </ul>
    </nav>
    {toggleMenu && <nav className='block md:hidden'>
    <ul className="flex flex-col font-bold text-black moblie-nav">
        <li className=" uppercase"><a href="#">home</a></li>
        <li className=" uppercase"><a href="#about">about</a></li>
        <li className=" uppercase"><a href="#project">project</a></li>
        <li className=" uppercase"><a href="#resume">resume</a></li>
        <li className=" uppercase"><a href="#contect">content</a></li>    
    </ul>
    </nav> }
    <button onClick={()=>setToggleMenu(!toggleMenu)}className='block md:hidden'><Bars3Icon className='text-white h-6'/></button>
   </header>
  )
}
 
