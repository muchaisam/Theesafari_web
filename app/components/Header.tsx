'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { GiWillowTree } from "react-icons/gi";
import { Menu, X, Smartphone } from "react-feather";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Hide on scroll down, show on scroll up
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }

        // Add background when scrolled
        setIsScrolled(window.scrollY > 50);
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsDrawerOpen(false);
  };

  const menuItems: MenuItem[] = [
    { name: 'Home', href: 'home' },
    { name: 'Destinations', href: 'destinations' },
    { name: 'Experiences', href: 'categories' },
    { name: 'Gallery', href: 'gallery' },
    { name: 'About', href: 'about' },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full py-4 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              scrollToSection('home');
            }
          }}
        >
          <GiWillowTree className={`h-8 w-8 transition-colors ${isScrolled ? 'text-teal-600' : 'text-teal-400'}`} />
          <span className={`text-lg font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            Theesafari
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`text-sm font-medium transition-colors hover:text-teal-500 ${isScrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          {/* Get App Button */}
          <a
            href="https://play.google.com/store/apps/details?id=app.kodinova.theesafari"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${isScrolled
                ? 'bg-teal-50 text-teal-700 hover:bg-teal-100'
                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
          >
            <Smartphone className="w-4 h-4" />
            Get App
          </a>

          {/* Explore Button */}
          <Link
            href="/explore"
            className="hidden sm:block rounded-full bg-teal-500 hover:bg-teal-600 px-6 py-2 text-sm font-medium text-white transition-colors shadow-lg shadow-teal-500/20"
          >
            Explore Now
          </Link>

          {/* Mobile Menu Button */}
          <Button
            className={`md:hidden bg-transparent hover:bg-white/10 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={toggleDrawer}
            aria-label="Toggle menu"
          >
            {isDrawerOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-50 w-72 bg-white shadow-2xl md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsDrawerOpen(false)}>
                  <GiWillowTree className="h-7 w-7 text-teal-600" />
                  <span className="text-lg font-bold text-gray-900">Theesafari</span>
                </Link>
                <Button
                  className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded-full"
                  onClick={toggleDrawer}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col p-4 gap-1">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg font-medium transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="mt-auto p-4 border-t border-gray-100">
                <Link
                  href="/explore"
                  onClick={() => setIsDrawerOpen(false)}
                  className="block w-full text-center py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-full transition-colors mb-3"
                >
                  Explore All
                </Link>
                <a
                  href="https://play.google.com/store/apps/details?id=app.kodinova.theesafari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-full transition-colors"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  <Smartphone className="w-4 h-4" />
                  Download App
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={toggleDrawer}
          />
        )}
      </AnimatePresence>
    </header>
  );
}