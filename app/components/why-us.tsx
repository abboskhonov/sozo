import React from "react";
import Image from "next/image";
import vectorline from "@/public/vector-line.png";

export const WhyUs = () => {
  // Inline data
  const features = [
    {
      id: 1,
      title: "+1000 Anime Episodes",
      image: "/icon1.png",
      alt: "1000+ episodes",
      shift: "md:translate-y-8",
    },
    {
      id: 2,
      title: "All anime episodes, in the highest quality",
      image: "/icon2.png",
      alt: "high quality",
      shift: "md:-translate-y-6",
    },
    {
      id: 3,
      title: "Watch anytime, on any device with Sozo",
      image: "/icon3.png",
      alt: "watch anywhere",
      shift: "md:translate-y-10",
    },
    {
      id: 4,
      title: "More info about casters",
      image: "/icon4.png",
      alt: "casters info",
      shift: "md:-translate-y-8",
      extraIcon: "/icon4.png",
    },
  ];

  return (
    <section className="relative  py-16 px-4 overflow-hidden">
      {/* Top blurred overlay */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1B1E23]/90 to-transparent backdrop-blur-md z-10"></div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-days-one text-white mb-4">
            Why us? ✨
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Every episode. Every season. Every story. Watch anime in the highest
            quality, anytime, anywhere, with Sozo.
          </p>
        </div>

        {/* Features */}
        <div className="relative">
          {/* Vector line background - only visible on desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl z-0">
            <Image
              src={vectorline}
              alt="connecting line"
              className="w-full h-auto opacity-30"
            />
          </div>

          {/* Features grid - 2 columns on mobile, 4 columns on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`text-center relative ${feature.shift}`}
              >
                <div className="bg-transparent rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center relative z-10">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    width={140}
                    height={140}
                    className="hover:scale-107 smooth-transition duration-100"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
