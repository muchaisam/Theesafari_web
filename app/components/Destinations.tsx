'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin } from 'react-feather';
import {useRouter} from "next/navigation";
import LoadingBar from "react-top-loading-bar";

interface Pick {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
}

interface DestinationsProps {
  picks: Pick[];
}

const Destinations: React.FC<DestinationsProps> = ({ picks }) => {
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (picks.length > 0) {
      setLoading(false);
    }
  }, [picks]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleClick = (id: string) => {
    setProgress(30);
    router.push(`/picks/${id}`);
  };

  return (
      <section className="bg-gray-50 py-16">
        <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top Picks</h2>
            <p className="text-xl text-gray-600">Check out our top destination picks and start planning your next adventure!</p>
          </motion.div>

          {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
              </div>
          ) : (
              <div className="relative">
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 focus:outline-none"
                    aria-label="Scroll left"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollBehavior: 'smooth' }}
                >
                  {picks.map((pick) => (
                      <motion.div
                          key={pick.id}
                          onClick={() => handleClick(pick.id)}
                          className="cursor-pointer flex-none w-80 mr-6 snap-start"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                      >
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                          <div className="relative h-48">
                            <Image
                                fill
                                src={pick.image}
                                alt={pick.name}
                                className="object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">{pick.name}</h3>
                            <p className="text-gray-600 text-sm mb-4">{pick.description}</p>
                            <div className="flex items-center text-gray-500">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span className="text-sm">{pick.location}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                  ))}
                </div>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 focus:outline-none"
                    aria-label="Scroll right"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>
          )}
        </div>
      </section>
  );
}

export default Destinations;