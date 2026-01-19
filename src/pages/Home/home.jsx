/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { customerAvatars } from "../../constants/constants";
import MortgageCalculator from "../../components/calculator/MortgageCalculator";
import Contact from "../../components/contacts/Contact";
import { paths, FirstTimeHomeList } from "../../constants/constants";
import NewsLetters from "../../components/general/NewsLetters";
import CTASection from "../../components/contacts/FinalCTA";
import StepsToApprovals from "../../components/general/StepsToApprovals";
import {
  stepsToGettingApproved,
  MilitaryFocusedCTA,
} from "../../constants/constants";
import TestimonialSection from "../../components/general/Testimonials";
import { href, useNavigate } from "react-router-dom";

function Home() {
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="overflow-hidden">
      {/* this is the hero section  */}
      <div className="min-h-[600px] sm:min-h-[650px] md:min-h-[700px] lg:min-h-[750px] xl:min-h-[65vh] flex items-center px-5 md:px-10 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col space-y-8 max-w-2xl">
              {/* Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#111111] leading-tight">
                Get Pre-Approved Before You{" "}
                <span className="text-yellow-400">Search</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-inter">
                The speed of digital mortgages, with experts who explain
                everything.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                onClick={() => navigate('/Buyers')}
                className="px-4 py-2 md:px-6 md:py-3 text-white bg-[#102044] rounded-lg hover:bg-[#1a2f5f] transition-all duration-200 font-medium font-inter shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Buy a Home
                </button>

                <button 
                onClick={() => navigate('/cash-out')}
                className="px-4 py-2 md:px-6 md:py-3 text-gray-700 bg-gray-200 rounded-lg hover:bg-yellow-400 hover:border-yellow-400 hover:text-white hover:font-medium border-2 border-transparent">
                  Refinancing
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  {customerAvatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt={`Happy customer ${index + 1}`}
                      className={`w-12 h-12 rounded-full border-2 border-white object-cover shadow-md ${
                        index === 3 ? "hidden sm:block" : ""
                      }`}
                    />
                  ))}
                  <div className="w-12 h-12 min-w-[3rem] rounded-full border-3 border-white bg-[#102044] flex items-center justify-center text-white text-sm font-semibold shadow-md">
                    +2K
                  </div>
                </div>

                {/* Caption */}
                <div className="flex flex-col">
                  <p className="text-sm text-gray-700 font-medium font-inter">
                    Join{" "}
                    <span className="font-bold text-yellow-500">2,000+</span>{" "}
                    happy home buyers
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/img/hero.png"
                  alt="Happy family in their new home"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient for better image blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 left-4 lg:-left-6 bg-white rounded-xl shadow-xl p-6 max-w-[200px] border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#111] font-inter">
                      98%
                    </p>
                    <p className="text-sm text-gray-600 font-inter">
                      Approval Rate
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative blob */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#102044] opacity-5 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 md:py-14 lg:py-20 px-5 md:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-[#111111] text-center pb-8 md:pb-12 text-2xl md:text-3xl lg:text-4xl font-semibold">
            Choose Your Path To Closing
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paths.map((path) => (
              <div
                key={path.id}
                onClick={() => navigate(path.href)}
                onMouseEnter={() => setHoveredId(path.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden border border-gray-100"
                style={{
                  transform:
                    hoveredId === path.id
                      ? "translateY(-8px) scale(1.02)"
                      : "translateY(0) scale(1)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex items-center">
                  <div>
                    <div className="w-16 h-16 flex items-center justify-center text-[#102044]/30 transition-all duration-500 group-hover:rotate-6">
                      {path.icon}
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-[#102044] group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300">
                      {path.badge}
                    </span>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-md font-medium text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                    {path.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              Not sure which path is right for you?{" "}
              <a
                href="#"
                className="text-yellow-500 hover:text-yellow-600 font-semibold"
              >
                Talk to an expert
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* first time home buyers  */}
      <div className="py-16 px-5 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/assets/img/home_buying/homebuyer.png"
              alt="Happy family in their new home"
              className="w-full h-auto object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
          </div>

          {/* Content for first time home buyers Section */}
          <div className="flex flex-col w-full md:w-1/2">
            <h2 className="font-bold text-[#111111] mb-4 text-2xl md:text-3xl lg:text-4xl">
              Your First Home Starts With Confidence.
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-inter">
              We make your first home purchase simple, clear, and stress-free
              from start to keys in hand.
            </p>

            <ul className="mb-8 space-y-4">
              {FirstTimeHomeList.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-[#111111] font-inter">
                      {item.title}
                    </span>
                    <span className="text-gray-600 font-inter">
                      {" "}
                      {item.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <button className="px-6 py-3 w-full md:w-1/3 text-white bg-[#102044] rounded-lg hover:bg-[#1a2f5f] transition-all duration-200 font-medium font-inter shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Start Journey
            </button>
          </div>
        </div>
      </div>

      <StepsToApprovals steps={stepsToGettingApproved} />

      {/* this section will cover the news letters  */}
      <div className="px-5 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#111111] mb-4">
              Mortgage insights & resources
            </h2>
          </div>

          <NewsLetters />
        </div>
      </div>

      {/* trust builder section  */}
      <div className="py-16 md:py-20 lg:py-24 px-5 md:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#F8F9FA] py-12 md:py-16 px-6 md:px-12 rounded-xl">
            {/* Header Section */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#111111] mb-4">
                Secure the Lowest Refinance Mortgage Rate
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-2">
                Stuck with a High Rate? We Got You.
              </p>
            </div>

            {/* Benefits Cards Grid */}
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <h3 className="text-xl font-semibold text-[#111111] mb-3 md:mb-4 text-center">
                  Rate Drop Alerts
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center">
                  Get notified instantly when rates hit your target. We monitor
                  the market so you don't have to.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <h3 className="text-xl font-semibold text-[#111111] mb-3 md:mb-4 text-center">
                  Zero Spam Promise
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center">
                  No pushy sales calls. No endless emails. Just timely updates
                  when it matters most to your wallet.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <h3 className="text-xl font-semibold text-[#111111] mb-3 md:mb-4 text-center">
                  Save Thousands
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center">
                  Lower rates mean lower monthly payments. Even a small drop can
                  add up to major savings over time.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button className="px-6 md:px-8 py-3 md:py-4 bg-[#102044] text-white rounded-lg hover:bg-[#1a2f5f] transition-all duration-200 font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Rate Alerts
              </button>
            </div>
          </div>
        </div>
      </div>

      <TestimonialSection />

      {/* this section will cover the final CTA  */}
      <CTASection />
    </section>
  );
}

export default Home;