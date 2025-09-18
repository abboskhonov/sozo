"use client";
import React from "react";
import { Youtube, Send, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "YouTube",
      href: "https://youtube.com/",
      icon: Youtube,
      hoverColor: "hover:bg-red-600"
    },
    {
      name: "Telegram",
      href: "https://telegram.org/",
      icon: Send,
      hoverColor: "hover:bg-blue-500"
    },
    {
      name: "Facebook",
      href: "https://facebook.com/",
      icon: Facebook,
      hoverColor: "hover:bg-blue-600"
    },
    {
      name: "Instagram",
      href: "https://instagram.com/",
      icon: Instagram,
      hoverColor: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500"
    }
  ];

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
        <div className="flex justify-center space-x-4 pt-4">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 bg-black rounded-full flex items-center justify-center ${social.hoverColor} transition-all`}
                aria-label={social.name}
              >
                <IconComponent size={18} className="text-white" />
              </a>
            );
          })}
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