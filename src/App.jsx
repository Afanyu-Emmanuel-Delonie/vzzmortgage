import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PathToClosing from './components/PathToClosing'
import FirstHomeBuyers from './components/FirstHomeBuyers'
import MortgageCalculator from './components/MortgageCalculator'
import RatesCTA from './components/RatesCTA'
import TrustBuilder from './components/TrustBuilder'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatWidget from './components/ChatBot'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PathToClosing />
      <FirstHomeBuyers />
      <MortgageCalculator />
      <RatesCTA />
      <TrustBuilder />
      <Contact />
      <Footer />
      <ChatWidget />
    </>
  )
}

export default App