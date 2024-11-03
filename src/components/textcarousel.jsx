import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const TextCarousel = () => {
  const carouselRef = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
    const texts = textRef.current;
    const totalWidth = texts.length * (texts[0]?.offsetWidth || 0);
    
    gsap.to(carouselRef.current, {
      x: `-=${totalWidth}`,
      duration: 10,
      ease: "none",
      modifiers: {
        x: (x) => {
          const numX = parseFloat(x);
          return `${numX % totalWidth}px`;
        },
      },
    });
  }, [textRef]); // Dependencies to re-trigger if textRef changes

  return (
    <main className="overflow-x-hidden w-[screen]" ref={carouselRef}>
      <div className="flex outline font-bold font-8bitFont text-[10rem] gap-5">
        {["RELOAD", "RELOAD", "RELOAD", "RELOAD"].map((text, index) => (
          <div key={index} className="text-item" ref={(el) => (textRef.current[index] = el)}>
            {text}
          </div>
        ))} ``
      </div>
    </main>
  );
};

export default TextCarousel;
