import React from "react";

function RatesCTA() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-[#102044] flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 text-center pb-3 sm:pb-5">
        Ready to Lock Your Rate?
      </h2>

      <p className="text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-sm sm:text-base text-gray-200 pb-6 sm:pb-8 md:pb-10 px-4">
        Secure your personalized rate today and take the next step toward your
        new home. It's fast, simple, and risk-free.
      </p>

      <button className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
        Lock Rates
      </button>
    </section>
  );
}

export default RatesCTA;
