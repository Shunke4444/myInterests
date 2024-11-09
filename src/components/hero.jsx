import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import '../components/hero.css'
import Spaceman from './spaceman'
import Stars from '../assets/parallax/1Stars.svg'
import Planets from '../assets/parallax/2Planets.svg' 
import Mountain from '../assets/parallax/3Mountain.svg'
import Mountain2 from '../assets/parallax/4Mountain.svg'
import Crater from '../assets/parallax/5Crater.svg'
import Sun from '../assets/parallax/6Sun.svg'
gsap.registerPlugin(TextPlugin);

export default function HeroPage() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const stopPoint = Math.min(maxScroll, 300);
      const limitedScrollY = Math.min(scrollY, stopPoint);
      const finalScrollY = Math.max(limitedScrollY, 0);

      gsap.to('.parallax__stars', { y: finalScrollY * 0.8 });
      gsap.to('.parallax__planets', { y: finalScrollY * 1.2 });
      gsap.to('.parallax__mountain1', { y: finalScrollY * 0.8 });
      gsap.to('.parallax__mountain2', { y: finalScrollY * 0.3 });
      gsap.to('.parallax__crater', { y: finalScrollY * 0.1 });
      gsap.to('.parallax__content', { y: finalScrollY * 1.5 });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const words = ["Likes", "Interests", "Hobbies", "Fascinations", "Passions", "Among us"];
  const typewriterRef = useRef(null);

  useEffect(() => {
    const masterTL = gsap.timeline({ repeat: -1 });

    words.forEach((word, index) => {
      const tl = gsap.timeline({ repeat: 1, yoyo: true });
      tl.to(typewriterRef.current, { duration: 1, text: word, delay: index * 1.25 });
      masterTL.add(tl);
    });

  }, []);

  useEffect(() => {
    gsap.to('.cursor', { opacity: 0, repeat: -1, duration: 1 });
    gsap.to('.typewriter-text', { textShadow: '2px 10px 4px rgba(0.3, 0.3, 0.3, 5)' });
  }, []);

  return (
    <section className="parallax flex overflow-hidden w-screen absolute top-[10%] h-[120%] bg-gray-900">
      <div className='parallax__content absolute top-[10%] left-40  flex flex-col lg:flex-row items-start z-10'>
        <span className="flex-col lg:mb-0">
        <h1 className='font-medium font-customFont text-white text-[2rem]'>Made by Jihad Tejam</h1>

          <h1 className='font-medium font-customFont text-white text-[8rem]'>

            <span className="text-shadow">These are my <br /></span>
            <span className="typewriter-text text-heroColor text-[10rem] mt-0 drop-shadow-lg" ref={typewriterRef}></span> 
            <span className="cursor text-[7rem] text-heroColor">|</span>
          </h1>
        </span>
      </div>

      <Spaceman className= "parallax__contents" />
      <img className="parallax__stars z-10 w-full" src={Stars} />
      <img className="parallax__planets z-10 w-full" src={Planets} />
      <img className="parallax__mountain1 z-10 w-full" src={Mountain} />
      <img className="parallax__mountain2 z-10 w-full" src={Mountain2} />
      <img className="parallax__crater z-10 w-full absolute bottom-[2%]" src={Crater}  />
    </section>
  );
}
