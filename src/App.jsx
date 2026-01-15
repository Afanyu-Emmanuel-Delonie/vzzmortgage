import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatWidget from './components/ChatBot'
import Home from './pages/Home/home'
import HomeLoan from './pages/Buy/Home-Loans'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buy' element={<HomeLoan />} />
      </Routes>
      <Footer />
      <ChatWidget />
    </>
  )
}

export default App