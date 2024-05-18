import React from 'react'
import Th from '../assets/a.jpeg'
import th1 from '../assets/a1.jpeg'
import th2 from '../assets/a2.jpeg'
import th3 from '../assets/a3.jpeg'
import th4 from '../assets/a4.jpeg'
import { MdDescription } from 'react-icons/md'

export default function App4() {
    const config={
        l0:'Projects',
        l1:'MERN stack (MongoDB, Express.js, React, and Node.js) is a powerful combination for building web applications, and using Tailwind CSS can make styling your applications a breeze. Integrating features like a travel webpage, chat app, chatbot, and shopping web application will certainly provide a comprehensive showcase of your skills.',
        l2:'For the travel webpage, you could include features like:',
        l3:'A search functionality for destinations, hotels, flights, etc.',
        l4:'Displaying information about popular travel destinations.',
        l5:'Integration with APIs for booking flights, hotels, and activities.',
        l6:'For the chat app, you could implement:',
        l7:'Real-time messaging using technologies like WebSocket or Socket.IO.',
        l8:'User authentication and authorization.',
        l9:'Group chats and private messaging.'
    }
    const config1={
        project:[
            {
            image:Th,
            Description:'Front end web design for React and Tailwind CSS',
            link:''
            },
            {
                image:th1,
                Description:' MERN - design for Travel App',
                link:''
                },
                {
                    image:th2,
                    Description:' MERN - design for Shopping  App',
                    link:''
                    },
                    {
                        image:th3,
                        Description:' MERN - React and Node js design for Chat App',
                        link:''
                        },
                        {
                            image:th4,
                            Description:'MERN - design for ChatBot App',
                            link:''
                            },

        ]
    }
  return (
    <section id='project' className='flex flex-col py-5 px-5 justify-center  bg-pink-400 ab'>
        <div>
            <h1 className='font-bold border-b-4 w-[170px] border-[black] flex justify-center mb-5 uppercase text-4xl'>{config.l0}</h1>
            <div className='flex justify-center'>
            <p className=' text-[white] gap-5 ab py-5 text-2xl pb-5'><p>{config.l1}</p><br />
<p className='pb-2'>{config.l2}<br/></p>
<p>{config.l3}</p><br/>
<p>{config.l4}</p><br/>
<p>{config.l5}</p><br/>
<p>{config.l6}</p><br/>
<p>{config.l7}</p><br/>
<p>{config.l8}</p><br/>
<p>{config.l9}</p></p>
            </div>
        </div>
        <div className='flex  flex-col md:flex-row gap-10'>
        <div className='h-[116px] w-[215px] pt-4 relative  '>
            <img  className='mb-3 h-[100px] w-[215px]' src={Th}></img>
            <h1 className='font'>Front end web design for React and Tailwind CSS </h1>
        </div>
        <div className='h-[116px] w-[215px] pt-4 relative'>
            <img className='h-[100px] w-[215px] 'src={th1}></img>
            <h1 className='font'> MERN - design for Travel App </h1>
        </div>
        <div className='h-[116px] w-[215px] pt-4 relative'>
            <img  className='h-[100px] w-[215px]' src={th2}></img>
            <h1 className='font'> MERN - design for Shopping  App </h1>
        </div>
        <div className='h-[116px] w-[215px] pt-4 relative'>
            <img className='h-[100px] w-[215px]' src={th3}></img>
            <h1 className='font'> MERN - React and Node js design for Chat App </h1>
        </div>
        <div className='h-[116px] w-[215px] pt-4 relative'>
            <img  className='h-[100px]'src={th4}></img>
            <h1 className='font ab'> MERN - design for ChatBot App </h1>
        </div>
           </div>
    </section>
  )
}
