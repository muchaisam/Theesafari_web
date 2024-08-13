'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GiWillowTree } from "react-icons/gi";
import { Menu } from "react-feather";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setIsVisible(false);
        } else { // if scroll up show the navbar
          setIsVisible(true);
        }
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
      <header className={`fixed top-0 z-50 w-full py-4 text-black backdrop-blur-md transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <GiWillowTree className="h-8 w-8 text-red-500" />
            <span className="text-lg font-bold text-red-500">Theesafari</span>
          </Link>
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col absolute top-full left-0 w-full bg-white md:static md:w-auto md:bg-transparent md:flex md:flex-row items-center gap-6`}>
            {['Home', 'Destinations', 'Experiences', 'About', 'Contact'].map((item) => (
                <Link key={item} href="#" className="text-sm font-medium py-2 md:py-0" prefetch={false}>
                  {item}
                </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Button className="rounded-full bg-white px-6 py-2 text-sm font-medium hover:bg-cyan-400">
              Explore Now
            </Button>
            <Button
                className="md:hidden bg-transparent hover:bg-[#F5F0E9] text-[#8C6E4E]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu />
            </Button>
          </div>
        </div>
      </header>
  );
}