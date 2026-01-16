import React, {useState} from 'react'
import { customerAvatars } from '../../constants/constants'
import MortgageCalculator from '../../components/calculator/MortgageCalculator'
import RatesCTA from './components/RatesCTA'
import Contact from '../../components/Contact'
import { HiHome } from 'react-icons/hi'
import { paths, FirstTimeHomeList } from '../../constants/constants'
import NewsLetters from '../../components/NewsLetters'

function Home() {
   const [hoveredId, setHoveredId] = useState(null)

  return (
    <section>
    {/* this is the hero section  */}
    <div className='min-h-[80vh] lg:min-h-[65vh] flex items-center px-5 py-3 md:px-10 lg:px-16'>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col space-y-8 max-w-2xl">
            {/* Heading */}
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-[#111111] leading-tight '>
              Get Pre-Approved Before You {' '}
              <span className='text-yellow-400'>Search</span>
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
            {/* <div className="flex flex-wrap items-center gap-6 pt-2 opacity-70">
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
            </div> */}
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
    </div>

    <div className='section py-10 bg-white'>
        <div className="container justify-center">
           <h2 className='text-[#111111] text-center pb-15'>Choose <span className='text-yellow-500'>Your path</span> To Closing</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {paths.map((path) => (
                    <div 
                    key={path.id}
                    onMouseEnter={() => setHoveredId(path.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden border border-gray-100"
                    style={{
                        transform: hoveredId === path.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
                    }}
                    >
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                   
                    <div className="flex items-center">
                        <div>
                        <div className="w-16 h-16 flex items-center justify-center text-[#102044]/30 transition-all duration-500 group-hover:rotate-6">
                            {path.icon}
                        </div>
                        </div>

                        {/* Badge */}
                        <div className="absolute top-4 right-4 z-10">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-[#102044] group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300">
                            {path.badge}
                        </span>
                        </div>
                    </div>
                    
                    
                    <div className="relative z-10">
                        <h3 className="text-md font-medium text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                        {path.title}
                        </h3>
                    </div>
                    </div>
                ))}
                </div>

            
            <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
                Not sure which path is right for you? <a href="#" className="text-yellow-500 hover:text-yellow-600 font-semibold">Talk to an expert</a>
            </p>
            </div>
        </div>
    </div>
    
    {/* first time home buyers  */}
    <div className='py-16 px-5 md:px-10 lg:px-16'>
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
    </div>

    <MortgageCalculator />
    <RatesCTA />
    
    {/* trust builder section  */}
     <div className='py-16 px-5 md:px-10 lg:px-16'>
        <div className="container flex gap-6 flex-col lg:flex-row items-stretch">
            <div className="relative w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/assets/img/buyer.png" 
                alt="Happy family in their new home" 
                className='w-full h-full object-cover'
              /> 
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>

            <div className='flex flex-col justify-between w-full lg:w-1/2 bg-[#102044] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg text-white'>
                <div>
                  <h2 className='text-2xl sm:text-4xl font-bold mb-8'>A Simpler Mortgage Experience</h2>
                  
                  <div className='space-y-6 mb-6'>
                    <div className='flex gap-4'>
                      <div className='flex-shrink-0'>
                        <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' />
                        </svg>
                      </div>
                      <div>
                        <h3 className='text-xl font-semibold mb-2'>Digital Convenience. Human Support.</h3>
                        <p className='text-gray-300'>Apply online in minutes, with trusted experts ready whenever you need guidance.</p>
                      </div>
                    </div>

                    <div className='flex gap-4'>
                      <div className='flex-shrink-0'>
                        <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                        </svg>
                      </div>
                      <div>
                        <h3 className='text-xl font-semibold mb-2'>A Faster, Simpler Mortgage Experience</h3>
                        <p className='text-gray-300'>Streamlined applications and eClosings keep things moving without the hassle.</p>
                      </div>
                    </div>

                    <div className='flex gap-4'>
                      <div className='flex-shrink-0'>
                        <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                        </svg>
                      </div>
                      <div>
                        <h3 className='text-xl font-semibold mb-2'>More Ways to Own With Confidence</h3>
                        <p className='text-gray-300'>Programs and pricing designed to help you buy, refinance, or unlock equity wisely.</p>
                      </div>
                    </div>
                  </div>

                <button className=' py-3 px-6 text-white text-sm bg-yellow-400 rounded-sm hover:bg-yellow-400 transition-all duration-200 font-medium shadow-sm hover:shadow-md'>
                Apply Now
              </button>
                </div>
            </div>

        </div>
    </div>

    <Contact />
    {/* <NewsLetters /> */}
    </section>
  )
}

export default Home