import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Makoto from '../assets/persona/Makoto1x1.jpg';
import Yukari from '../assets/persona/Yukari.jpg';
import PersonaCharaList from '../components/personaCharaList';

gsap.registerPlugin(ScrollTrigger);

const PersonaChara = () => {
  const racesRef = useRef(null);
  const racesWrapperRef = useRef(null);

  useEffect(() => {
    const races = racesRef.current;
    const racesWrapper = racesWrapperRef.current;

    const getScrollAmount = () => {
      const racesWidth = races.scrollWidth;
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

    const colors = ['#738fce', '#d96477', '#989efa', '#FF33A1', '#A133FF'];

    const colorTrigger = ScrollTrigger.create({
      trigger: racesWrapper,
      start: 'top top',
      end: () => `+=${getScrollAmount() * -1}`,
      onUpdate: (self) => {
        const progress = self.progress;
        const colorIndex = Math.floor(progress * (colors.length - 1));
        gsap.to(document.body, { backgroundColor: colors[colorIndex], duration: 1 });
      },
    });

    return () => {
      scrollTrigger.kill();
      tween.kill();
      colorTrigger.kill();
    };
  }, []);

  return (
    <main className="h-screen w-screen">
      <section className="relative overflow-hidden h-[100vh]" ref={racesWrapperRef}>
        <div className="min-h-[6rem] w-screen p-0 ml-5 flex flex-col items-start justify-center">
          <h1 className="text-[6rem] font-personaFont font-normal  text-white">CHARACTERS</h1>
        </div>
        <hr className="bg-white h-[1px] w-screen m-0" />

        <article className="inline-flex whitespace-nowrap" ref={racesRef}>
          <div className="h-screen w-[50rem] bg-center flex flex-col items-start justify-center pl-[5rem]">
            <h1 className="text-[15rem] font-medium font-personaFont">S.E.E.S</h1>
            <p className="flex flex-start">
              An aggregation vigilantly chosen to
              <br />
              vanquish the Shadows
              <br />
              Time won’t wait for you, destiny shan’t change for you.
            </p>
          </div>
          <PersonaCharaList img={Makoto} />
          <PersonaCharaList img={Yukari} />
          <PersonaCharaList img={Makoto} />
          <PersonaCharaList img={Makoto} />
          <PersonaCharaList img={Makoto} />
          <PersonaCharaList img={Makoto} />
        </article>
      </section>
    </main>
  );
};

export default PersonaChara;
