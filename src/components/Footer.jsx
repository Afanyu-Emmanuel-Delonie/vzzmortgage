import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn, MdSchedule } from 'react-icons/md'

function Footer() {
  return (
    <footer className='bg-[#102044] text-white'>
      <div className='py-16 px-5 md:px-10 lg:px-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
          
          {/* Column 1 - Logo & About */}
          <div>
            <div className='mb-6'>
              {/* Logo placeholder - replace with your actual logo */}
               <a href="#home" className="flex-shrink-0">
              <img 
                src="./assets/logo/secondary.png" 
                alt="vzz-logo" 
                className='w-28 md:w-36 lg:w-40'
              />
            </a>
            </div>
            
            <div className='text-xs text-gray-400 space-y-1 mb-4'>
              <p>Verla LLC dba VZZBrokerage</p>
              <p>Broker ID: 5009278</p>
              <p>VZZ Financial Services LLC</p>
              <p>NMLS: 2556813</p>
            </div>

             <div className='flex gap-3 mb-6'>
              <a 
                href='https://facebook.com' 
                target='_blank' 
                rel='noopener noreferrer'
                className='bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors duration-300'
                aria-label='Facebook'
              >
                <FaFacebookF className='text-xl' />
              </a>
              <a 
                href='https://twitter.com' 
                target='_blank' 
                rel='noopener noreferrer'
                className='bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors duration-300'
                aria-label='Twitter'
              >
                <FaTwitter className='text-xl' />
              </a>
              <a 
                href='https://linkedin.com' 
                target='_blank' 
                rel='noopener noreferrer'
                className='bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors duration-300'
                aria-label='LinkedIn'
              >
                <FaLinkedinIn className='text-xl' />
              </a>
              <a 
                href='https://instagram.com' 
                target='_blank' 
                rel='noopener noreferrer'
                className='bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors duration-300'
                aria-label='Instagram'
              >
                <FaInstagram className='text-xl' />
              </a>
            </div>

          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className='text-lg font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-3'>
              <li>
                <a href='/' className='text-gray-300 hover:text-white transition-colors duration-300'>
                  Buy Home
                </a>
              </li>
              <li>
                <a href='/' className='text-gray-300 hover:text-white transition-colors duration-300'>
                  Refinancing
                </a>
              </li>
              <li>
                <a href='/' className='text-gray-300 hover:text-white transition-colors duration-300'>
                  Mortgage Calculator
                </a>
              </li>
              <li>
                <a href='/' className='text-gray-300 hover:text-white transition-colors duration-300'>
                  Rates
                </a>
              </li>
              <li>
                <a href='/contact' className='text-gray-300 hover:text-white transition-colors duration-300'>
                  Loan Options
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Information */}
        <div>
        <h3 className='text-lg font-bold mb-4'>Contact Us</h3>
        <div className='space-y-4'>

            <div className='flex items-center gap-3'>
            <div className='bg-white/10 p-2 rounded-sm'>
                <MdPhone className='text-2xl' />
            </div>
            <div>
                <a href='tel:2404719005' className='text-gray-300 hover:text-white transition-colors'>
                (240) 471-9005
                </a>
            </div>
            </div>

            <div className='flex items-center gap-3'>
            <div className='bg-white/10 p-2 rounded-sm'>
                <MdEmail className='text-2xl' />
            </div>
            <div>
                <a href='mailto:verla@vzzbrokerage.com' className='text-gray-300 hover:text-white transition-colors break-all'>
                verla@vzzbrokerage.com
                </a>
            </div>
            </div>

            <div className='flex items-center gap-3'>
            <div className='bg-white/10 p-2 rounded-sm'>
                <MdLocationOn className='text-2xl' />
            </div>
            
            <div className='text-gray-300 text-sm'>
                <p>16701 Melford Blvd, Suite 400</p>
                <p>Bowie, Maryland, 20715</p>
            </div>
            </div>

            <div className='flex items-center gap-3'>
            <div className='bg-white/10 p-2 rounded-sm'>
                <MdSchedule className='text-2xl' />
            </div>
            
            <div className='text-gray-300 text-sm'>
                <p>Daily: 9am - 6pm EST</p>
            </div>
            </div>
        </div>
        </div>

    
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-white/10 py-6 px-5 md:px-10 lg:px-16'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400'>
          <p>© {new Date().getFullYear()} VZZ Brokerage. All rights reserved.</p>
          <div className='flex gap-6'>
            <a href='/privacy' className='hover:text-white transition-colors'>
              Privacy Policy
            </a>
            <a href='/terms' className='hover:text-white transition-colors'>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer