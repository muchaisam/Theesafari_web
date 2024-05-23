import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => (
    <Image src="/safari.webp" width={50} height={50} alt="Theesafari Logo" />
);

const FooterLink: React.FC<{ href: string }> = ({ href, children }) => (
    <li>
      <Link href={href}
         className="text-gray-700 transition hover:text-gray-700/75">{children}
      </Link>
    </li>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer aria-label="Site Footer" className="bg-gray-100">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-teal-600 lg:justify-start">
              <Link href="/" className="block" aria-label="Theesafari">
                <Logo width={32} height={32}/>
              </Link>
            </div>
            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              Get out and Discover.
            </p>
          </div>
          <nav aria-label="Footer Nav" className="mt-12 lg:mt-0">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12">
              <FooterLink href="/">About</FooterLink>
              <FooterLink href="/">Services</FooterLink>
              <FooterLink href="/">Projects</FooterLink>
              <FooterLink href="/">Blog</FooterLink>
            </ul>
          </nav>
        </div>
        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; {currentYear}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;