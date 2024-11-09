import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Makoto from '../assets/persona/Makoto1x1.jpg';
import Yukari from '../assets/persona/Yukari.jpg';
import Junpei from '../assets/persona/Junpei.webp';
import Akihiko from '../assets/persona/Sanada.webp';
import Mitsuru from '../assets/persona/Mitsuru.webp';
import Fuuka from '../assets/persona/Fuuka.webp';
import Koromaru from '../assets/persona/Koromaru.webp';
import Aigis from '../assets/persona/Aigis.webp';
import Ken from '../assets/persona/Ken.webp';
import Shinjiro from '../assets/persona/Shinjiro.webp';
import Takaya from '../assets/persona/Takaya.webp';
import Jin from '../assets/persona/Jin.webp';
import Chidori from '../assets/persona/Chidori.webp';
import PersonaCharaList from '../components/personaCharaList';
import { Link } from 'react-router-dom';
import { IoPlaySkipBackCircleSharp } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);


const PersonaChara = () => {
  const racesRef = useRef(null);
  const racesWrapperRef = useRef(null);


  useEffect(() => {
    const races = racesRef.current;
    const racesWrapper = racesWrapperRef.current;

    const getScrollAmount = () => {
      const racesWidth = races.scrollWidth;
      return racesWidth - window.innerWidth;
    };

    const tween = gsap.to(races, {
      x: () => `-${getScrollAmount()}`,
      ease: 'none',
      scrollTrigger: {
        trigger: racesWrapper,
        start: 'top top',
        end: () => `+=${getScrollAmount()}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
        markers: false,
      },
    });

    const colors = [
      '#738fce', '#d96477', '#989efa', '#d3dada', '#d4494b', 
      '#72aaac', '#f2f4f2', '#fef6c9', '#faba80', '#ce8998', 
      '#ce8998', '#93cc96', '#dbdcd5', '#53ff5e', '#f7574d', 
      '#c0d5e8'
    ];

    const colorTrigger = ScrollTrigger.create({
      trigger: racesWrapper,
      start: 'top top',
      end: () => `+=${getScrollAmount()}`,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalImages = races.children.length;
        const colorIndex = Math.floor(progress * (totalImages - 1));
        gsap.to(document.body, { backgroundColor: colors[colorIndex], duration: 1 });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tween.kill();
      colorTrigger.kill();
    };
  }, []);

  return (
    <main className="h-screen w-screen">
      <section className="relative overflow-hidden h-[100vh]" ref={racesWrapperRef}>
        <div className="min-h-[6rem] w-screen p-0 ml-5 flex flex-col items-start justify-center">
          <h1 className="text-[7rem] font-personaFont font-extrabold italic textOutline">CHARACTERS</h1>
        </div>
        <hr className="bg-white h-[1px] w-screen m-0" />

        <article className="inline-flex whitespace-nowrap" ref={racesRef}>
          <div className="h-screen w-[50rem] bg-center flex flex-col items-start justify-center pl-[5rem] pb-[10rem]">
            <h1 className="text-[13rem] font-extrabold italic font-personaFont ">S.E.E.S</h1>
            <p className="flex flex-start text-lg">
              An aggregation vigilantly chosen to
              <br />
              vanquish the Shadows
              <br />
              Time won’t wait for you, destiny shan’t change for you.
            </p>
          </div>

          <PersonaCharaList img={Makoto} title='Makoto Yuki' />
          <PersonaCharaList img={Yukari} title='Yukari Takeba' />
          <PersonaCharaList img={Junpei} title='Junpei Iori' />
          <PersonaCharaList img={Akihiko} title='Akihiko Sanada' />
          <PersonaCharaList img={Mitsuru} title='Mitsuru Kirijo' />
          <PersonaCharaList img={Fuuka} title='Fuuka Yamagishi' />
          <PersonaCharaList img={Koromaru} title='Koromaru' />
          <PersonaCharaList img={Aigis} title='Aigis' />
          <PersonaCharaList img={Ken} title='Ken Amada' />
          <PersonaCharaList img={Shinjiro} title='Shinjiro Aragaki' />


          <div className="h-screen w-[50rem] bg-center flex flex-col items-start justify-center pb-[10rem] mr-[16rem]">
            <h1 className="text-[13rem] font-extrabold italic font-personaFont">STREGA</h1>
            <p className="flex flex-start text-lg">
              An aggregation vigilantly chosen to
              <br />
              Strega exploits this phenomenon to carry out their sinister operations.
              <br />
              &quot;Humanity’s pursuit of happiness only hastens its own end.&quot;
            </p>
          </div>

          <PersonaCharaList img={Takaya} title='Takaya Sakaki' />
          <PersonaCharaList img={Jin} title='Jin Shirato' />
          <PersonaCharaList img={Chidori} title='Chidori Yoshino' />
          <div className='h-screen w-[50rem] mb-[8rem] flex items-center justify-center '>
            <Link to= "/home">
            <button className='flex flex-col items-center justify-center'>
                  <IoPlaySkipBackCircleSharp className='text-[10rem] font-bold text-personaBgBlue'/>
                  <p className='text-[3rem] font-bold italic font-personaFont'>Back to Home</p>
            </button>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
};

export default PersonaChara;