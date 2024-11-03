import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PersonaLandPage from '../components/PersonaLandPage';
import PersonaChara from '../components/personaChara';
import Makoto from '../assets/persona/1Makoto.avif';
import UI from '../assets/persona/Persona3UI.jpg';
import { useGSAP } from '@gsap/react';
import BattleUI from '../assets/persona/BattleUI.avif';
import TextCarousel from '../components/textcarousel'

gsap.registerPlugin(ScrollTrigger);

export default function Persona() {
  const textLeft = useRef([]);
  const textScroll = useRef([]);
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
    const infinitescroll = textScroll.current;
    const getScrollAmount = () => {
      let racesWidth = infinitescroll.scrollWidth;
      return -(racesWidth - window.innerWidth);
    };
  })

  return (
    <main className='flex flex-col'>
      <PersonaLandPage />
      <section className='h-auto w-screen bg-personaLightBlue flex flex-col flex-shrink-0'>
        {/* Makoto Intro */}
        <article ref={(el) => (textLeft.current[0] = el)} className="h-[70vh] w-[100%] flex-shrink-0 flex items-center gap-[5rem] justify-end">
          <span className='flex-col ml-[10rem]'>
            <h1 className='text-[7rem] text-personaText font-personaFont font-light'>Introduction</h1>
            <p className='text-personaP'>The protagonist is a student who has just transferred to Gekkoukan High School, an establishment located on an artificial island. He is attacked by a mysterious monster shortly after moving in, which causes his latent Persona abilities to awaken.
              <br />
              <br />
              This incident leads him to join the school&apos;s Specialized Extracurricular Execution Squad (SEES). As the months pass, he fights with his allies to uncover the mystery behind the Dark Hour and rid the world of Shadows.
              <br />
              <br />
              What kind of fate awaits him at the end?</p>
          </span>
          <img ref={(el) => (textLeft.current[0] = el)} src={Makoto} alt="" className='h-[30rem] object-contain' />
        </article>
        {/* Gameplay Intro */}
        <article ref={(el) => (textLeft.current[1] = el)} className="h-[70vh] w-[100%] flex-shrink-0 flex items-center gap-[5rem] justify-start">
          <img ref={(el) => (textLeft.current[1] = el)} src={UI} alt="" className='h-[30rem]' />
          <span className='flex-col mr-[10rem]'>
            <h1 className='text-[7rem] text-personaText font-personaFont font-extrathin font-light'>Graphics</h1>
            <p className='text-personaP'>
              Persona 3 Reload combines 2D and 3D elements by using detailed 3D environments for exploration and combat while integrating 2D anime-style portraits and effects for character interactions.
              <br />
              <br />
              This blend creates a visually cohesive experience that captures both the realism of the game world and the expressive, stylized personalities of each character.
              <br />
              <br />
            </p>
          </span>
        </article>

        {/* Gameplay  */}
        <article ref={(el) => (textLeft.current[2] = el)} className="h-[70vh] w-[100%] flex-shrink-0 flex items-center gap-[5rem] justify-end">
          <span className='flex-col ml-[10rem]'>
            <h1 className='text-[7rem] text-personaText font-personaFont font-light'>Game System</h1>
            <p className='text-personaP'>Persona 3&apos;s battle system is a turn-based combat system where players control the protagonist, who can summon and fuse multiple Personas with unique abilities, while strategically exploiting enemy weaknesses and utilizing AI-controlled allies to gain advantages in battle.
              <br />
              <br />
              Explore Tartarus with ease and encounter more gratifying battles with renewed graphics and mechanics. Dorm life and Social Links have been fleshed out as well!
              s<br />
              <br />
              </p>
          </span>
          <img ref={(el) => (textLeft.current[2] = el)} src={BattleUI} alt="" className='h-[30rem] object-contain' />
        </article>
        <TextCarousel />
      </section>
     
      <PersonaChara />
    </main>
  );
}
