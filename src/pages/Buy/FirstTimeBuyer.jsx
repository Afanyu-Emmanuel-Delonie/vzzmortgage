import { Check, X } from "lucide-react";
import { useState } from "react";
import NewsLetters from "../../components/NewsLetters";
import StepsToApprovals from "../../components/StepsToApprovals";
import MortgageCalculator from "../../components/calculator/MortgageCalculator";
import CTASection from "../../components/contacts/FinalCTA";
import CompactRatesComparison from "../../components/rates/Rates";
import {
  firstTimeHomeBuyerSteps,
  loans,
  stepsToGettingApproved,
  tips,
} from "../../constants/constants";
import { HeroWidget } from "../../components/heroComponents/HeroWidget";

function FirstTimeBuyer() {
  const [selectedLoan, setSelectedLoan] = useState(null);

  const getColorClasses = (color, isSelected) => {
    const colors = {
      blue: {
        bg: isSelected ? "bg-blue-50" : "bg-white",
        border: isSelected ? "border-blue-500" : "border-gray-200",
        accent: "bg-blue-500",
        text: "text-blue-600",
        hover: "hover:border-blue-300",
      },
      yellow: {
        bg: isSelected ? "bg-yellow-50" : "bg-white",
        border: isSelected ? "border-yellow-500" : "border-gray-200",
        accent: "bg-yellow-500",
        text: "text-yellow-600",
        hover: "hover:border-yellow-300",
      },
      green: {
        bg: isSelected ? "bg-green-50" : "bg-white",
        border: isSelected ? "border-green-500" : "border-gray-200",
        accent: "bg-green-500",
        text: "text-green-600",
        hover: "hover:border-green-300",
      },
    };
    return colors[color];
  };

  return (
    <section>
      {/* this section covers the hero  */}
      <HeroWidget />

      <div className="px-5 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content Section */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#111111] mb-6 md:mb-8">
                First steps for first-time buyers
              </h2>

              <div className="space-y-6 md:space-y-7">
                {firstTimeHomeBuyerSteps.map((step, index) => {
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
                  Start Your Journey
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

      <div className="px-5 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#111111] mb-4">
              Helpful tips for first-time buyers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <a
                key={index}
                href={tip.link}
                className="group p-6 md:p-8 rounded-lg bg-[#F3F4F7] transition-all duration-200 hover:shadow-lg cursor-pointer"
              >
                <div className="flex justify-between mb-6">
                  {/* Tag */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-[#102044] bg-[#102044]/10 rounded-full">
                      {tip.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 text-[#102044]">{tip.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-[#111111] mb-3 group-hover:text-[#102044] transition-colors">
                  {tip.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                  {tip.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-[#102044] hover:text-yellow-500 font-semibold group-hover:gap-3 transition-all">
                  <span>{tip.cta}</span>
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
            ))}
          </div>
        </div>
      </div>

      {/* this section covers the steps  */}

      <StepsToApprovals
        title="Your path to the right loan"
        steps={stepsToGettingApproved}
        footerText="Ready to start your journey? Let's find the right loan for you."
        ctaText="Start Your Journey"
        onCtaClick={() => console.log("Start journey clicked")}
      />

      {/* this section covers the rates  */}
      <CompactRatesComparison />

      {/* this section will cover mortgage calculator  */}
      <MortgageCalculator />

      {/* this section will cover loan option comparisons  */}

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111111] text-center pb-3 sm:pb-5">
              Compare Loan Options
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the mortgage that fits your financial goals. Compare rates,
              monthly payments, and long-term costs.
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {loans.map((loan) => {
              const isSelected = selectedLoan === loan.id;
              const colorClasses = getColorClasses(loan.color, isSelected);
              const IconComponent = loan.Icon;

              return (
                <div
                  key={loan.id}
                  onClick={() => setSelectedLoan(isSelected ? null : loan.id)}
                  className={`relative ${colorClasses.bg} ${
                    colorClasses.border
                  } ${
                    colorClasses.hover
                  } border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                    isSelected ? "shadow-2xl scale-105" : "shadow-lg"
                  }`}
                >
                  {/* Popular Badge */}
                  {loan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`${colorClasses.accent} w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <IconComponent
                      className="w-7 h-7 text-white"
                      strokeWidth={2.5}
                    />
                  </div>

                  {/* Loan Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {loan.name}
                  </h3>

                  {/* Best For */}
                  <p
                    className={`text-sm font-semibold ${colorClasses.text} mb-6`}
                  >
                    {loan.bestFor}
                  </p>

                  {/* Rate Display */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">
                        Interest Rate
                      </span>
                      <span className="text-2xl font-bold text-gray-900">
                        {loan.rate}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">APR</span>
                      <span className="text-sm font-semibold text-gray-700">
                        {loan.apr}
                      </span>
                    </div>
                  </div>

                  {/* Monthly Payment */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-1">
                      Monthly Payment
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      ${loan.monthlyPayment.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Principal & Interest
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 my-6"></div>

                  {/* Total Interest */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-1">
                      Total Interest Paid
                    </p>
                    <p className="text-xl font-bold text-gray-900">
                      ${loan.totalInterest.toLocaleString()}
                    </p>
                  </div>

                  {/* Pros */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <Check
                        className="w-4 h-4 text-green-500"
                        strokeWidth={2.5}
                      />{" "}
                      Pros
                    </p>
                    <ul className="space-y-2">
                      {loan.pros.map((pro, index) => (
                        <li
                          key={index}
                          className="text-xs text-gray-600 flex items-start gap-2"
                        >
                          <Check
                            className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0"
                            strokeWidth={3}
                          />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500" strokeWidth={2.5} />{" "}
                      Cons
                    </p>
                    <ul className="space-y-2">
                      {loan.cons.map((con, index) => (
                        <li
                          key={index}
                          className="text-xs text-gray-600 flex items-start gap-2"
                        >
                          <X
                            className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0"
                            strokeWidth={3}
                          />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full ${colorClasses.accent} text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg`}
                  >
                    Get This Rate
                  </button>
                </div>
              );
            })}
          </div>

          {/* Comparison Table (Desktop) */}
          <div className="hidden lg:block bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Feature
                    </th>
                    {loans.map((loan) => (
                      <th
                        key={loan.id}
                        className="px-6 py-4 text-center text-sm font-semibold text-gray-900"
                      >
                        {loan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                      Interest Rate
                    </td>
                    {loans.map((loan) => (
                      <td
                        key={loan.id}
                        className="px-6 py-4 text-sm text-center font-semibold text-gray-900"
                      >
                        {loan.rate}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                      Monthly Payment
                    </td>
                    {loans.map((loan) => (
                      <td
                        key={loan.id}
                        className="px-6 py-4 text-sm text-center font-semibold text-gray-900"
                      >
                        ${loan.monthlyPayment.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                      Total Interest
                    </td>
                    {loans.map((loan) => (
                      <td
                        key={loan.id}
                        className="px-6 py-4 text-sm text-center font-semibold text-gray-900"
                      >
                        ${loan.totalInterest.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                      Loan Term
                    </td>
                    {loans.map((loan) => (
                      <td
                        key={loan.id}
                        className="px-6 py-4 text-sm text-center text-gray-900"
                      >
                        {loan.name.includes("15")
                          ? "15 years"
                          : loan.name.includes("30")
                          ? "30 years"
                          : "5 years fixed, then adjustable"}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Not sure which option is right for you?
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Talk to a Loan Expert
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-xs text-gray-500 mt-8 max-w-3xl mx-auto">
            *Rates shown are estimates based on a $360,000 loan amount with 20%
            down payment. Actual rates may vary based on credit score, location,
            and other factors. APR includes estimated closing costs.
          </p>
        </div>
      </section>

      {/* this section will cover the news letters  */}

      <div className="px-5 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#111111] mb-4">
              First-Time Buyer Insights & Resources
            </h2>
          </div>

          <NewsLetters />
        </div>
      </div>

      <CTASection
        title="Questions about buying your first home?"
        description="Buying your first home can feel overwhelming. VZZ is here to help answer your questions anytime clearly and simply."
        primaryButton={{
          text: "Get Guidance",
        }}
      />
    </section>
  );
}

export default FirstTimeBuyer;
