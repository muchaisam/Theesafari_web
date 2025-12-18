'use client';

import React, { useState, useMemo } from 'react';
import { FaRegImages } from 'react-icons/fa';
import { GiWillowTree } from 'react-icons/gi';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Place } from '../types/place';

interface GalleryProps {
  places?: Place[];
}

const Gallery: React.FC<GalleryProps> = ({ places = [] }) => {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  // Get random images from places
  const galleryImages = useMemo(() => {
    const images: { src: string; alt: string; id: string }[] = [];

    const shuffledPlaces = [...places].sort(() => Math.random() - 0.5);

    for (const place of shuffledPlaces) {
      if (images.length >= 3) break;

      if (place.primaryImage) {
        images.push({
          src: place.primaryImage,
          alt: place.basic_information?.name || 'Kenya destination',
          id: place.id
        });
      }
    }

    // Fallback if not enough images - use empty string to trigger placeholder
    while (images.length < 3) {
      images.push({
        src: '',
        alt: 'Kenya landscape',
        id: 'default'
      });
    }

    return images;
  }, [places]);

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set(prev).add(index));
  };

  return (
    <section id="gallery" className="bg-gray-50 py-16">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <motion.div
            className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-100 text-teal-600">
              <FaRegImages className="w-8 h-8" />
            </div>
            <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Preview your next{' '}
              <span className="inline-block text-teal-600">
                adventure
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg mb-8">
              From breathtaking landscapes to hidden cultural gems, explore our collection
              of Kenya&apos;s most captivating destinations. Each photo tells a story waiting to be discovered.
            </p>
            <Link
              href="/explore"
              className="inline-flex items-center px-6 py-3 font-semibold text-white transition-all duration-200 bg-teal-600 rounded-full hover:bg-teal-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50 w-fit"
            >
              Explore All
              <svg
                className="inline-block w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-4 md:gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-4 md:space-y-6">
              {galleryImages.slice(0, 2).map((image, index) => (
                <motion.div
                  key={`${image.id}-${index}`}
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={image.id !== 'default' ? `/picks/${image.id}` : '/explore'}>
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group">
                      {imageErrors.has(index) || !image.src ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-600">
                          <GiWillowTree className="w-16 h-16 text-white/60" />
                        </div>
                      ) : (
                        <Image
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 768px) 50vw, 250px"
                          onError={() => handleImageError(index)}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 md:mt-12">
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={galleryImages[2]?.id !== 'default' ? `/picks/${galleryImages[2]?.id}` : '/explore'}>
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group">
                    {imageErrors.has(2) || !galleryImages[2]?.src ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-600">
                        <GiWillowTree className="w-16 h-16 text-white/60" />
                      </div>
                    ) : (
                      <Image
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        src={galleryImages[2]?.src}
                        alt={galleryImages[2]?.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 250px"
                        onError={() => handleImageError(2)}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;