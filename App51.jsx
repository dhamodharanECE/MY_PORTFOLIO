import Im from '../assets/download.png'

export default function App51() {
  return (
    <section id='resume' className='flex flex-col md:flex-row px-3 py-3 lg:py-32 font-bold text-black ca justify-center ab'>
    <div className=' md:w-1/2 flex  flex-col'>
     <h1 className='text-4xl px-0 py-3 border-b-4 w-[150px]' >RESUME</h1>
     <p className='text-2xl pb-10'>Here, Download the Resume pdf file</p>
     
     <div className=' flex gap-3 text-2xl px-20 py-3'>
         < a href='https://drive.google.com/file/d/1UxUwzrkggSZ2Wi12GuGidwtYwwO-YKlb/view?usp=drivesdk' className='border-2 px-3 py-5 text-white bg-black hover:hover:bg-[green]'>Download</a>
     </div>
     </div>
     <img className='md:w-1/4' src={Im}/>
    </section>
  )
}
