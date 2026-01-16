/* eslint-disable no-unused-vars */
import { useState } from 'react';

export const useRatesData = () => {
  const ratesDatabase = {
    '30-year fixed': { rate: 6.875, apr: 6.982, points: 1.0, pointsCost: 11000 },
    '30-year jumbo fixed': { rate: 5.625, apr: 5.782, points: 1.25, pointsCost: 13750 },
    '15-year fixed': { rate: 6.125, apr: 6.245, points: 0.75, pointsCost: 8250 },
    '15-year jumbo fixed': { rate: 5.375, apr: 5.512, points: 1.0, pointsCost: 11000 },
    '5/1 ARM': { rate: 6.500, apr: 6.891, points: 0.5, pointsCost: 5500 },
    '7/1 ARM': { rate: 6.625, apr: 6.912, points: 0.5, pointsCost: 5500 },
    'VA 30-year fixed': { rate: 5.990, apr: 6.397, points: 2.0, pointsCost: 7000 },
    'VA 15-year fixed': { rate: 5.750, apr: 6.102, points: 1.5, pointsCost: 5250 },
    'FHA 30-year fixed': { rate: 6.250, apr: 6.523, points: 1.0, pointsCost: 11000 },
    'FHA 15-year fixed': { rate: 5.875, apr: 6.134, points: 0.75, pointsCost: 8250 }
  };

  const loanTypes = [
    '30-year fixed',
    '30-year jumbo fixed',
    '15-year fixed',
    '15-year jumbo fixed',
    '5/1 ARM',
    '7/1 ARM',
    'VA 30-year fixed',
    'VA 15-year fixed',
    'FHA 30-year fixed',
    'FHA 15-year fixed'
  ];

  const calculateMonthlyPayment = (rate, loanAmount = 350000, years = 30) => {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;
    const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return Math.round(payment);
  };

  const lastUpdated = new Date().toLocaleString('en-US', { 
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZoneName: 'short'
  });

  return {
    ratesDatabase,
    loanTypes,
    calculateMonthlyPayment,
    lastUpdated
  };
};