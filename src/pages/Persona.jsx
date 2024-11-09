import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PersonaLandPage from '../components/PersonaLandPage';
import Makoto from '../assets/persona/1Makoto.avif';
import UI from '../assets/persona/Persona3UI.jpg';
import { useGSAP } from '@gsap/react';
import PersonaChara from '../components/personaChara';
import BattleUI from '../assets/persona/BattleUI.avif';
import TextCarousel from '../components/textcarousel';

gsap.registerPlugin(ScrollTrigger);

export default function Persona() {
  const textLeft = useRef([]);
  const textFade = useRef([]);

  useGSAP(() => {
    const sections = textLeft.current;
    sections.forEach((section, index) => {
      const xValue = index === 1 ? 100 : -100;
      gsap.fromTo(
        section,
        { autoAlpha: 0, x: xValue },
        {
          autoAlpha: 1,
          x: 0,
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            end: 'bottom top',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, [textLeft]);

  useGSAP(() => {
    const elements = textFade.current;
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.25,
          scrollTrigger: {
            trigger: element,
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, [textFade]);

  return (
    <main className='flex flex-col'>
      <PersonaLandPage />
      <section className='h-auto w-screen bg-personaLightBlue flex flex-col flex-shrink-0'>
        {/* Makoto Intro */}
        <article ref={(el) => (textLeft.current[0] = el)} className="h-[60vh] w-full flex-shrink-0 flex flex-col md:flex-row items-center gap-5 md:gap-16 justify-end px-4 md:px-0">
          <span className='flex-col md:ml-[8rem] text-center md:text-left'>
            <h1 className='text-3xl md:text-4xl text-personaText font-personaFont font-extrabold'>INTRODUCTION</h1>
            <p className='text-personaP text-xs md:text-sm'>
              The protagonist is a student who has just transferred to Gekkoukan High School, an establishment located on an artificial island...
              <br /><br />
              This incident leads him to join the school&apos;s Specialized Extracurricular Execution Squad (SEES)...
              <br /><br />
              What kind of fate awaits him at the end?
            </p>
          </span>
          <img ref={(el) => (textLeft.current[0] = el)} src={Makoto} alt="Makoto" className='h-[15rem] md:h-[25rem] object-contain' />
        </article>

        {/* Gameplay Intro */}
        <article ref={(el) => (textLeft.current[1] = el)} className="h-[60vh] w-full flex-shrink-0 flex flex-col md:flex-row items-center gap-5 md:gap-16 justify-start px-4 md:px-0">
          <img ref={(el) => (textLeft.current[1] = el)} src={UI} alt="UI" className='h-[15rem] md:h-[25rem]' />
          <span className='flex-col md:mr-[8rem] text-center md:text-left'>
            <h1 className='text-3xl md:text-4xl text-personaText font-personaFont font-extrabold'>GRAPHICS</h1>
            <p className='text-personaP text-xs md:text-sm'>
              Persona 3 Reload combines 2D and 3D elements by using detailed 3D environments for exploration and combat...
            </p>
          </span>
        </article>

        {/* Gameplay */}
        <article ref={(el) => (textLeft.current[2] = el)} className="h-[60vh] w-full flex-shrink-0 flex flex-col md:flex-row items-center gap-5 md:gap-16 justify-end px-4 md:px-0">
          <span className='flex-col md:ml-[8rem] text-center md:text-left'>
            <h1 className='text-3xl md:text-4xl text-personaText font-personaFont font-extrabold'>GAME SYSTEM</h1>
            <p className='text-personaP text-xs md:text-sm'>
              Persona 3&apos;s battle system is a turn-based combat system where players control the protagonist, who can summon and fuse multiple Personas...
            </p>
          </span>
          <img ref={(el) => (textLeft.current[2] = el)} src={BattleUI} alt="Battle UI" className='h-[15rem] md:h-[25rem] object-contain' />
        </article>

        <div className='mt-16'>
          <section ref={(el) => (textFade.current[0] = el)} className='w-full flex h-auto flex-col text-center items-center justify-center gap-2 px-4'>
            <div className='h-[1.5rem] w-[1px] opacity-80 bg-personaText'></div>
            <p className='text-personaText font-light italic text-xs md:text-sm'>
              Memento Mori<br />
              I am thou Thou art I<br />
              Thou shall establish a new bond.
            </p>
          </section>
        </div>

        <TextCarousel />
      </section>
      <PersonaChara />
    </main>
  );
}
