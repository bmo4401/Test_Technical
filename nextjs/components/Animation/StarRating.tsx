'use client';
import { Star } from '@/components/ui/Star';
import { useEffect } from 'react';
import './style.css';
class Rating {
  ratingEl: Element;

  constructor(ratingEl: Element) {
    this.ratingEl = ratingEl;

    setTimeout(() => {
      this.ratingEl.classList.add('rating--animatable');
    }, 0);

    this.ratingEl.addEventListener('click', this.onClick.bind(this));
  }
  /* return array of sub button */
  get ratingButtons() {
    return [...this.ratingEl.querySelectorAll('.rating-button')];
  }

  get offButtons() {
    return this.ratingButtons.filter(
      (button: Element) => !button.classList.contains('rating-button--active'),
    );
  }
  onClick(this: any, e: Event) {
    const target = (e.target as HTMLElement).matches('.rating-button')
      ? (e.target as HTMLElement)
      : (e.target as HTMLElement).closest('.rating-button');
    if (!target) return;
    this.ratingButtons.forEach((button: HTMLButtonElement) => {
      button.style.setProperty('--transition-delay', '0');
    });

    this.offButtons.forEach((button: HTMLButtonElement, index: number) => {
      const DELAY_UNIT = 100;
      button.style.setProperty('--transition-delay', `${DELAY_UNIT * index}ms`);
    });

    const clickedButtonIndex = this.ratingButtons.indexOf(target);
    this.ratingButtons.forEach((button: HTMLButtonElement, index: number) => {
      if (index <= clickedButtonIndex) {
        button.classList.add('rating-button--active');
      } else {
        button.classList.remove('rating-button--active');
      }
    });
  }
}

/* function onClick(this: any, e: Event) {
  const target = (e.target as HTMLElement).matches('.rating-button')
    ? (e.target as HTMLElement)
    : (e.target as HTMLElement).closest('.rating-button');
  if (!target) return;

  this.ratingButtons.forEach((button: HTMLButtonElement) => {
    button.style.setProperty('--transition-delay', '0');
  });

  this.offButtons.forEach((button: HTMLButtonElement, index: number) => {
    const DELAY_UNIT = 100;
    button.style.setProperty('--transition-delay', `${DELAY_UNIT * index}ms`);
  });

  const clickedButtonIndex = this.ratingButtons.indexOf(target);
  this.ratingButtons.forEach((button: HTMLButtonElement, index: number) => {
    if (index <= clickedButtonIndex) {
      button.classList.add('rating-button--active');
    } else {
      button.classList.remove('rating-button--active');
    }
  });
} */
const StarRating = () => {
  useEffect(() => {
    Array.from(document.querySelectorAll('.rating')).forEach((ratingEl) => {
      new Rating(ratingEl);
    });
  }, []);
  return (
    <div className="rating">
      <button className="rating-button">
        <Star />
      </button>
      <button className="rating-button">
        <Star />
      </button>
      <button className="rating-button">
        <Star />
      </button>
      <button className="rating-button">
        <Star />
      </button>
      <button className="rating-button">
        <Star />
      </button>
    </div>
  );
};
export default StarRating;
