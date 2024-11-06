import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function TextCarousel() {
  const carouselRef = useRef(null);
  const textRef = useRef([]);

  useGSAP(() => {
    const textItems = textRef.current;
    const totalWidth = textItems[0].offsetWidth * textItems.length / 2;

    const animation = gsap.to(textItems, {
      x: `-=${totalWidth}`,
      duration: 26,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
      }
    });
  }, [textRef]);

  return (
    <main className="overflow-x-hidden w-screen" ref={carouselRef}>
      <div className="flex font-customFont opacity-30 italic text-transparent font-bold text-[10rem] gap-[4rem]">
        {["RELOAD", "RELOAD", "RELOAD", "RELOAD", "RELOAD", "RELOAD", "RELOAD", "RELOAD", "RELOAD", "RELOAD", "RELOAD", "RELOAD", "RELOAD", "RELOAD", "RELOAD", "RELOAD"].map((text, index) => (
          <div key={index} className="text-item" ref={(el) => (textRef.current[index] = el)} style={{ WebkitTextStroke: '1px black' }}>
            {text}
          </div>
        ))}
      </div>
    </main>
  );
}