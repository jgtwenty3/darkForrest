import { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400"
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
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <head>
        {/* Add any necessary head tags here */}
      </head>
      <body className="antialiased">
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}
