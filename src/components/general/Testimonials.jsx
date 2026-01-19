import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTestimonialCarousel } from '../../hooks/useTestimonialCarousel';
import { testimonials } from '../../constants/constants';


const TestimonialSection = () => {
  const {
    currentIndex,
    canScrollLeft,
    canScrollRight,
    scrollContainerRef,
    scroll,
    scrollToIndex,
    checkScrollability
  } = useTestimonialCarousel(testimonials);

  return (
    <div className="w-full py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="px-5 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
              What our clients say about us
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
        </div>
      </div>

      <div className="relative px-5 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="hidden md:block">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center transition-all duration-300 border-2 border-gray-100 ${
                canScrollLeft 
                  ? 'hover:bg-gray-900 hover:text-white hover:scale-110 hover:border-transparent cursor-pointer' 
                  : 'opacity-30 cursor-not-allowed'
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center transition-all duration-300 border-2 border-gray-100 ${
                canScrollRight 
                  ? 'hover:bg-gray-900 hover:text-white hover:scale-110 hover:border-transparent cursor-pointer' 
                  : 'opacity-30 cursor-not-allowed'
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div
            ref={scrollContainerRef}
            onScroll={checkScrollability}
            className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-card flex-shrink-0 w-[85%] sm:w-[70%] md:w-[45%] lg:w-[calc(33.333%-1.33rem)] snap-start"
              >
                <div className="group bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col hover:-translate-y-2">
                  <div className="text-6xl md:text-7xl font-serif mb-2 leading-none text-yellow-500 opacity-30">
                    "
                  </div>

                  <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 flex-grow">
                    {testimonial.quote}
                  </p>

                  <div className="flex gap-4 items-center pt-6 border-t border-gray-100">
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-yellow-100 group-hover:ring-yellow-300 transition-all duration-300">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-1 min-w-0">
                      <h4 className="font-bold text-gray-900 text-base md:text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500 font-medium">{testimonial.job}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex md:hidden justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-gray-900' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSection;