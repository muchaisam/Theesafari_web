'use client';

import React, { useState, useRef } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Star } from 'react-feather';
import { useRouter } from "next/navigation";
import LoadingBar from "react-top-loading-bar";
import { Place } from '../types/place';
import { CardSkeletonList } from './skeletons';

interface DestinationsProps {
  places: Place[];
  loading?: boolean;
}

const Destinations: React.FC<DestinationsProps> = ({ places, loading = false }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const router = useRouter();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleClick = (id: string) => {
    setProgress(30);
    router.push(`/picks/${id}`);
  };

  const handleImageError = (placeId: string) => {
    setImageErrors(prev => new Set(prev).add(placeId));
  };

  return (
    <section id="destinations" className="bg-gradient-to-b from-gray-50 to-white py-16">
      <LoadingBar
        color='#14b8a6'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
            Featured Destinations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Hidden Gems
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore Kenya&apos;s most captivating destinations, from sacred forests to thrilling adventures
          </p>
        </motion.div>

        {loading ? (
          <CardSkeletonList count={4} />
        ) : (
          <div className="relative">
            {/* Left scroll button */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg z-10 focus:outline-none hover:bg-gray-50 transition-colors hidden md:block"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {/* Scrollable container */}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4 -mx-4 px-4"
              style={{ scrollBehavior: 'smooth' }}
            >
              {places.map((place, index) => (
                <motion.div
                  key={place.id}
                  onClick={() => handleClick(place.id)}
                  className="cursor-pointer flex-none w-80 snap-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {/* Image container */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        fill
                        src={imageErrors.has(place.id) ? '/safari.webp' : place.primaryImage}
                        alt={place.basic_information.name}
                        className="object-cover transition-transform duration-500 hover:scale-110"
                        onError={() => handleImageError(place.id)}
                        sizes="320px"
                      />
                      {/* Category badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                          {place.categorization.primary_category}
                        </span>
                      </div>
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-2 text-gray-900 line-clamp-1">
                        {place.basic_information.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {place.basic_information.short_description}
                      </p>

                      {/* Location & Rating */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500">
                          <MapPin className="w-4 h-4 mr-1 text-teal-500" />
                          <span className="text-sm">{place.location_details.county}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-amber-400 fill-current" />
                          <span className="text-sm font-medium text-gray-700">
                            {place.basic_information.rating}
                          </span>
                          <span className="text-xs text-gray-400">
                            ({place.basic_information.estimated_reviews})
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right scroll button */}
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg z-10 focus:outline-none hover:bg-gray-50 transition-colors hidden md:block"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        )}

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <button
            onClick={() => router.push('/explore')}
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors"
          >
            View All Destinations
            <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Destinations;