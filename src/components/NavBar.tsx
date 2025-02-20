'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevents rendering until theme is loaded
  }

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="bg-background shadow-md sticky top-0 z-50 border-b-2 border-b-foreground w-full">
      <div className=" flex items-center justify-between w-full">
        {/* Logo */}
        <div className='border-r-2 border-foreground py-4'>
        <Link href="/" className="text-3xl md:text-5xl font-semibold font-display mr-2">
          DARK FOREST STUDIOS
        </Link>
        </div>
       

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center uppercase text-xl p-2">
          <Link href="/" className="text-foreground dark:text-gray-300">Home</Link>
          <Link href="/about" className="text-foreground dark:text-gray-300">About</Link>
          <Link href="/services" className="block px-4 py-2 text-foreground dark:text-gray-300">Services</Link>
          
          <Link href="/work" className="text-foreground dark:text-gray-300">WORK</Link>
          <Link href="/contact" className="text-foreground dark:text-gray-300">Contact</Link>

          {/* Theme toggle button */}
          <button onClick={handleThemeToggle} className="p-2 bg-gray-200 dark:bg-gray-800 border-2 border-foreground">
            {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-600 dark:text-gray-300">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-background shadow-md py-4 px-6 text-2xl border-t-2 uppercase">
          <Link href="/" className="block py-2 text-gray-600 dark:text-gray-300">Home</Link>
        
          <Link href="/services" className="block py-2 text-gray-600 dark:text-gray-300">Services</Link>
            
  
          <Link href="/about" className="block py-2 text-gray-600 dark:text-gray-300">About</Link>
          <Link href="/contact" className="block py-2 text-gray-600 dark:text-gray-300">Contact</Link>
        </div>
      )}
    </nav>
  );
}
