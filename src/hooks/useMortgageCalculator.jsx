import React, {useState, useEffect} from 'react'


export function useMortgageCalculator(initialValues = {}) {
  const [homePrice, setHomePrice] = useState(initialValues.homePrice || 300000)
  const [downPayment, setDownPayment] = useState(initialValues.downPayment || 60000)
  const [interestRate, setInterestRate] = useState(initialValues.interestRate || 6.5)
  const [loanTerm, setLoanTerm] = useState(initialValues.loanTerm || 30)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    calculateMortgage()
  }, [homePrice, downPayment, interestRate, loanTerm])

  const calculateMortgage = async () => {
    const loanAmount = homePrice - downPayment
    
    if (loanAmount <= 0) {
      setMonthlyPayment(0)
      setTotalInterest(0)
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/mortgagecalculator?loan_amount=${loanAmount}&interest_rate=${interestRate}&duration_years=${loanTerm}`,
        {
          method: 'GET',
          headers: {
            'X-Api-Key': 'rfm8XApTZ5t9ZttAki8jPg==uR53WXfILZeBhRay',
            'Content-Type': 'application/json'
          }
        }
      )

      if (!response.ok) {
        throw new Error('Failed to calculate mortgage')
      }

      const data = await response.json()
      
      setMonthlyPayment(data.monthly_payment?.total || 0)
      setTotalInterest(data.total_interest_paid || 0)
    } catch (err) {
      console.error('Error calculating mortgage:', err)
      setError('Unable to calculate. Please try again.')
      
      // Fallback to local calculation
      const principal = loanAmount
      const monthlyRate = interestRate / 100 / 12
      const numberOfPayments = loanTerm * 12

      if (monthlyRate === 0) {
        setMonthlyPayment(principal / numberOfPayments)
        setTotalInterest(0)
      } else {
        const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                       (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
        setMonthlyPayment(payment)
        setTotalInterest((payment * numberOfPayments) - principal)
      }
    } finally {
      setLoading(false)
    }
  }

  const downPaymentPercentage = ((downPayment / homePrice) * 100).toFixed(1)
  const loanAmount = homePrice - downPayment
  const propertyTax = (homePrice * 0.012) / 12
  const homeInsurance = (homePrice * 0.003) / 12
  const totalMonthlyCost = monthlyPayment + propertyTax + homeInsurance

  return {
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
  }
}