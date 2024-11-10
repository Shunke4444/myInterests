import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PersonaLandPage from '../components/PersonaLandPage';
import Makoto from '../assets/persona/1Makoto.avif';
import UI from '../assets/persona/Persona3UI.jpg';
import { useGSAP } from '@gsap/react';
import PersonaChara from '../components/personaChara';
import BattleUI from '../assets/persona/personaBattle.jpg';
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
          }
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
        <article 
          ref={(el) => (textLeft.current[0] = el)} 
          className="h-[70vh] w-full flex-shrink-0 flex flex-col md:flex-row items-center gap-[2rem] md:gap-[5rem] justify-center md:justify-end p-4 md:p-0"
        >
          <span className='flex flex-col md:ml-[8rem]'>
            <h1 className='text-[2rem] md:text-[3rem] text-personaText font-personaFont font-extrabold'>INTRODUCTION</h1>
            <p className='text-personaP text-base md:text-lg mt-2 md:mt-0'>
              The protagonist is a student who has just transferred to Gekkoukan High School, an establishment located on an artificial island. He is attacked by a mysterious monster shortly after moving in, which causes his latent Persona abilities to awaken.
              <br />
              <br />
              This incident leads him to join the school&apos;s Specialized Extracurricular Execution Squad (SEES). As the months pass, he fights with his allies to uncover the mystery behind the Dark Hour and rid the world of Shadows.
              <br />
              <br />
              What kind of fate awaits him at the end?
            </p>
          </span>
          <img ref={(el) => (textLeft.current[0] = el)} src={Makoto} alt="" className='h-[15rem] md:h-[25rem] object-contain mt-4 md:mt-0' />
        </article>

        {/* Gameplay Intro */}
        <article 
          ref={(el) => (textLeft.current[1] = el)} 
          className="h-[70vh] w-full flex-shrink-0 flex flex-col md:flex-row items-center gap-[2rem] md:gap-[5rem] justify-center md:justify-start p-4 md:p-0"
        >
          <img ref={(el) => (textLeft.current[1] = el)} src={UI} alt="" className='h-[15rem] md:h-[25rem]' />
          <span className='flex flex-col md:mr-[8rem]'>
            <h1 className='text-[2rem] md:text-[3rem] text-personaText font-personaFont font-extrabold'>GRAPHICS</h1>
            <p className='text-personaP text-base md:text-lg mt-2 md:mt-0'>
              Persona 3 Reload combines 2D and 3D elements by using detailed 3D environments for exploration and combat while integrating 2D anime-style portraits and effects for character interactions.
              <br />
              <br />
              This blend creates a visually cohesive experience that captures both the realism of the game world and the expressive, stylized personalities of each character.
              <br />
              <br />
            </p>
          </span>
        </article>

        {/* Gameplay */}
        <article 
          ref={(el) => (textLeft.current[2] = el)} 
          className="h-[70vh] w-full flex-shrink-0 flex flex-col md:flex-row items-center gap-[2rem] md:gap-[5rem] justify-center md:justify-end p-4 md:p-0"
        >
          <span className='flex flex-col md:ml-[8rem]'>
            <h1 className='text-[2rem] md:text-[3rem] text-personaText font-personaFont font-extrabold'>GAME SYSTEM</h1>
            <p className='text-personaP text-base md:text-lg mt-2 md:mt-0'>
              Persona 3&apos;s battle system is a turn-based combat system where players control the protagonist, who can summon and fuse multiple Personas with unique abilities, while strategically exploiting enemy weaknesses and utilizing AI-controlled allies to gain advantages in battle.
              <br />
              <br />
              Explore Tartarus with ease and encounter more gratifying battles with renewed graphics and mechanics. Dorm life and Social Links have been fleshed out as well!
              <br />
              <br />
            </p>
          </span>
          <img ref={(el) => (textLeft.current[2] = el)} src={BattleUI} alt="" className='h-[15rem] md:h-[25rem] object-contain mt-4 md:mt-0' />
        </article>

        <div className='mt-20'>
          <section ref={(el) => (textFade.current[0] = el)} className='w-screen flex h-auto flex-col text-center items-center justify-center gap-3'>
            <div className='h-[4rem] w-[1px] opacity-80 bg-personaText'></div>
            <p className='text-personaText font-light italic text-base md:text-lg'>Memento Mori
              <br />
              I am thou Thou art I
              <br />
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
