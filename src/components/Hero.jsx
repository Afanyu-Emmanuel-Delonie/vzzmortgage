import React from 'react'
import { customerAvatars } from '../constants/constants'


function Hero() {

  return (
    <section className='min-h-[90vh] lg:min-h-[85vh] flex items-center px-5 py-2 md:px-10 lg:px-16'>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col space-y-8 max-w-2xl">
            {/* Heading */}
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-[#111111] leading-tight '>
              Get Pre-Approved Before You Start Your Home {' '}
              <span className='text-yellow-400 relative inline-block'>
                Search.
              </span>
            </h1>

            {/* Subheading */}
            <p className='text-lg md:text-xl text-gray-600 leading-relaxed font-inter'>
              The speed of digital mortgages, with experts who explain everything.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <button className='px-4 py-2 md:px-6 md:py-3 text-white bg-[#102044] rounded-lg hover:bg-[#1a2f5f] transition-all duration-200 font-medium font-inter shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
                Buy a Home
              </button>

              <button className='px-4 py-2 md:px-6 md:py-3 text-gray-700 bg-gray-200 rounded-lg hover:bg-yellow-400 hover:border-yellow-400 hover:text-white hover:font-medium border-2 border-transparent'>
                Refinancing
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4">
              
              <div className="flex -space-x-3">
                {customerAvatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Happy customer ${index + 1}`}
                    className={`w-12 h-12 rounded-full border-2 border-white object-cover shadow-md ${index === 3 ? 'hidden sm:block': ''}`}
                  />
                ))}
                <div className="w-12 h-12 min-w-[3rem] rounded-full border-3 border-white bg-[#102044] flex items-center justify-center text-white text-sm font-semibold shadow-md">
                  +2K
                </div>
              </div>

              {/* Caption */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1 mb-1">
                </div>
                <p className='text-sm text-gray-700 font-medium font-inter'>
                  Join <span className='font-bold text-yellow-500'>2,000+</span> happy home buyers
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-2 opacity-70">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm text-gray-600 font-inter">No hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm text-gray-600 font-inter">5-minute approval</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm text-gray-600 font-inter">Expert support</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/assets/img/hero.png" 
                alt="Happy family in their new home" 
                className='w-full h-auto object-cover'
              />
              {/* Overlay gradient for better image blend */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-[200px] border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#111] font-inter">98%</p>
                  <p className="text-sm text-gray-600 font-inter">Approval Rate</p>
                </div>
              </div>
            </div>

            {/* Decorative blob */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#102044] opacity-5 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero