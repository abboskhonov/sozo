import type { Metadata } from "next";
import { Days_One, Inter, Rubik } from "next/font/google";
import "./globals.css";

const daysOne = Days_One({
  weight: "400", // Days One only has 400
  subsets: ["latin"],
  variable: "--font-days-one",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Sozo App",
  description: "Watch your favorite anime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${daysOne.variable} ${inter.variable} ${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
