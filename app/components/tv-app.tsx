"use client";
import React from "react";
import Image from "next/image";
import GithubIcon from "@/public/getitongithub.png";
import TvFrame from "@/public/1.png";

function TvApp() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center px-6 py-8 text-white">
      <div className="w-full mx-auto border-t border-gray-700 mb-8"></div>
      
      {/* Text Section */}
      <div className="max-w-2xl mb-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 font-days-one">
          Our app for TV
        </h1>
        <p className="text-lg text-gray-300 font-inter">
          Sozo brings the world of anime to your living room. Stream thousands
          of anime episodes and movies in high definition — all from the comfort
          of your couch.
        </p>
      </div>
      
      {/* GitHub Button */}
      <a href="#" className="mb-10 transition-transform hover:scale-105">
        <Image
          src={GithubIcon}
          alt="Get it on GitHub"
          width={180}
          height={60}
          priority
        />
      </a>
      
      {/* TV Frame (with image inside already) */}
      <div className="w-full max-w-[720px] relative">
        {/* Mobile: smaller container with adjusted positioning */}
        <div className="block md:hidden w-full h-[250px] overflow-hidden relative">
          <Image
            src={TvFrame}
            alt="TV Frame with image"
            className="w-full h-auto object-cover absolute top-[-180px] left-0 rounded-lg"
            priority
          />
        </div>
        
        {/* Desktop: original styling */}
        <div className="hidden md:block w-full h-[400px] overflow-hidden relative">
          <Image
            src={TvFrame}
            alt="TV Frame with image"
            className="w-full h-auto object-cover absolute top-[-300px] left-0 rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default TvApp;