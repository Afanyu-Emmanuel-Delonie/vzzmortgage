import React from "react";

function CTASection({
  title = "Questions about your mortgage?",
  description = "Whether you're exploring your options or ready to apply, VZZ is here to answer your questions 24/7, no waiting, no pressure.",
  primaryButton = { text: "Ask an Expert", onClick: () => {} },
  secondaryButton = { text: "Chat Now", onClick: () => {} },
  image = "/assets/img/hero.png",
  imageAlt = "Happy family in their new home",
  showImage = true,
  backgroundColor = "#F3F4F7",
  primaryButtonColor = "#102044",
  accentColor = "#102044",
}) {
  return (
    <div className="px-5 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Content Section */}
          <div
            className="p-6 md:p-8 lg:p-10 rounded-lg w-full lg:w-1/2 flex flex-col justify-center"
            style={{ backgroundColor }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#111111] mb-4">
              {title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base lg:text-lg">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryButton && (
                <button
                  onClick={primaryButton.onClick}
                  className="px-6 py-3 text-white rounded-lg hover:opacity-90 transition-all duration-200 font-medium font-inter shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  style={{ backgroundColor: primaryButtonColor }}
                >
                  {primaryButton.text}
                </button>
              )}

              {secondaryButton && (
                <button
                  onClick={secondaryButton.onClick}
                  className="px-6 py-3 text-gray-700 bg-gray-200 rounded-lg hover:bg-yellow-400 hover:border-yellow-400 hover:text-white transition-all duration-200 border-2 border-transparent font-medium"
                >
                  {secondaryButton.text}
                </button>
              )}
            </div>
          </div>

          {/* Image Section */}
          {showImage && (
            <div className="relative w-full lg:w-1/2 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient for better image blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
              </div>

              {/* Decorative blob */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 opacity-5 rounded-full blur-3xl -z-10"
                style={{ backgroundColor: accentColor }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CTASection;
