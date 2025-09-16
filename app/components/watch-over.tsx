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
import Cover11 from "@/public/anime-covers/cover11.jpg";
import Cover12 from "@/public/anime-covers/cover12.webp";

const covers = [
  Cover1, Cover2, Cover3, Cover4, Cover5, Cover6,
  Cover7, Cover8, Cover9, Cover10, Cover11, Cover12,
];

// double the list for seamless loop
const loopedCovers = [...covers, ...covers];

export default function WatchOver() {
  return (
    <div className="h-full pl-10 bg-gray-900 text-white relative overflow-hidden ">
      <div className="relative container mx-auto px-6 py-0 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-0">
          <h1 className="text-3xl lg:text-5xl font-days-one font-bold leading-tight">
            Watch over 1000 exciting anime titles through Sozo! 🎬✨
          </h1>
          <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-lg">
            Sozo brings the entire world of anime directly to your pocket. From timeless classics to the newest simulcasts, Sozo gives you complete seasons and episodes in crystal-clear HD, with multi-language subtitles, fast streaming, and offline downloads.
          </p>
          <button
            onClick={() => window.open("https://t.me/sozoanime", "_blank")}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg text-sm md:text-base transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Download App
          </button>
        </div>

        {/* Right Section - Infinite Vertical Scroll */}
        <div className="relative h-[600px] overflow-hidden rounded-2xl  rotate-y-10">
          <div className="absolute inset-0 animate-vertical-scroll ]">
            <div className="grid grid-cols-3 gap-7 px-2">
              {loopedCovers.map((cover, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300  hover:scale-105 "
                >
                  <Image
                    src={cover}
                    alt={`anime-cover-${idx}`}
                    width={300}
                    height={400}
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Fade Masks */}
          
          
        </div>
      </div>

     
    </div>
  );
}
