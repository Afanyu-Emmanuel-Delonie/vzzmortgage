import React from 'react'

function TrustBuilder() {
  return (
  <section className='py-16 px-5 md:px-10 lg:px-16'>
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
    </section>
  )
}

export default TrustBuilder