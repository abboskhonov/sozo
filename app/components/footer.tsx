"use client";
import React from "react";
import { Github, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-gray-400 py-12 px-6">
      {/* Top Line */}
      <div className="w-4/5 mx-auto border-t border-gray-700 mb-8"></div>

      <div className="container mx-auto text-center space-y-6">
        {/* Brand */}
        <h1 className="text-2xl font-bold text-white font-days-one">Sozo</h1>
        <p className="max-w-lg mx-auto text-sm leading-relaxed font-inter">
          Every episode. Every season. Every story. Watch anime in the highest
          quality, anytime, anywhere, with Sozo.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 pt-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Github size={22} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Twitter size={22} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Instagram size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Sozo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
