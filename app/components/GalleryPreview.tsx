'use client';

import React from 'react';
import { FaRegImages } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  return (
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <motion.div
                className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-100 text-teal-600">
                <FaRegImages className="w-8 h-8" />
              </div>
              <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Preview your next{' '}
                <span className="inline-block text-teal-600">
                destination
              </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg mb-8">
                Step into our gallery and be transported to a world of wonder. Our carefully curated collection showcases the diverse landscapes and rich cultural heritage of Kenya, from bustling cityscapes to serene natural wonders.
              </p>
              <Link href="/Gallery"
                    className="inline-flex items-center px-6 py-3 font-semibold text-white transition-colors duration-200 bg-teal-600 rounded-full hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50"
              >
                Explore Gallery
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
                className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-4 md:space-y-6 lg:space-y-8">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Image
                      className="object-cover w-full h-auto rounded-2xl shadow-lg"
                      src="https://images.unsplash.com/photo-1611348524140-53c9a25263d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmFpcm9iaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt="Nairobi skyline"
                      width={500}
                      height={500}
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Image
                      className="object-cover w-full h-auto rounded-2xl shadow-lg"
                      src="https://images.unsplash.com/photo-1562082089-ae7d7acbd18d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5haXJvYml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                      alt="Kenyan market"
                      width={500}
                      height={500}
                  />
                </motion.div>
              </div>
              <div className="space-y-4 md:space-y-6 lg:space-y-8 mt-8 md:mt-12">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Image
                      className="object-cover w-full h-auto rounded-2xl shadow-lg"
                      src="https://images.unsplash.com/photo-1562053232-1b9ef8cd1f26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5haXJvYml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                      alt="Kenyan forest"
                      width={500}
                      height={500}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
}

export default Gallery;