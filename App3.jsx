import Im from '../assets/image.png'
export default function App3() {
  const config={
    l0:'About Me',
    l1:'That sounds like an exciting journey into full-stack web development! Mastering HTML, CSS, JavaScript, and popular frameworks like React.js is a solid foundation for front-end development. Bootstrap and Tailwind CSS will help you streamline your UI design process, while React.js will enable you to build dynamic and interactive user interfaces',
    l2:'Educational Qualification',
    l3:'Completing your Bachelor in Electronics and Communication Engineering (ECE) provides a strong foundation in problem solving and critical thinking skills, which are invaluable assets in the field of web development',
    l4:'Starting with front-end development is a common and logical choice, as it allows you to build the visual components of a website or web application. Its often the part of web development that users interact with directly, so having a strong understanding of HTML, CSS, and JavaScript is crucial.',
    l5:'Platforms like Crio.Do and courses offered by Mine Private Limited can provide you with structured learning paths, projects, and mentorship to help you master front-end development and progress into full-stack development.',
    l6:'Remember to practice regularly, work on projects, and keep exploring new technologies and techniques. Building a strong portfolio of projects will not only solidify your understanding but also showcase your skills to potential employers or clients in the future.'
  }
  return (
    <section id='about' className=' lg:flex bg-black'>
        <div className=' md:flex p-32'>
            <img src={Im}/>
        </div>
        <div className='text-white py-10'>
          <h1 className='font-bold border-b-4 mb-5 w-[100px] text-[aqua] border-[aqua] '>{config.l0}</h1>
          <div className=' flex gap-2'><p className='mb-5 ab'> {config.l1}</p></div>
          <h1 className='font-bold border-b-4 w-[220px] mb-5 text-[aqua] border-[aqua]'>{config.l2}</h1>
          <div className='gap-5 lob'>
          <p className='mb-2 ab' >{config.l3}</p >
           <p className='mb-2 ab'> {config.l4}</p>
           <p className='mb-2 ab'> {config.l5}</p>
            <p className='mb-2 ab '>{config.l6}</p>
        </div>
        </div>
    </section>
  
   
  )
}