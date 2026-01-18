import { Tag, Filter, ArrowRight } from "lucide-react";
import React from "react";
import LoanOptions from "./components/Loan-Options";
import NewsLetters from "../../components/general/NewsLetters";
import StepsToApprovals from "../../components/general/StepsToApprovals";
import CTASection from "../../components/contacts/FinalCTA";
import { stepsToGettingApproved } from "../../constants/constants";
import { HeroWidget } from "../../components/heroComponents/HeroWidget";

function Buyers() {
  return (
    <section>

       {/* this will cover the hero section  */}
            <HeroWidget
              backgroundImage="/assets/img/home_buying/buyer.png"
              flipImage={true}
              title="Home loans that help you reach your goals."
              description="Buying your first home or refinancing? VZZ Mortgage helps you find the right loan for your next step."
              primaryButtonText="Get Pre-Approved"
            />


      {/* CTA Section - load finding and application */}
      <div className="px-5 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-6 bg-[#EEF0F4] rounded-lg">
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#111111] leading-tight">
                Let's find the right loan
              </h2>
              <p className="text-base text-gray-600 leading-relaxed font-inter">
                Answer a few questions to get matched with the right mortgage.
              </p>
            </div>

            {/* call to action button  */}
            <button className="px-6 py-3 md:px-7 md:py-3.5 w-full lg:w-auto text-white bg-[#102044] rounded-lg hover:bg-[#1a2f5f] transition-all duration-200 font-medium font-inter shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap">
              Find My Loan
            </button>
          </div>
        </div>
      </div>

      {/* this section covers the loan options  */}
      <LoanOptions />

      {/* this section covers the steps to getting approved  */}
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

      {/* this section will cover the final CTA  */}
      <CTASection />
    </section>
  );
}

export default Buyers;
