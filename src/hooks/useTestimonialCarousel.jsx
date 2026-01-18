/* eslint-disable no-unused-vars */

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';




export const useTestimonialCarousel = (testimonials) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
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
      
      const gap = 24;
      const scrollAmount = cardWidth + gap;
      
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      setTimeout(checkScrollability, 300);
    }
  };

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.testimonial-card')?.offsetWidth;
      if (!cardWidth) return;
      
      const gap = 24;
      scrollContainerRef.current.scrollTo({
        left: (cardWidth + gap) * index,
        behavior: 'smooth'
      });
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