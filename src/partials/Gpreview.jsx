import React, { useState } from 'react';
import { FaRegImages } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Gallery () {

  return (
    <div className="max-w-6xl px-4 py-8 mx-auto sm:py-12 sm:px-8 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
          <FaRegImages />
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Preview
              <br className="hidden md:block" />
              your next{' '}
              <span className="inline-block text-deep-purple-accent-400">
                destination
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Step into our gallery and be transported to a world of artistic wonder. Our carefully curated collection features a diverse range of styles and mediums, from traditional paintings and sculptures to cutting-edge contemporary art.
            </p>
          </div>
          <div>
          <Link to="/gallery" className="text-orange-600 hover:underline">
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Art Gallery
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded-2xl shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://images.unsplash.com/photo-1611348524140-53c9a25263d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmFpcm9iaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="nbo"
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://images.unsplash.com/photo-1562082089-ae7d7acbd18d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5haXJvYml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="kibanda"
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://images.unsplash.com/photo-1562053232-1b9ef8cd1f26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5haXJvYml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="forest"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;