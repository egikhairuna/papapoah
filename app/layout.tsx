import type { Metadata } from "next";
import { Radio_Canada } from "next/font/google";
import "./globals.css";

const radioCanada = Radio_Canada({
  variable: "--font-radio-canada",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Papapoah | Agency",
  description: "We bring together the best and brightest in stills and motion shoots; pioneering creative, talent, location, and casting specialists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${radioCanada.variable} antialiased text-gray-900 bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
