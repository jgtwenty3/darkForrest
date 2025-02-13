import { Metadata } from "next";
import { Inter, Anton, Teko } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import { ThemeProvider } from "next-themes";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: "400",
});

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
    <html lang="en" className={`${anton.variable} ${teko.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Add any necessary head tags here */}
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
