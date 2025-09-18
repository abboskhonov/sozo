"use client";
import React from "react";
import Phones from "@/public/phones.png";
import Image from "next/image";

const DownloadApp = () => {
  return (
    <section className="relative min-h-screen text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Left: Phones Image */}
        <div className="flex justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src={Phones}
              alt="phones"
              className="w-full h-auto drop-shadow-2xl"
              priority
              sizes="(max-width: 640px) 80vw, (max-width: 768px) 70vw, (max-width: 1024px) 50vw, 40vw"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-1 lg:order-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-days-one font-bold leading-tight">
            Download our app to your phone, and join the adventure
          </h1>

          <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Sozo is your ultimate anime streaming app, designed for fans by
            fans. Dive into a massive library of anime series and movies — from
            iconic classics to the latest seasonal hits — all in one place.
          </p>

          <div className="pt-2 sm:pt-4">
            <button
              onClick={() => window.open("https://t.me/sozoanime", "_blank")}
              className="bg-[#1A7AD3] hover:bg-[#1A7DD3] px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-xl font-semibold text-white text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-auto"
            >
              Visit Telegram
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
