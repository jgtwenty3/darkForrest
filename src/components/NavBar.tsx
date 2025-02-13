'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
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
    <nav className="bg-background shadow-md sticky top-0 z-50 border-2 border-black">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-3xl md:text-5xl font-semibold font-display">
          DARK FOREST STUDIOS
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center uppercase text-xl">
          <Link href="/" className="text-foreground dark:text-gray-300 hover:text-blue-500">Home</Link>
          <div className="relative group">
            <button className="text-foreground dark:text-gray-300 hover:text-blue-500 flex items-center">
              SERVICES
              <span className="ml-1">▼</span>
            </button>
            <div className="absolute left-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md hidden group-hover:block">
              <Link href="/web-design" className="block px-4 py-2 text-foreground dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Web Design</Link>
              <Link href="/seo" className="block px-4 py-2 text-foreground dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">SEO</Link>
            </div>
          </div>
          <Link href="/about" className="text-foreground dark:text-gray-300 hover:text-blue-500">About</Link>
          <Link href="/work" className="text-foreground dark:text-gray-300 hover:text-blue-500">WORK</Link>
          <Link href="/contact" className="text-foreground dark:text-gray-300 hover:text-blue-500">Contact</Link>

          {/* Theme toggle button */}
          <button onClick={handleThemeToggle} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-600 dark:text-gray-300">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md py-4 px-6">
          <Link href="/" className="block py-2 text-gray-600 dark:text-gray-300">Home</Link>
          <div className="py-2">
            <button className="w-full text-left text-gray-600 dark:text-gray-300">SERVICES ▼</button>
            <div className="ml-4">
              <Link href="/web-design" className="block py-2 text-gray-600 dark:text-gray-300">Web Design</Link>
              <Link href="/seo" className="block py-2 text-gray-600 dark:text-gray-300">SEO</Link>
            </div>
          </div>
          <Link href="/about" className="block py-2 text-gray-600 dark:text-gray-300">About</Link>
          <Link href="/contact" className="block py-2 text-gray-600 dark:text-gray-300">Contact</Link>
        </div>
      )}
    </nav>
  );
}

