'use client';

import useMousePosition from '@/hooks/custom/useMousePosition';
import useWindowSize from '@/hooks/custom/useWindowSize';
import { ElementRef, useEffect, useRef, useState } from 'react';

const NuxtMouseAnimation = () => {
  const { x, y } = useMousePosition();
  const { height, width } = useWindowSize();
  const [opacity, setOpacity] = useState(0);
  const [size, setSize] = useState(0);
  const [logoGradient, setLogoGradient] = useState('');

  const logo = useRef<ElementRef<'h2'>>(null);

  useEffect(() => {
    const logoGradient = () => {
      let rect = logo.current?.getBoundingClientRect();
      const xPos = x - (rect?.left ?? 0);
      const yPos = y - (rect?.top ?? 0);
      return `radial-gradient(circle at ${xPos}px ${yPos}px, black 30%, transparent 100%)`;
    };
    setLogoGradient(logoGradient());
    const dx = Math.abs(x - width / 2);
    const dy = Math.abs(y - height / 2);
    const distance = Math.sqrt(dx * dx + dy * dy);

    const size = Math.max(300 - distance / 3, 150);
    setSize(size);
    const opacity = Math.min(Math.max(size / 300, 0.7), 1);
    setOpacity(opacity);
    /* Mask Image */
  }, [x, y, width, height]);
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-black to-green-500/30 from-80% flex items-center justify-center ">
      <div
        className="absolute  w-48 h-48 bg-green-500/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden overflow-y-auto blur-3xl"
        style={{ left: x, top: y, opacity, width: size, height: size }}
      ></div>
      <h2
        ref={logo}
        className="text-5xl dark:text-white text-black"
        style={{ WebkitMask: logoGradient }}
      >
        Hello
      </h2>
    </div>
  );
};
export default NuxtMouseAnimation;
