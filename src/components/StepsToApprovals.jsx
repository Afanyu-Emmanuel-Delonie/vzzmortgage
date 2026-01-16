import React from 'react'
import { stepsToGettingApproved } from '../constants/constants'

function StepsToApprovals() {
  return (
           <div className='px-5 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20 bg-white'>
        <div className='max-w-7xl mx-auto w-full'>
            {/* Section Header */}
            <div className="text-center mb-8 md:mb-12">
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#111111] mb-4'>
                    Your path to the <span className='text-yellow-500'>right loan</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-10 md:mb-12">
                {stepsToGettingApproved.map((item, index) => (
                    <div key={index} className="p-6 md:p-8 rounded-lg bg-[#F3F4F7]">
                        <div className="flex justify-end mb-5">
                            <h2 className='font-bold text-5xl md:text-6xl text-gray-500/20'>{item.stepNo}</h2>
                        </div>

                        <h3 className='text-xl md:text-2xl font-semibold text-[#111111] mb-3'>{item.title}</h3>
                        <p className='text-gray-600 leading-relaxed text-sm md:text-base'>{item.description}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <p className='text-gray-600 text-base md:text-lg max-w-2xl'>
                    Ready to start your journey? Let's find the right loan for you.
                </p>
                <button className='px-8 py-4 text-white bg-[#102044] rounded-lg hover:bg-[#1a2f5f] transition-all duration-200 font-semibold text-base md:text-lg font-inter shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
                    Start Your Journey
                </button>
            </div>
        </div>
        </div>
  )
}

export default StepsToApprovals