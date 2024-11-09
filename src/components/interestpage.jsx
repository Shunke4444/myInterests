import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InterestList from './interestList';
import Credits from '../assets/interests/Credits.webp'
import Persona from '../assets/interests/persona3.jpg'
import Music from '../assets/interests/Spotify.png'
import Grid from '../assets/GridDesign.png';

gsap.registerPlugin(ScrollTrigger);

const InterestPage = () => {
  const racesRef = useRef(null);
  const racesWrapperRef = useRef(null);

  useEffect(() => {
    const races = racesRef.current;
    const racesWrapper = racesWrapperRef.current;

    const getScrollAmount = () => {
      let racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    };

    const tween = gsap.to(races, {
      x: getScrollAmount(),
      duration: 3,
      ease: 'power1.inOut', 
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: racesWrapper,
      start: 'top top',
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: false,
    });

    return () => {
      scrollTrigger.kill();
      tween.kill();
    };
  }, []);

  return (
<main className='bg-heroDarkBlue h-screen w-screen'>
  <section className="relative overflow-hidden bg-heroDarkBlue h-[100vh]" ref={racesWrapperRef}>
    <div className='min-h-[8rem] w-screen p-0 ml-5 bg-heroDarkBlue flex flex-col items-start justify-center'>
      <h1 className='text-[8rem] font-customFont font-bold text-white'>MY INTERESTS</h1>
    </div>
    <hr className='bg-white h-[1px] w-screen m-0'/>

    <article className="inline-flex whitespace-nowrap" ref={racesRef}>
      <div className='h-screen w-[500px] bg-cover bg-center' style={{backgroundImage: `url(${Grid})`}}></div>

            
      <InterestList 
      img={Persona} 
      title='Persona 3 Reload'
      sub= {`Persona 3 is a Japanese role-playing game where players assume the 
role of a high school student who joins the 
Specialized Extracurricular Execution Squad (SEES).`}
      useMap= '#persona'
      areas={[
        { shape: 'rect', coords: '3,3,1597,897', link: '/persona' },
      ]}
      />
      
      <InterestList 
      img={Music} 
      title='Music'
      sub= {`I listen to a lot of random music.
Really as long as it sounds good Id listen to it`}
      useMap= '#music'
      areas={[
        { shape: 'rect', coords: '8,2,729,367', link: "https://open.spotify.com/playlist/5XbPSn5YCADKgGeHksDBbn?si=5a333cb3367a4191" },
      ]}
      />
      <InterestList
      img = {Credits}
      title= 'Credits'
      sub='These are the sources I&apos;ve used!'
      useMap='#credits'
      areas={[
        { shape: 'rect', coords: '8,13,1263,710', link: '/credits'}
      ]}
      />
      

    </article>
  </section>
</main>

  );
};

export default InterestPage;
 