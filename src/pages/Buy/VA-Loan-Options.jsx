import React from "react";
import { HeroWidget } from "../../components/heroComponents/HeroWidget";
import {
  MilitaryFocusedCTA,
  vaCards,
  vaLoanFaqs,
  vaLoanSteps,
  VASteps,
} from "../../constants/constants";
import CompactRatesComparison from "../../components/rates/Rates";
import StepsToApprovals from "../../components/general/StepsToApprovals";
import FAQSection from "../../components/contacts/faq";
import CTASection from "../../components/contacts/FinalCTA";
import NewsLetters from "../../components/general/NewsLetters";

function VALoanOptions() {
  return (
    <section>
      {/* this will cover the hero section  */}
      <HeroWidget
        backgroundImage="/assets/img/home_buying/va-hero.png"
        flipImage={true}
        title="Home ownership benefits you’ve earned"
        description="VZZ Mortgage helps eligible service members and veterans use their VA loan benefits with $0 down options and clear guidance from start to finish."
        primaryButtonText="Check Your Eligibility"
      />

      {/* trust builder section  */}
      <div className="px-5 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#111111] mb-4">
              Get started with your VA loan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vaCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <a
                  key={index}
                  href={card.link}
                  className="group p-6 md:p-8 rounded-lg bg-[#F3F4F7] transition-all duration-200 hover:shadow-lg cursor-pointer"
                >
                  <div className="flex justify-between mb-6">
                    {/* Icon */}
                    <div className="mb-4 text-[#102044]">
                      <Icon
                        className="w-10 h-10 md:w-10 md:h-10"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-[#111111] mb-3 group-hover:text-[#102044] transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                    {card.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-[#102044] hover:text-yellow-500 font-semibold group-hover:gap-3 transition-all">
                    <span>{card.cta}</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-5 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20 ">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content Section */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#111111] mb-6 md:mb-8">
                Your Path to Home ownership with VA Benefits
              </h2>

              <div className="space-y-6 md:space-y-7">
                {VASteps.map((step, index) => {
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
                  Check My VA Eligibility
                </button>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="/assets/img/home_buying/va-home.png"
                  alt="Military family in front of their new home"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* this section covers the rates  */}
      <CompactRatesComparison
        title="Explore VA Loan Rates"
        description="Compare VA loan rates and find the best option for your home purchase. As a veteran, you may qualify for special benefits including lower rates and no down payment requirements."
        loanTypeFilter="va"
        ctaText="Check My VA Eligibility"
        loanAmount={350000}
        onCTAClick={() => {
          // Navigate to VA eligibility page
          console.log("Navigating to VA eligibility...");
        }}
        onLegalClick={() => {
          // Show legal disclosures modal
          console.log("Opening legal disclosures...");
        }}
      />

      <div className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto bg-[#F8F9FA] py-15 px-12 rounded-xl">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#111111] mb-4">
              You Served. You Earned This.
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Your commitment to our country deserves our commitment to your
              home ownership journey.
            </p>
          </div>

          {/* Benefits Cards Grid */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-4 mb-10 md:mb-12">
            {MilitaryFocusedCTA.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-xm  transition-shadow duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-[#111111] mb-3 md:mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="px-6 md:px-8 py-3 md:py-4 bg-[#102044] text-white rounded-lg hover:bg-[#1a2f5f] transition-all duration-200 font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Talk VA Expert
            </button>
          </div>
        </div>
      </div>

      <StepsToApprovals
      title="Your path to VA homeownership"
      subtitle="Navigate the VA loan process with confidence and expert guidance every step of the way."
      steps={vaLoanSteps}
      footerText="Ready to use your VA benefits? Our specialists are here to help."
      ctaText="Talk to a VA Specialist"
    />

     <FAQSection
      title="VA Loan Questions Answered"
      subtitle="Everything you need to know about VA home loans and benefits"
      faqs={vaLoanFaqs}
      ctaText="Still have questions about VA loans?"
      ctaButtonText="Talk to a VA Specialist"
      onCtaClick={() => console.log('Contact VA specialist')}
    />

    <div className="px-5 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#111111] mb-4">
              Helpful VA Loan Resources
            </h2>
          </div>

          <NewsLetters />
        </div>
      </div>

      <CTASection
        title="We’re proud to support those who serve"
        description="Whether you’re relocating or ready to settle into your next home, VZZ’s VA loan specialists are here to guide you every step of the way."
        image="/assets/img/home_buying/va-cta.png"
        primaryButton={{
          text: "Get VA Guidance",
          action: "contact",
        }}
      />
    </section>
  );
}

export default VALoanOptions;
