'use client';

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, MapPin, Star } from "react-feather";
import { Place } from "../types/place";

interface HeroProps {
  places?: Place[];
  loading?: boolean;
}

export default function HeroSection({ places = [], loading = false }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Get random images from places
  const slides = useMemo(() => {
    if (places.length === 0) {
      return [
        { src: "/safari.webp", alt: "Discover Kenya", name: "Explore Kenya", category: "Adventure" },
      ];
    }

    // Shuffle places and pick up to 6 with valid main images
    const shuffled = [...places]
      .filter(place => place.primaryImage)
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);

    return shuffled.map(place => ({
      src: place.primaryImage || '/safari.webp',
      alt: place.basic_information?.name || 'Kenya destination',
      name: place.basic_information?.name || 'Hidden Gem',
      category: place.categorization?.primary_category || 'Experience',
      rating: place.basic_information?.rating,
      location: place.location_details?.county,
      id: place.id
    }));
  }, [places]);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setImageLoaded(false);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentPlace = slides[currentSlide];

  const scrollToDestinations = () => {
    const element = document.getElementById('destinations');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden z-0">
      {/* Background Images with Ken Burns effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              opacity: { duration: 0.8 },
              scale: { duration: 8, ease: "linear" }
            }
          }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <Image
            src={currentPlace.src}
            alt={currentPlace.alt}
            fill
            className="object-cover"
            priority={currentSlide === 0}
            onLoad={() => setImageLoaded(true)}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm mb-6 border border-white/20"
          >
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            Discover {places.length > 0 ? `${places.length}+` : ''} Hidden Gems in Kenya
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Explore Kenya&apos;s
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300">
              Untold Stories
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            From hidden waterfalls to secret dining spots, discover the destinations
            that locals love but tourists rarely find.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <button
              onClick={scrollToDestinations}
              className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/30"
            >
              Start Exploring
            </button>
            <a
              href="https://play.google.com/store/apps/details?id=app.kodinova.theesafari"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 border border-white/30"
            >
              Get the App
            </a>
          </motion.div>
        </div>

        {/* Current Place Info Card */}
        {slides.length > 1 && currentPlace.id && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: imageLoaded ? 1 : 0, x: imageLoaded ? 0 : 50 }}
            transition={{ delay: 0.8 }}
            className="absolute right-8 bottom-32 hidden lg:block"
          >
            <a
              href={`/picks/${currentPlace.id}`}
              className="block bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group max-w-xs"
            >
              <div className="flex items-center gap-2 text-teal-300 text-sm mb-2">
                <span className="w-8 h-0.5 bg-teal-400" />
                Now Showing
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-200 transition-colors">
                {currentPlace.name}
              </h3>
              <div className="flex items-center gap-4 text-white/70 text-sm">
                {currentPlace.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {currentPlace.location}
                  </span>
                )}
                {currentPlace.rating && (
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {currentPlace.rating}
                  </span>
                )}
              </div>
              <div className="mt-3 text-xs text-teal-300 uppercase tracking-wider">
                {currentPlace.category}
              </div>
            </a>
          </motion.div>
        )}
      </div>

      {/* Slide indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-300 ${index === currentSlide
                    ? "w-8 h-2 bg-teal-400 rounded-full"
                    : "w-2 h-2 bg-white/50 rounded-full hover:bg-white/80"
                  }`}
                onClick={() => {
                  setImageLoaded(false);
                  setCurrentSlide(index);
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToDestinations}
        className="absolute bottom-8 right-8 text-white/70 hover:text-white transition-colors hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-sm">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}