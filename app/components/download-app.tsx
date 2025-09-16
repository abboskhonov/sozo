"use client";
import React from "react";
import Phones from "@/public/phones.png";
import Image from "next/image";

const DownloadApp = () => {
  return (
    <section className="relative min-h-screen bg-[#1B1E23] text-white flex items-center justify-center px-6 py-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Phones Image */}
        <div className="flex justify-center">
          <Image
            src={Phones}
            alt="phones"
            className="w-full max-w-md h-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* Right: Content */}
        <div className="space-y-6">
          <h1 className="text-3xl font-days-one md:text-5xl font-bold leading-tight">
            Download our app to your phone, and join the adventure 
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Sozo is your ultimate anime streaming app, designed for fans by fans.
            Dive into a massive library of anime series and movies — from iconic
            classics to the latest seasonal hits — all in one place.
          </p>
          <button
            onClick={() => window.open("https://t.me/sozoanime", "_blank")}
            className="bg-[#1A7AD3] hover:bg-[#1A7DD3] px-18 py-3 rounded-xl font-semibold text-white text-lg shadow-md hover:shadow-lg transition-all"
          >
            Visit Telegram
          </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
