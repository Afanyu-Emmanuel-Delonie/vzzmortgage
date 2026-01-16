import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left hover:text-[#102044] transition-colors group"
      >
        <span className="text-base md:text-lg font-semibold text-[#111111] group-hover:text-[#102044] pr-8">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 md:w-6 md:h-6 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mb-5 md:mb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = ({
  // Header customization
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services",
  
  // FAQ data
  faqs = [],
  
  // Layout options
  columns = 1, // 1 or 2 column layout
  
  // CTA customization
  showCta = true,
  ctaText = "Still have questions?",
  ctaButtonText = "Contact Us",
  onCtaClick,
  
  // Styling
  backgroundColor = "bg-white",
  containerMaxWidth = "max-w-4xl",
  
  // Default open state
  defaultOpenIndex = null,
}) => {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split FAQs into columns if needed
  const getFAQColumns = () => {
    if (columns === 2 && faqs.length > 1) {
      const mid = Math.ceil(faqs.length / 2);
      return [faqs.slice(0, mid), faqs.slice(mid)];
    }
    return [faqs];
  };

  const faqColumns = getFAQColumns();

  return (
    <section className={`py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 ${backgroundColor}`}>
      <div className={`${containerMaxWidth} mx-auto w-full`}>
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#111111] mb-3 md:mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* FAQ Items */}
        <div className={`${columns === 2 ? 'grid md:grid-cols-2 gap-8 md:gap-12' : ''}`}>
          {faqColumns.map((columnFaqs, colIndex) => (
            <div key={colIndex} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
              {columnFaqs.map((faq, index) => {
                const actualIndex = colIndex === 0 ? index : Math.ceil(faqs.length / 2) + index;
                return (
                  <FAQItem
                    key={actualIndex}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === actualIndex}
                    onToggle={() => handleToggle(actualIndex)}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {showCta && (
          <div className="mt-10 md:mt-14 text-center">
            <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-5 font-medium">
              {ctaText}
            </p>
            <button
              onClick={onCtaClick}
              className="px-6 md:px-8 py-3 md:py-4 bg-[#102044] text-white rounded-lg hover:bg-[#1a2f5f] transition-all duration-200 font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              {ctaButtonText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;