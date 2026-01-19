import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/general/Navbar";
import Footer from "./components/general/Footer";
import ChatWidget from "./components/contacts/ChatBot";
import Home from "./pages/Home/home";
import Buyers from "./pages/Buy/Buyers";
import NotFound from "./pages/NotFound";
import FirstTimeBuyer from "./pages/Buy/FirstTimeBuyer";
import VALoanOptions from "./pages/Buy/VA-Loan-Options";
import CashOutRefinance from "./pages/Buy/CashOutRefinance";
import { ChatProvider } from "./components/general/ChatContext";
import Contact from "./components/contacts/Contact";

function App() {
  return (
    <ChatProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buyers" element={<Buyers />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/first-time-buyer" element={<FirstTimeBuyer />} />
        <Route path="/VA-Loan-Options" element={<VALoanOptions />} />
        <Route path="/cash-out" element={<CashOutRefinance />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ChatWidget />
    </ChatProvider>
  );
}

export default App;
