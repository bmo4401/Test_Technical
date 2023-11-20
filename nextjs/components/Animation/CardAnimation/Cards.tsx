'use client';
import { useEffect, useState } from 'react';
import { cn } from '@/libs/utils';
const Card = () => {
  const [opacity, setOpacity] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [hidden, setHidden] = useState(true);
  const [lightness, setLightness] = useState('95%');
  const hsl = `165, 82.26%, ${lightness}`;
  useEffect(() => {
    const cardsContainer = document.getElementById('card2');

    if (cardsContainer === null) return;
    const applyOverlayMask = (e: PointerEvent) => {
      if (cardsContainer instanceof HTMLElement) {
        const x = e.pageX - cardsContainer?.offsetLeft;
        const y = e.pageY - cardsContainer?.offsetTop;
        setOpacity(1);
        setX(x);
        setY(y);
        setHidden(false);
        setLightness('51.37%');
      }
    };

    document.body.addEventListener('pointermove', (e) => {
      return applyOverlayMask(e);
    });
    return () => {
      document.body.removeEventListener('pointermove', (e) => {
        return applyOverlayMask(e);
      });
    };
  }, []);
  return (
    <div className="">
      <div className="relative">
        {/* main */}
        <div
          id="card2"
          className="flex flex-wrap gap-[2.5rem] "
        >
          <div
            className="card transition-all ease-linear"
            style={{
              backgroundColor: `hsla(165, 82.26%, 95%, 0.1)`,
            }}
          >
            <h2 className="text-[1.5rem] font-semibold">Basic</h2>
            <p className="text-[1.75rem] font-bold">$9.99</p>
            <ul
              role="list"
              className="card-bullets flow"
            >
              <li>Access to standard workouts and nutrition plans</li>
              <li>Email support</li>
            </ul>
            <a
              href="#basic"
              className="cta"
            >
              Get Started
            </a>
          </div>
        </div>
        {/* overlay */}
        <div
          className={cn(
            ' flex flex-wrap gap-[2.5rem] transition duration-300 ease-linear absolute inset-0 pointer-events-none select-none',
            hidden ? 'hidden' : '',
          )}
          style={{
            WebkitMask: `radial-gradient(25rem 25rem at ${x}px ${y}px,#000 1%, transparent 50%)`,
            opacity: opacity,
          }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundColor: `hsla(${hsl}, 0.15)`,
              borderColor: `hsla(${hsl}, 1)`,
              boxShadow: `0 0 0 1px inset hsl(${hsl})`,
            }}
          >
            <div
              className="w-9 h-9 rounded-md"
              style={{
                backgroundColor: `hsl(${hsl})`,
                boxShadow: `0 0 0 1px hsl(${hsl})`,
              }}
            >
              CTA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
