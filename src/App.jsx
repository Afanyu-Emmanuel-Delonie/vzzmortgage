import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWidget from "./components/contacts/ChatBot";
import Home from "./pages/Home/home";
import Buyers from "./pages/Buy/Buyers";
import NotFound from "./pages/NotFound";
import FirstTimeBuyer from "./pages/Buy/FirstTimeBuyer";
import VALoanOptions from "./pages/Buy/VA-Loan-Options";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buyers" element={<Buyers />} />
        <Route path="/first-time-buyer" element={<FirstTimeBuyer />} />
        <Route path="/VA-Loan-Options" element={<VALoanOptions />} />

        {/* The 404 Catch-all Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ChatWidget />
    </>
  );
}

export default App;
