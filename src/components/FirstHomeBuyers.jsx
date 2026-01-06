import React from 'react'
import { FirstTimeHomeList } from '../constants/constants'

function FirstHomeBuyers() {
  return (
    <section className='py-16 px-5 md:px-10 lg:px-16'>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
           
            <div className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/assets/img/homebuyer.png" 
                alt="Happy family in their new home" 
                className='w-full h-auto object-cover'
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col w-full md:w-1/2">
                <h2 className='font-bold text-[#111111] mb-4'>
                  Your First Home Starts With <span className='text-yellow-400'>Confidence.</span>
                </h2>

                <p className='text-lg text-gray-600 mb-6 leading-relaxed font-inter'>
                  We make your first home purchase simple, clear, and stress-free from start to keys in hand.
                </p>

                <ul className='mb-8 space-y-4'>
                    {FirstTimeHomeList.map((item) => (
                        <li key={item.id} className='flex items-start gap-3'>
                          <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-0.5">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <div>
                            <span className='font-semibold text-[#111111] font-inter'>{item.title}</span>
                            <span className='text-gray-600 font-inter'> {item.description}</span>
                          </div>
                        </li>
                    ))}
                </ul>

                <button className='px-6 py-3 w-full md:w-1/3 text-white bg-[#102044] rounded-lg hover:bg-[#1a2f5f] transition-all duration-200 font-medium font-inter shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
                  Start Journey
                </button>
            </div>
        </div>
    </section>
  )
}

export default FirstHomeBuyers