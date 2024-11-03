import PersonaLoop from '../assets/videos/Persona3.mp4';
import Logo from '../assets/Persona3ReloadLogo.png';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Persona() {
  return (
    <main className='h-[100vh] w-[100vw] overflow-hidden'>
      <section className='flex items-center justify-end w-screen h-screen'>
        <video 
          src={PersonaLoop} 
          autoPlay 
          loop 
          muted 
          className='absolute top-0 left-0 z-0 object-cover h-full w-full'
        />
        <span className='z-50 flex flex-col items-center absolute bottom-10 left-1/2 transform -translate-x-1/2'>
          <p className='text-white text-xl font-8bitFont'>Scroll</p>
          <MdOutlineKeyboardArrowDown className=' text-white text-4xl animate-bounce'/>
        </span>
        <article className='relative z-20 w-[50rem] h-screen flex-col flex items-center justify-center mr-[10rem]'>
          <img src={Logo} className='h-[16rem] w-auto pb-[2rem]' alt="Logo" />
          <p className='text-white text-3xl pb-2 font-8bitFont'>Watch the Trailer!</p>
          <iframe 
            src="https://www.youtube.com/embed/xFtdhQoOMH0" 
            width='500'
            height='300'
            title="YouTube Video"
          />
        </article>
      </section>
    </main>
  );
}
