'use client';

import Link from "next/link"
import { GiWillowTree } from "react-icons/gi";
import { Facebook, Instagram, Mail, MapPin, Twitter, ExternalLink, Smartphone } from "react-feather";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Experiences', href: '#categories' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/theesafari' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/theesafari' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/theesafari' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <GiWillowTree className="h-10 w-10 text-teal-400" />
              <span className="text-2xl font-bold">Theesafari</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Discover Kenya&apos;s hidden gems and off-the-beaten-path destinations.
              We help you explore authentic experiences that make Kenya truly unforgettable.
            </p>

            {/* App Download */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-3 uppercase tracking-wider">Get the app</p>
              <a
                href="https://play.google.com/store/apps/details?id=app.kodinova.theesafari"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-5 py-3 rounded-xl transition-colors group"
              >
                <Smartphone className="w-8 h-8 text-teal-400" />
                <div>
                  <span className="text-xs text-gray-400 block">Download on</span>
                  <span className="text-base font-semibold group-hover:text-teal-400 transition-colors">Google Play</span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-teal-400 transition-colors" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-500 flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-teal-400 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@theesafari.app"
                  className="text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-3"
                >
                  <Mail className="w-5 h-5 text-teal-400" />
                  hello@theesafari.app
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-teal-400 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>

            {/* Newsletter - simplified */}
            <div className="mt-8">
              <h5 className="text-sm font-medium text-white mb-3">Stay Updated</h5>
              <p className="text-gray-500 text-sm mb-3">
                Follow us on social media for the latest discoveries
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Theesafari. Made with ❤️ in Kenya
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-teal-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-teal-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
