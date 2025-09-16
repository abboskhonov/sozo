"use client";
import React from "react";
import Hero from "./components/hero";
import { WhyUs } from "./components/why-us";
import WatchOver from "./components/watch-over";
import DownloadApp from "./components/download-app";
const page = () => {
  return (
    <>
      <Hero />
      <WhyUs />
      <WatchOver />
      <DownloadApp />
    </>
  );
};
export default page;
