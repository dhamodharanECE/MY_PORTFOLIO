import Ban from '../assets/banner.png'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
export default function App2() {
  const config={
    l0:'I am DHAMODHARAN S',
    l1:'FULL STACK WEB DEVELOPER'
  }
  return (
    <section id='home' className='flex flex-col md:flex-row px-3 py-32 font-bold text-black ca justify-center ab'>
       <div className=' md:w-1/2 flex  flex-col'>
        <h1 className='text-2xl px-10 py-32' >Hello,<br/>{config.l0}
        <p className='text-2xl'>{config.l1}</p>
        </h1>
        <div className=' flex gap-3 text-2xl px-10 py-3'>
            < a href='#' className='hover:text-white'><FaHtml5/></a>
            < a href='#' className='hover:text-white'><FaCss3Alt /></a>
            < a href='#'className='hover:text-white'><FaBootstrap /></a>
            < a href='#'className='hover:text-white'><SiTailwindcss/></a>
            < a href='#'className='hover:text-white'><FaReact/></a>
            < a href='#'className='hover:text-white'><FaGitAlt/></a>
            < a href='https://www.linkedin.com/in/dhamodharan-s-93b89824a'className='hover:text-white'><FaLinkedin/></a>
        </div>
        </div>
        <img className='md:w-1/2' src={Ban}/>
    </section>
  )
}

