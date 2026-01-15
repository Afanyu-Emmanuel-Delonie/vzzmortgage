import { Tag, Filter, ArrowRight  } from 'lucide-react'
import React from 'react'
import LoanOptions from './components/Loan-Options'
import { stepsToGettingApproved } from '../../constants/constants'
import NewsLetters from '../../components/NewsLetters'


function Buyers() {

  return (
    <section className='section'>
        {/* this is the hero section  */}
            <div className='min-h-[80vh] lg:min-h-[65vh] flex items-center px-5 py-3 md:px-10 lg:px-16 mb-5 lg:mb-10'>
              <div className="max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
                  
                  {/* Left Content */}
                  <div className="flex flex-col space-y-5 md:space-y-6 lg:space-y-8">
                    {/* Heading */}
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-[#111111] leading-tight'>
                      Home loans that help you reach your {' '}
                      <span className='text-yellow-400 relative inline-block'>
                        goals.
                      </span>
                    </h1>
        
                    {/* Subheading */}
                    <p className='text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed font-inter'>
                    Buying your first home or refinancing? VZZ Mortgage helps you find the right loan for your next step.
                    </p>

        
                    {/* CTA Buttons */}
                    <div className="flex gap-4 pt-2">
                      <button className='px-6 py-3 md:px-7 md:py-3.5 text-white bg-[#102044] rounded-lg hover:bg-[#1a2f5f] transition-all duration-200 font-medium font-inter shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
                        Get Started
                      </button>
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
                    <div className="hidden md:block absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white rounded-xl shadow-xl p-4 md:p-6 max-w-[180px] md:max-w-[200px] border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-xl md:text-2xl font-bold text-[#111] font-inter">98%</p>
                          <p className="text-xs md:text-sm text-gray-600 font-inter">Approval Rate</p>
                        </div>
                      </div>
                    </div>
        
                    {/* Decorative blob */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#102044] opacity-5 rounded-full blur-3xl -z-10"></div>
                  </div>
        
                </div>
              </div>
            </div>

        {/* CTA Section - load finding and application */}
        <div className="px-5 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20 bg-white">
              <div className="max-w-7xl mx-auto w-full">
                <div className="p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-6 bg-[#EEF0F4] rounded-lg">
                  <div className='flex flex-col gap-3 md:gap-4'>
                      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-[#111111] leading-tight'>Let's find the right loan</h2>
                      <p className='text-base text-gray-600 leading-relaxed font-inter'>Answer a few questions to get matched with the right mortgage.</p>
                  </div>
                  
                  {/* call to action button  */}
                  <button className='px-6 py-3 md:px-7 md:py-3.5 w-full lg:w-auto text-white bg-[#102044] rounded-lg hover:bg-[#1a2f5f] transition-all duration-200 font-medium font-inter shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap'>
                     Find My Loan
                  </button>
                </div>
              </div>
        </div>

        {/* this section covers the loan options  */}
        <LoanOptions />

        {/* this section covers the steps to getting approved  */}
       <div className='px-5 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20 bg-white'>
        <div className='max-w-7xl mx-auto w-full'>
            {/* Section Header */}
            <div className="text-center mb-8 md:mb-12">
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#111111] mb-4'>
                    Your path to the <span className='text-yellow-500'>right loan</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
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
        </div>
        </div>

        {/* this section will cover the news letters  */}
        <div className='px-5 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20'>
            <div className='max-w-7xl mx-auto w-full'>
                    <div className="text-center mb-8 md:mb-12">
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#111111] mb-4'>
                        Mortgage insights & resources
                    </h2>
                    </div>

                    <NewsLetters />
            </div>
        </div>

        {/* this section will cover the final CTA  */}
        <div className='px-5 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20 bg-white'>
            <div className='max-w-7xl mx-auto w-full'>
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Content Section */}
                    <div className='p-6 md:p-8 lg:p-10 rounded-lg bg-[#F3F4F7] w-full lg:w-1/2 flex flex-col justify-center'>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#111111] mb-4'>
                            Questions about your mortgage?
                        </h2>
                        <p className='text-gray-600 leading-relaxed mb-6 text-sm md:text-base lg:text-lg'>
                            Whether you're exploring your options or ready to apply, VZZ is here to answer your questions 24/7, no waiting, no pressure.
                        </p>
                        
                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className='px-6 py-3 text-white bg-[#102044] rounded-lg hover:bg-[#1a2f5f] transition-all duration-200 font-medium font-inter shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
                                Ask an Expert
                            </button>

                            <button className='px-6 py-3 text-gray-700 bg-gray-200 rounded-lg hover:bg-yellow-400 hover:border-yellow-400 hover:text-white transition-all duration-200 border-2 border-transparent font-medium'>
                               Chat Now
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative w-full lg:w-1/2 hidden lg:block">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                            <img 
                                src="/assets/img/hero.png" 
                                alt="Happy family in their new home" 
                                className='w-full h-full object-cover'
                            />
                            {/* Overlay gradient for better image blend */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                        </div>

                        {/* Decorative blob */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#102044] opacity-5 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
  )
}

export default Buyers