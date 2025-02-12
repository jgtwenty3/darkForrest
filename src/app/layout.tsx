import type { Metadata } from "next";
import { Zen_Dots, Inter, Anton } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";

const zenDots = Zen_Dots({
  variable: "--font-zen-dots",
  subsets: ["latin"],
  weight: "400", // Zen Dots only has one weight
});

const anton = Anton({
  variable :"--font-anton",
  subsets: ["latin"],
  weight:"400"

})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Adjust based on your design needs
});

export const metadata: Metadata = {
  title: "Dark Forest Studios",
  description: "Freelance web design inspired by the Dark Forest Theory.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${inter.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
