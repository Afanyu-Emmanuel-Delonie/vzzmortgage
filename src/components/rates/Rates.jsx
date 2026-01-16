import React, { useState } from "react";
import { ChevronDown, Info } from "lucide-react";
import { useRatesData } from "../../hooks/useRates";

const InfoTooltip = ({ text }) => (
  <div className="group relative inline-block">
    <Info className="w-4 h-4 text-gray-400 cursor-help" />
    <div className="invisible group-hover:visible absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-gray-900 text-white text-xs rounded-lg py-2 px-3 z-10">
      {text}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
        <div className="border-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  </div>
);

const RateCard = ({
  loanType,
  data,
  onLoanTypeChange,
  loanTypes,
  loanAmount,
  disabledTypes = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { calculateMonthlyPayment } = useRatesData();

  const years = loanType.includes("15") ? 15 : 30;
  const monthlyPayment = data
    ? calculateMonthlyPayment(data.rate, loanAmount, years)
    : 0;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
      <div className="relative mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
        >
          <span className="text-lg font-semibold text-gray-900">
            {loanType}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-gray-600 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 max-h-64 overflow-y-auto z-20">
            {loanTypes.map((type) => {
              const isDisabled = disabledTypes.includes(type);
              const isCurrent = type === loanType;

              return (
                <button
                  key={type}
                  onClick={() => {
                    if (!isDisabled) {
                      onLoanTypeChange(type);
                      setIsOpen(false);
                    }
                  }}
                  disabled={isDisabled && !isCurrent}
                  className={`w-full text-left px-4 py-3 transition-colors ${
                    isCurrent
                      ? "bg-blue-50 text-blue-700 font-semibold"
                      : isDisabled
                      ? "text-gray-400 bg-gray-50 cursor-not-allowed opacity-50"
                      : "text-gray-700 hover:bg-gray-50 cursor-pointer"
                  }`}
                >
                  {type}
                  {isDisabled && !isCurrent && (
                    <span className="ml-2 text-xs">(Already selected)</span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {data && (
        <>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-xs text-gray-600 font-medium">Rate</span>
                <InfoTooltip text="The interest rate is the cost of borrowing the principal loan amount" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{data.rate}%</p>
            </div>

            <div>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-xs text-gray-600 font-medium">APR</span>
                <InfoTooltip text="Annual Percentage Rate includes interest rate plus other costs" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{data.apr}%</p>
            </div>

            <div>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-xs text-gray-600 font-medium">
                  Points
                </span>
                <InfoTooltip text="Discount points are prepaid interest to lower your rate" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {data.points}{" "}
                <span className="text-sm text-gray-600">
                  (${data.pointsCost.toLocaleString()})
                </span>
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 mt-4">
            <p className="text-xs text-gray-600 mb-1">
              Estimated Monthly Payment
            </p>
            <p className="text-3xl font-bold text-gray-900">
              ${monthlyPayment.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Principal & Interest only
            </p>
          </div>
        </>
      )}
    </div>
  );
};

const CompactRatesComparison = ({
  // Customizable text props
  title = "Explore today's Mortgage rates",
  description,
  ctaText = "Explore More Rates",
  legalDisclosuresText = "View legal disclosures",
  
  // Loan type filtering
  loanTypeFilter = "all", // Options: "all", "va", "fha", "conventional", "jumbo", or array of specific types
  
  // Default selected loans
  defaultSelectedLoans,
  
  // Loan amount configuration
  loanAmount = 350000,
  jumboMultiplier = 1.1,
  
  // Callbacks
  onCTAClick,
  onLegalClick,
}) => {
  const { ratesDatabase, loanTypes: allLoanTypes, lastUpdated } = useRatesData();

  // Filter loan types based on the filter prop
  const getFilteredLoanTypes = () => {
    if (Array.isArray(loanTypeFilter)) {
      return loanTypeFilter;
    }

    switch (loanTypeFilter) {
      case "va":
        return allLoanTypes.filter((type) => type.toLowerCase().includes("va"));
      case "fha":
        return allLoanTypes.filter((type) => type.toLowerCase().includes("fha"));
      case "conventional":
        return allLoanTypes.filter(
          (type) =>
            !type.toLowerCase().includes("va") &&
            !type.toLowerCase().includes("fha")
        );
      case "jumbo":
        return allLoanTypes.filter((type) => type.toLowerCase().includes("jumbo"));
      case "all":
      default:
        return allLoanTypes;
    }
  };

  const filteredLoanTypes = getFilteredLoanTypes();

  // Set default selected loans based on filter
  const getDefaultSelectedLoans = () => {
    if (defaultSelectedLoans) {
      return defaultSelectedLoans;
    }

    // Auto-select based on filter
    if (loanTypeFilter === "va") {
      return ["VA 30-year fixed", "VA 15-year fixed"].filter((type) =>
        filteredLoanTypes.includes(type)
      );
    } else if (loanTypeFilter === "fha") {
      return ["FHA 30-year fixed", "FHA 15-year fixed"].filter((type) =>
        filteredLoanTypes.includes(type)
      );
    } else {
      return [
        filteredLoanTypes[0],
        filteredLoanTypes[1] || filteredLoanTypes[0],
      ].filter(Boolean);
    }
  };

  const [selectedLoans, setSelectedLoans] = useState(getDefaultSelectedLoans());

  const handleLoanTypeChange = (index, newType) => {
    const updated = [...selectedLoans];
    updated[index] = newType;
    setSelectedLoans(updated);
  };

  // Generate description if not provided
  const getDescription = () => {
    if (description) return description;

    return `Monthly payment examples below are for a loan amount of $${loanAmount.toLocaleString()}${
      filteredLoanTypes.some((type) => type.includes("jumbo"))
        ? ` ($${(loanAmount * jumboMultiplier).toLocaleString()} on Jumbo)`
        : ""
    }. Taxes and insurance not included within the estimate; actual payment amount will be greater.`;
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111111] text-center pb-3 sm:pb-5">
            {title}
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            {getDescription()}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {selectedLoans.map((loanType, index) => {
            const otherSelectedTypes = selectedLoans.filter(
              (_, i) => i !== index
            );

            return (
              <RateCard
                key={index}
                loanType={loanType}
                data={ratesDatabase[loanType]}
                onLoanTypeChange={(newType) =>
                  handleLoanTypeChange(index, newType)
                }
                loanTypes={filteredLoanTypes}
                loanAmount={
                  loanType.includes("jumbo")
                    ? loanAmount * jumboMultiplier
                    : loanAmount
                }
                disabledTypes={otherSelectedTypes}
              />
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <p className="text-xs text-gray-500">
            Rates are current as of {lastUpdated}
          </p>
          <button
            onClick={onLegalClick}
            className="text-sm text-gray-700 underline hover:text-gray-900 transition-colors"
          >
            {legalDisclosuresText}
          </button>
        </div>

        <div className="text-center">
          <button
            onClick={onCTAClick}
            className="px-8 py-4 text-white bg-[#102044] rounded-lg hover:bg-[#1a2f5f] transition-all duration-200 font-semibold text-base md:text-lg font-inter shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompactRatesComparison;