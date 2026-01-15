import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatWidget from './components/ChatBot'
import Home from './pages/Home/Home'
import Buyers from './pages/Buy/Buyers'
import NotFound from './pages/NotFound' 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buyers' element={<Buyers />} />
        
        {/* The 404 Catch-all Route */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ChatWidget />
    </>
  )
}

export default App