import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Theesafari | Discover Kenya's Hidden Gems",
  description: "Explore off-the-beaten-path destinations in Kenya. From secret waterfalls to authentic local restaurants, discover the hidden gems that make Kenya unforgettable.",
  keywords: ["Kenya", "travel", "hidden gems", "destinations", "safari", "tourism"],
  openGraph: {
    title: "Theesafari | Discover Kenya's Hidden Gems",
    description: "Explore off-the-beaten-path destinations in Kenya",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <main id="maincontent">
          {children}
        </main>
      </body>
    </html>
  );
}