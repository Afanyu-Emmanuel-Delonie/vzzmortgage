import React, { useState } from 'react'
import { Filter, Tag } from 'lucide-react';
import { filters, tagStyles, loanOptions } from '../../../constants/constants';


function LoanOptions() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredLoans = activeFilter === 'all' 
    ? loanOptions 
    : loanOptions.filter(loan => loan.category === activeFilter);

  return (
    
    <div className='px-5 md:px-10 py-10 md:py-14 lg:py-20'>
      <div className='max-w-7xl mx-auto w-full'>
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#111111] mb-4'>
            Explore Your <span className='text-yellow-500'>Mortgage</span> Options
          </h2>
          <p className='text-base md:text-lg text-gray-600 max-w-2xl mx-auto'>
            Find the perfect loan that fits your financial situation and home ownership goals
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-600">Filter by type:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeFilter === filter.id
                    ? 'bg-[#102044] text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#102044] hover:text-[#102044]'
                }`}
              >
                {filter.label}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeFilter === filter.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Loan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredLoans.map((loan) => {
            return (
              <div 
                key={loan.id}
                className="group bg-[#F3F4F7] rounded-xl p-6 md:p-8 cursor-pointer transition-all duration-300 border border-gray-100 hover:border-[#EEF0F4] hover:bg-[#EEF0F4] flex flex-col h-full hover:-translate-y-1"
              >
                {/* Title */}
                <h3 className='text-xl md:text-2xl font-semibold text-[#111111] mb-3'>{loan.title}</h3>
                
                {/* Description */}
                <p className='text-gray-600 leading-relaxed mb-6 flex-grow text-sm md:text-base'>{loan.description}</p>

                {/* Benefits List */}
                <div className="space-y-2 mb-6">
                  {loan.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Tag at bottom */}
                <div className="flex justify-end items-start">
                  <div className={`flex gap-2 py-1.5 px-3 items-center rounded-full border ${tagStyles[loan.tagColor]}`}>
                    <Tag className='w-3.5 h-3.5'/>
                    <span className='text-xs font-medium'>{loan.tag}</span>
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredLoans.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No loans found in this category.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-600 mb-4 text-base md:text-lg">Not sure which loan is right for you?</p>
          <button className='px-6 py-3 md:px-7 md:py-3.5 w-full lg:w-auto text-white bg-[#102044] rounded-lg hover:bg-[#1a2f5f] transition-all duration-200 font-medium font-inter shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap'>
                Get My Loan Options
          </button>
        </div>

      </div>
    </div>
  )
}

export default LoanOptions