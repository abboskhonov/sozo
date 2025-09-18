"use client";
import Image from "next/image";
import Cover1 from "@/public/anime-covers/cover1.jpg";
import Cover2 from "@/public/anime-covers/cover2.webp";
import Cover3 from "@/public/anime-covers/cover3.jpg";
import Cover4 from "@/public/anime-covers/cover4.jpg";
import Cover5 from "@/public/anime-covers/cover5.webp";
import Cover6 from "@/public/anime-covers/cover6.webp";
import Cover7 from "@/public/anime-covers/cover7.jpg";
import Cover8 from "@/public/anime-covers/cover8.webp";
import Cover9 from "@/public/anime-covers/cover9.webp";
import Cover10 from "@/public/anime-covers/cover10.jpg";


const covers = [
  Cover1,
  Cover2,
  Cover3,
  Cover4,
  Cover5,
  Cover6,
  Cover7,
  Cover8,
  Cover9,
  Cover10,
];

// double the list for seamless loop
const loopedCovers = [...covers, ...covers];

export default function WatchOver() {
  return (
    <>
      {/* Mobile Version - Figma Design */}
      <div className="block lg:hidden min-h-screen bg-gray-900 text-white px-4 py-8 flex flex-col justify-center">
        <div className="max-w-sm mx-auto w-full">
          {/* Movie Grid */}
          <div className="grid grid-cols-4 gap-2 mb-8">
            {[...covers, ...covers.slice(0, 6)].map((cover, idx) => (
              <div
                key={idx}
                className="relative rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={cover}
                  alt={`Movie ${idx + 1}`}
                  width={120}
                  height={160}
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            ))}
          </div>

          {/* Text Content */}
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold leading-tight">
              1000dan ortiq qiziqarli
              <br />
              filmlarni vebsaytimiz
              <br />
              orqali ko'ring!
            </h1>

            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>

            {/* Download Button */}
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md">
              Vebsaytga tashrif buyurish
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Version - Original Design */}
      <div className="hidden lg:block h-full pl-10 text-white relative overflow-hidden">
        <div className="relative container mx-auto px-6 py-0 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-5xl font-days-one font-bold leading-tight">
              Watch over 1000 exciting anime titles through Sozo! 🎬✨
            </h1>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-lg font-inter">
              Sozo brings the entire world of anime directly to your pocket.
              From timeless classics to the newest simulcasts, Sozo gives you
              complete seasons and episodes in crystal-clear HD, with
              multi-language subtitles, fast streaming, and offline downloads.
            </p>
            <button
              onClick={() => window.open("https://t.me/sozoanime", "_blank")}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg text-sm md:text-base transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Download App
            </button>
          </div>
          {/* Right Section - Infinite Vertical Scroll with Left Rotation */}
          <div className="relative h-[600px] overflow-visible perspective-1000">
            <div className="absolute inset-0 animate-vertical-scroll transform -rotate-2 origin-center scale-90 translate-x-8">
              <div className="grid grid-cols-3 gap-3 px-4">
                {loopedCovers.map((cover, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:rotate-2"
                  >
                    <Image
                      src={cover}
                      alt={`anime-cover-${idx}`}
                      width={200}
                      height={300}
                      className="w-full aspect-[3/4] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Gradient Fade Masks */}
            {/*<div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none z-10"></div>*/}
            <div className="w-4/5 mx-auto border-b border-gray-700 mb-8"></div>
          </div>
        </div>
      </div>
    </>
  );
}
