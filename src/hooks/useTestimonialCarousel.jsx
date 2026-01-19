/* eslint-disable no-unused-vars */

import { useState, useRef, useEffect } from 'react';

export const useTestimonialCarousel = (testimonials) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  const updateCurrentIndex = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.testimonial-card')?.offsetWidth;
      if (!cardWidth) return;
      
      const gap = 24; // Match the gap from your CSS (gap-6 = 24px)
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      
      setCurrentIndex(newIndex);
    }
  };

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
      // Update current index when scrolling
      updateCurrentIndex();
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.testimonial-card')?.offsetWidth;
      if (!cardWidth) return;
      
      const gap = 24; // gap-6 md:gap-8
      const scrollAmount = cardWidth + gap;
      
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      // Update after scroll animation
      setTimeout(() => {
        checkScrollability();
        updateCurrentIndex();
      }, 300);
    }
  };

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.testimonial-card')?.offsetWidth;
      if (!cardWidth) return;
      
      const gap = 24; // gap-6 md:gap-8
      const scrollLeft = (cardWidth + gap) * index;
      
      scrollContainerRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });

      // Update index immediately
      setCurrentIndex(index);

      // Update scrollability after animation
      setTimeout(() => {
        checkScrollability();
      }, 300);
    }
  };

  return {
    currentIndex,
    canScrollLeft,
    canScrollRight,
    scrollContainerRef,
    scroll,
    scrollToIndex,
    checkScrollability
  };
};