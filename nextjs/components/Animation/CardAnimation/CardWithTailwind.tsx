'use client';
import { useEffect } from 'react';
import './cardStyle.css';
const CardsWithTailwind = () => {
  useEffect(() => {
    const cardsContainer = document.getElementById('cards');

    const cards = document.querySelector('.card');
    const overlay = document.querySelector('.overlay');
    if (overlay === null || cardsContainer === null) return;
    const applyOverlayMask = (e: PointerEvent) => {
      if (cardsContainer instanceof HTMLElement) {
        const overlayEl = e.currentTarget as HTMLElement;
        const x = e.pageX - cardsContainer?.offsetLeft;
        const y = e.pageY - cardsContainer?.offsetTop;

        if (overlayEl instanceof EventTarget) {
          overlayEl.setAttribute(
            'style',
            `--opacity: 1; --x: ${x}px; --y:${y}px;`,
          );
        }
      }
    };

    const createOverlayCta = (overlayCard: HTMLDivElement, ctaEl: Element) => {
      const overlayCta = document.createElement('div');
      overlayCta.classList.add('cta');
      overlayCta.textContent = ctaEl.textContent;
      overlayCta.setAttribute('aria-hidden', 'true');
      overlayCard.append(overlayCta);
    };

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        let width = entry.borderBoxSize[0].inlineSize;
        let height = entry.borderBoxSize[0].blockSize;

        cards?.setAttribute('style', `width:${width}px; height:${height}px`);
      });
    });

    const initOverlayCard = (cardEl: Element) => {
      const overlayCard = document.createElement('div');
      overlayCard.classList.add('card');
      createOverlayCta(overlayCard, cardEl.lastElementChild!);
      /* create element cards for overlay */
      overlay.append(overlayCard);
      /* listen change of element size */
      observer.observe(cardEl);
    };

    initOverlayCard(cards!);
    document.body.addEventListener('pointermove', (e) => {
      return applyOverlayMask(e);
    });
    return () => {
      document.body.removeEventListener('pointermove', (e) => {
        observer.disconnect();
        return applyOverlayMask(e);
      });
    };
  }, []);
  return (
    <div className="">
      <div className="relative">
        <div
          id="cards"
          className="flex flex-wrap gap-[2.5rem]"
        >
          <div className="card">
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

        <div className="overlay flex flex-wrap gap-[2.5rem]"></div>
      </div>
    </div>
  );
};
export default CardsWithTailwind;
