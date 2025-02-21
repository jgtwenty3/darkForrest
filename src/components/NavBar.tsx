'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    setMounted(true);
    setIsOpen(false); // Ensure menu is closed on mount
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement && !event.target.closest('.navbar') && isOpen) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // Skip animation on first render
    }

    if (menuRef.current) {
      if (isOpen) {
        gsap.fromTo(menuRef.current, { height: 0 }, { height: 'auto', duration: 0.5, ease: 'power2.out' });
      } else {
        gsap.to(menuRef.current, { height: 0, duration: 0.5, ease: 'power2.in' });
      }
    }
  }, [isOpen]);

  if (!mounted) {
    return null; // Prevents rendering until theme is loaded
  }

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="navbar bg-background shadow-md sticky top-0 z-50 border-b-2 border-b-foreground w-full">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className='border-r-2 border-foreground py-4'>
          <Link href="/" className="text-3xl md:text-5xl font-display mr-2">
            DARK FOREST STUDIOS
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-3 items-center uppercase text-xl px-2">
          <Link href="/" className="text-foreground dark:text-gray-300">Home</Link>
          <Link href="/about" className="text-foreground dark:text-gray-300">About</Link>
          <Link href="/services" className="text-foreground dark:text-gray-300">Services</Link>
          <Link href="/work" className="text-foreground dark:text-gray-300">WORK</Link>
          <Link href="/pricing" className="text-foreground dark:text-gray-300">PRICING</Link>
          <Link href="/contact" className="text-foreground dark:text-gray-300">Contact</Link>

          {/* Theme toggle button */}
          <button onClick={handleThemeToggle} className="p-2 bg-gray-200 dark:bg-gray-800 border-2 border-foreground">
            {theme === 'dark' ? 'RISE N SHINE' : 'LIGHTS OUT'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-600 dark:text-gray-300">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        style={{ overflow: 'hidden', height: 0, borderTopWidth: '2px', opacity: isOpen ? 1 : 0 }}
        className="md:hidden bg-background shadow-md text-2xl uppercase border-foreground transition-opacity duration-100"
      >
        <Link href="/" className="block py-2 text-foreground" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/about" className="block py-2 text-foreground" onClick={() => setIsOpen(false)}>About</Link>
        <Link href="/services" className="block py-2 text-foreground" onClick={() => setIsOpen(false)}>Services</Link>
        <Link href="/work" className="block py-2 text-foreground" onClick={() => setIsOpen(false)}>Work</Link>
        <Link href="/pricing" className="block py-2 text-foreground" onClick={() => setIsOpen(false)}>PRICING</Link>
        <Link href="/contact" className="block py-2 text-foreground" onClick={() => setIsOpen(false)}>Contact</Link>
        <button onClick={handleThemeToggle} className="block py-2 text-foreground">
          {theme === 'dark' ? 'RISE N SHINE' : 'LIGHTS OUT'}
        </button>
      </div>

    </nav>
  );
}
