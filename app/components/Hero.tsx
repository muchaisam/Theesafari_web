import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: "/nbo.webp", alt: "Kenya Landscape" },
    { src: "/waterfall.webp", alt: "Kenya Wildlife" },
    { src: "/nbo.webp", alt: "Kenya Culture" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
      <section className="relative w-full h-screen overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
              key={currentSlide}
              src={slides[currentSlide].src}
              alt={slides[currentSlide].alt}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.h1
                className="text-5xl md:text-xl lg:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
              Uncover Kenya&apos;s Hidden Gems
            </motion.h1>
            <motion.p
                className="text-lg md:text-xl text-white/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
              Discover the breathtaking landscapes, diverse wildlife, and rich cultural heritage of Kenya&apos;s
              off-the-beaten-path destinations.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
                <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                        index === currentSlide ? "bg-white" : "bg-white/50"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                />
            ))}
          </div>
        </div>
      </section>
  );
}