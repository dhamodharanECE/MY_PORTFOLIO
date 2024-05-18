import Ba from '../assets/as.jpg'

export default function App6() {
  return (
    <section id='contect' className='sm:lg:flex md:flex bg-black'>
        <div className='p-6'>
            <img src={Ba}/>
        </div>
        <div className='flex md:flex flex-col justify-center w-1/2  text-white'>
          <h1 className='font-bold border-b-4 mb-5 w-[180px] text-[aqua] border-[aqua] uppercase'>Contect and Mailid</h1>
          <div className=' flex gap-2'><p className='mb-5 ml-5 text-lg font-bold'>PHONE : +91-93614-99647<br/> 
           Gmail-Id :dhamodharans206@gmail.com <br/>
           Gmail-Id :dhamodharansece23@gmail.com<br/> 
           Gmail-Id :dhamuece23@gmail.com<br/> 
           Gmail-Id :21ece206@gmail.com<br/>
           Gmail-Id :dhamodharans2024@gmail.com<br/>
           Gmail-Id :71762104206@cit.edu.in.com<br/>
           Yahoo-Id :dhamodharans2000@yahoo.com</p></div>
          <h1 className=' font-bold border-b-4 w-[80px] mb-5  text-[aqua] border-[aqua] uppercase'>Webside</h1>
          <div className=' ml-5  text-sm'>
          <p>Webstde : https://dhamodharans206.wixstudio.io/my-site-1</p>
          <p>Linkedln : https://www.linkedin.com/in/dhamodharan-s-93b89824a</p>
          </div>
          
        </div>
    </section>
  
    
  )
}