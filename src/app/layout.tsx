import { Metadata } from "next";
import { Anton, Teko, Bitter, Archivo} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";


const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: "400",
});

const bitter = Bitter({
  variable :"--font-bitter",
  subsets:["latin"],
  weight:"400",
})

const bitterThin = Bitter({
  variable :"--font-bitterThin",
  subsets:["latin"],
  weight:"100",
});

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: "Dark Forest Studios",
  description: "Freelance web design inspired by the Dark Forest Theory.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${bitter.variable} ${bitterThin.variable}`} suppressHydrationWarning>
      <head>
        {/* Add any necessary head tags here */}
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
