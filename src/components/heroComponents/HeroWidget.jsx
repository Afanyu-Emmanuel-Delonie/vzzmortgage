import React from "react";

export const HeroWidget = ({
  backgroundImage = "/assets/img/home_buying/firstHomeBuyer.png",
  flipImage = true,
  overlayOpacity = 20,
  title = "Your first home starts here.",
  description = "VZZ Mortgage makes buying your first home simpler, with flexible options and expert guidance when you need it.",
  primaryButtonText = "Get Pre-Approved",
  primaryButtonAction = () => console.log("Primary button clicked"),
  contentMaxWidth = "max-w-2xl",
  glassEffect = true,
  textColor = "text-white",
}) => {
  return (
    <div className="relative w-full min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[65vh] xl:min-h-[65vh] 2xl:min-h-[65vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          transform: flipImage ? "scaleX(-1)" : "none",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})` }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[55vh] xl:min-h-[65vh] 2xl:min-h-[65vh] px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-14 xl:px-16 xl:py-16 2xl:px-20 2xl:py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className={`w-full ${contentMaxWidth}`}>
            {/* Glass Card */}
            <div
              className={`p-6 sm:p-7 md:p-8 lg:p-10 xl:p-12 w-full rounded-xl sm:rounded-2xl shadow-xl ${
                glassEffect
                  ? "backdrop-blur-md bg-black/20 border border-white/20"
                  : "bg-black/40"
              }`}
            >
              {/* Title */}
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-semibold ${textColor} leading-tight mb-4 sm:mb-5 md:mb-4`}
              >
                {title}
              </h2>

              {/* Description */}
              <p
                className={`text-lg md:text-xl ${
                  textColor === "text-white" ? "text-gray-200" : "text-gray-300"
                } mb-6 sm:mb-6 md:mb-4 leading-relaxed font-inter`}
              >
                {description}
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-2">
                <button
                  onClick={primaryButtonAction}
                  className="px-6 py-3 md:px-7 md:py-3.5 text-[#111111] hover:text-white font-semibold bg-white rounded-lg hover:bg-white/30 transition-all duration-200 font-medium font-inter shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {primaryButtonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
