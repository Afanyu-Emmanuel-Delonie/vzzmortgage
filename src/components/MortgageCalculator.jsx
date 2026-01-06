import React from 'react'
import { useMortgageCalculator } from '../hooks/useMortgageCalculator'

function MortgageCalculator() {
  const {
    homePrice,
    setHomePrice,
    downPayment,
    setDownPayment,
    interestRate,
    setInterestRate,
    loanTerm,
    setLoanTerm,
    monthlyPayment,
    totalInterest,
    loading,
    error,
    downPaymentPercentage,
    loanAmount,
    propertyTax,
    homeInsurance,
    totalMonthlyCost
  } = useMortgageCalculator()

  return (
    <section className='py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-20'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#111111] text-center pb-3 sm:pb-5'>
          Understand Your <span className="text-yellow-400">Monthly</span> Cost
        </h2>
        <p className='text-sm sm:text-base text-center pb-6 sm:pb-10 px-2 text-gray-600'>
          Get an instant estimate of your monthly mortgage payment and see how different scenarios affect your budget.
        </p>

        <div className='grid md:grid-cols-2 gap-6 items-center sm:gap-8 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg'>
          {/* Calculator Inputs - Left Side */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-4 sm:mb-6">Loan Details</h3>
            
            <div className="space-y-5 sm:space-y-6">
              {/* Home Price */}
              <div>
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <label className="text-xs sm:text-sm font-semibold text-gray-700">Home Price</label>
                  <span className="text-base sm:text-lg font-bold text-[#102044]">${homePrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="2000000"
                  step="10000"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$50K</span>
                  <span>$2M</span>
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <label className="text-xs sm:text-sm font-semibold text-gray-700">Down Payment</label>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-base sm:text-lg font-bold text-[#102044]">${downPayment.toLocaleString()}</span>
                    <span className="text-xs sm:text-sm text-yellow-600 font-semibold">({downPaymentPercentage}%)</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max={homePrice * 0.5}
                  step="5000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$0</span>
                  <span>${(homePrice * 0.5).toLocaleString()}</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <label className="text-xs sm:text-sm font-semibold text-gray-700">Interest Rate</label>
                  <span className="text-base sm:text-lg font-bold text-[#102044]">{interestRate.toFixed(2)}%</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="12"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>2%</span>
                  <span>12%</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <label className="text-xs sm:text-sm font-semibold text-gray-700">Loan Term</label>
                  <span className="text-base sm:text-lg font-bold text-[#102044]">{loanTerm} years</span>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  {[15, 20, 30].map((term) => (
                    <button
                      key={term}
                      onClick={() => setLoanTerm(term)}
                      className={`flex-1 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 ${
                        loanTerm === term
                          ? 'bg-yellow-400 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {term} yrs
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results - Right Side */}
          <div className="space-y-4 sm:space-y-6 bg-[#102044] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg text-white">
            {/* Monthly Payment Card */}
            <div>
              <p className="text-xs sm:text-sm text-gray-300 mb-1">Estimated Monthly Payment</p>
              {loading ? (
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-yellow-400"></div>
                  <span className="text-lg sm:text-xl text-gray-300">Calculating...</span>
                </div>
              ) : (
                <h3 className="text-3xl sm:text-4xl font-bold mb-2">
                  ${monthlyPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </h3>
              )}
              {error && (
                <p className="text-yellow-400 text-xs mb-4">{error}</p>
              )}
              <div className="flex items-center gap-2 text-yellow-400">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-xs sm:text-sm font-semibold">Principal & Interest only</span>
              </div>
            </div>

            {/* Breakdown Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
                <p className="text-xs sm:text-sm text-gray-200 mb-1 sm:mb-2">Loan Amount</p>
                <p className="text-lg sm:text-2xl font-bold break-words">
                  ${loanAmount.toLocaleString()}
                </p>
              </div>
              <div className="bg-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
                <p className="text-xs sm:text-sm text-gray-200 mb-1 sm:mb-2">Total Interest</p>
                <p className="text-lg sm:text-2xl font-bold break-words">
                  ${totalInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </p>
              </div>
            </div>

            {/* Payment Breakdown */}
            <div className="bg-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg">
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Payment Breakdown</h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-gray-200 text-xs sm:text-sm">Principal & Interest</span>
                  <span className="font-bold text-sm sm:text-base">${monthlyPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between items-center text-gray-200 gap-2">
                  <span className="text-xs sm:text-sm">Property Tax (est.)</span>
                  <span className="text-xs sm:text-sm">+${propertyTax.toLocaleString('en-US', { maximumFractionDigits: 0 })}/mo</span>
                </div>
                <div className="flex justify-between items-center text-gray-200 gap-2">
                  <span className="text-xs sm:text-sm">Home Insurance (est.)</span>
                  <span className="text-xs sm:text-sm">+${homeInsurance.toLocaleString('en-US', { maximumFractionDigits: 0 })}/mo</span>
                </div>
                <div className="border-t border-gray-200 pt-2 sm:pt-3 mt-2 sm:mt-3">
                  <div className="flex justify-between items-center gap-2">
                    <span className="font-semibold text-xs sm:text-sm">Total Monthly Cost (est.)</span>
                    <span className="font-bold text-lg sm:text-xl text-yellow-400">
                      ${totalMonthlyCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MortgageCalculator