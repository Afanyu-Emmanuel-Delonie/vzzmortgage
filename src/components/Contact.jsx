/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { MdCall, MdEmail, MdSchedule, MdLocationOn, MdCheckCircle, MdError, MdClose, MdWarning } from 'react-icons/md'
import { useContactForm } from '../hooks/useContactForm'

function Contact() {
  const {
    formData,
    notification,
    isSubmitting,
    handleChange,
    handleSubmit,
    closeNotification,
    setNotification
  } = useContactForm()

  return (
    <section className='py-16 px-5 md:px-10 lg:px-16 mb-15'>
      {/* Notification Toast */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg transition-all max-w-md ${
          notification.type === 'success' 
            ? 'bg-green-500 text-white' 
            : notification.type === 'warning'
            ? 'bg-yellow-500 text-white'
            : 'bg-red-500 text-white'
        }`}>
          {notification.type === 'success' ? (
            <MdCheckCircle className='text-2xl flex-shrink-0' />
          ) : notification.type === 'warning' ? (
            <MdWarning className='text-2xl flex-shrink-0' />
          ) : (
            <MdError className='text-2xl flex-shrink-0' />
          )}
          <span className='font-medium text-sm'>{notification.message}</span>
          <button 
            onClick={() => setNotification(null)}
            className='ml-2 hover:opacity-80 flex-shrink-0'
          >
            <MdClose className='text-xl' />
          </button>
        </div>
      )}

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
            <div className='space-y-4'>
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className='w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-200 disabled:bg-gray-100 disabled:cursor-not-allowed'
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
                  disabled={isSubmitting}
                  className='w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-200 disabled:bg-gray-100 disabled:cursor-not-allowed'
                  placeholder='Enter Your Email *'
                />
              </div>

              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className='w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-200 disabled:bg-gray-100 disabled:cursor-not-allowed'
                  placeholder='(123) 456-7890 *'
                />
              </div>

              <div>
                <select
                  id="enquiryType"
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className='w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-200 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed'
                >
                  <option value="">Select enquiry type *</option>
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
                  rows="5"
                  disabled={isSubmitting}
                  className='w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-200 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed'
                  placeholder='Tell us about your inquiry... *'
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className='bg-[#102044] text-white py-3 px-6 rounded-sm font-semibold hover:bg-[#1a2f5a] transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2'
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact