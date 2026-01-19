import React, { useState } from "react";
import { HeroWidget } from "../../components/heroComponents/HeroWidget";
import {
  cashOutRefinanceFaqs,
  cashOutRefinanceSteps,
  cashOutRefinanceTrustPoints,
  refinancing_paths,
} from "../../constants/constants";
import NewsLetters from "../../components/general/NewsLetters";
import StepsToApprovals from "../../components/general/StepsToApprovals";
import FAQSection from "../../components/contacts/faq";
import CTASection from "../../components/contacts/FinalCTA";

function CashOutRefinance() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section>
      {/* this will cover the hero section  */}
      <HeroWidget
        backgroundImage="/assets/img/home_buying/home_equity.png"
        flipImage={true}
        title="Turn Your Home Equity Into Cash"
        description="Access cash from your home’s equity to pay off debt, fund renovations, or cover major expenses, all with one mortgage payment."
        primaryButtonText="Check My Cash-Out Options"
      />

      {/* this is a quick action section  */}
      <div className="py-10 md:py-14 lg:py-20 px-5 md:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-[#111111] text-center pb-8 md:pb-12 text-2xl md:text-3xl lg:text-4xl font-semibold">
            Start Your Refinance Journey
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {refinancing_paths.map((path) => (
              <div
                key={path.id}
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
                    <div className="w-8 h-8 flex items-center justify-center mb-4 text-[#102044]/30 transition-all duration-500 group-hover:rotate-0">
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
                href="/contact"
                className="text-yellow-500 hover:text-yellow-600 font-semibold underline-offset-2 hover:underline"
              >
                Talk to an expert
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* trust builder  */}
      <div className="px-5 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content Section */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#111111] mb-6 md:mb-8">
                Refinance with Confidence
              </h2>

              <div className="space-y-6 md:space-y-7">
                {cashOutRefinanceTrustPoints.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex gap-4 md:gap-6">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 mt-0.5">
                        <div className="w-full h-full bg-yellow-100 rounded-full flex items-center justify-center">
                          <Icon
                            className="w-5 h-5 md:w-6 md:h-6 text-yellow-600"
                            strokeWidth={2}
                          />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-semibold text-[#111111] mb-2">
                          {step.title}
                        </h4>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="mt-8 md:mt-10">
                <button className="px-6 md:px-8 py-3 md:py-4 bg-[#102044] text-white rounded-lg hover:bg-[#1a2f5f] transition-all duration-200 font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Explore My Options
                </button>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="/assets/img/home_buying/firstHomeBuyer1.png"
                  alt="Happy family in their new home"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* educational content section  */}
      <div className="py-16 md:py-20 lg:py-24 px-5 md:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#F8F9FA] py-12 md:py-16 lg:py-20 px-6 md:px-10 lg:px-12 rounded-2xl">
            {/* Header Section */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#111111] mb-4">
                Learn About Cash-Out Refinancing
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Clear, easy-to-understand guides to help you decide if cash-out
                refinancing is the right move for you.
              </p>
            </div>

            {/* Newsletter Cards */}
            <NewsLetters />
          </div>
        </div>
      </div>

      {/* steps that are to be taken  */}
      <StepsToApprovals
        title="Your path to cash-out refinancing"
        subtitle="Understand the process and move forward with confidence, guided by experts at every step."
        steps={cashOutRefinanceSteps}
        footerText="Not sure if cash-out refinancing is right for you? We’re here to help."
        ctaText="Talk to a Loan Expert"
      />

      <FAQSection
        title="Cash-Out Refinance FAQs"
        subtitle="Everything you need to know about cash-out refinancing"
        faqs={cashOutRefinanceFaqs}
        ctaText="Still have questions about cash-out refinancing?"
        ctaButtonText="Talk to a Loan Expert"
        onCtaClick={() => console.log("Contact loan expert")}
      />

      <CTASection
        title="Guidance You Can Trust"
        description="Whether you’re exploring your options or ready to take the next step, VZZ’s loan specialists are here to guide you through cash-out refinancing every step of the way."
        image="/assets/img/home_buying/home_equity.png"
        primaryButton={{
          text: "Talk to a Loan Expert",
        }}
      />
    </section>
  );
}

export default CashOutRefinance;
