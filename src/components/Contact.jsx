import React, { useState } from 'react'
import { MdCall, MdEmail, MdSchedule, MdLocationOn } from 'react-icons/md'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section className='py-16 px-5 md:px-10 lg:px-16 mb-15'>
      <div className="container mx-auto px-4">
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#111111] text-center mb-6 sm:pb-5'>
          Get In Touch With Us
        </h2>

        <div className="flex gap-6 flex-col lg:flex-row items-stretch">
          
        <div className='w-full lg:w-1/2 rounded-sm bg-gradient-to-br from-[#102044] to-[#1a2f5a] p-8 text-white'>
            <h3 className='text-2xl font-bold mb-6'>Contact Information</h3>
            <p className='mb-8 text-gray-200'>
              We're here to help! Reach out to us through any of the following channels and we'll get back to you as soon as possible.
            </p>

            <div className='space-y-6'>
              {/* Phone */}
              <div className='flex items-start gap-4'>
                <div className='bg-white/10 p-3 rounded-lg'>
                  <MdCall className='text-2xl' />
                </div>
                <div>
                  <h4 className='font-semibold text-lg mb-1'>Phone</h4>
                  <p className='text-gray-200'>(240) 471-9005</p>
                </div>
              </div>

              {/* Email */}
              <div className='flex items-start gap-4'>
                <div className='bg-white/10 p-3 rounded-lg'>
                  <MdEmail className='text-2xl' />
                </div>
                <div>
                  <h4 className='font-semibold text-lg mb-1'>Email</h4>
                  <p className='text-gray-200'>verla@vzzbrokerage.com</p>
                </div>
              </div>

              {/* Location */}
              <div className='flex items-start gap-4'>
                <div className='bg-white/10 p-3 rounded-lg'>
                  <MdLocationOn className='text-2xl' />
                </div>
                <div>
                  <h4 className='font-semibold text-lg mb-1'>Location</h4>
                  <p className='text-gray-200'>Bowie 16701 Melford Blvd, Suite 400, Bowie, Maryland, 20715</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className='flex items-start gap-4'>
                <div className='bg-white/10 p-3 rounded-lg'>
                  <MdSchedule className='text-2xl' />
                </div>
                <div>
                  <h4 className='font-semibold text-lg mb-1'>Business Hours</h4>
                  <p className='text-gray-200'>Daily 9am - 6pm EST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className=' shadow-md rounded-md p-6 w-full lg:w-1/2 rounded-sm'>
            <h3 className='text-2xl font-bold text-[#102044] mb-6'>Send Us a Message</h3>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-200'
                  placeholder='Your full name *'
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-200'
                  placeholder='Enter Your Email'
                />
              </div>

              <div>
                
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-200'
                  placeholder='(123) 456-7890'
                />
              </div>

              <div>
               
                <select
                  id="enquiryType"
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-200 bg-white'
                >
                  <option value="">Select enquiry type</option>
                  <option value="Buying A Home">Buying A Home</option>
                  <option value="Refinancing">Refinancing</option>
                  <option value="Equity">Equity</option>
                  <option value="Joining Team">Joining Team</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className='w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-200 resize-none'
                  placeholder='Tell us about your inquiry...'
                ></textarea>
              </div>

              <button
                type="submit"
                className=' bg-[#102044] text-white py-3 px-6 rounded-sm font-semibold hover:bg-[#1a2f5a] transition-colors duration-300'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact