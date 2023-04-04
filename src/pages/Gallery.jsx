import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import Banner from '../partials/Banner';

function Gallery() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b py-24 from-gray-100 to-white">
          <div className="max-w-screen-xl p-5 mx-auto dark:bg-orange-500 dark:text-gray-100">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
              <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group dark:bg-gray-500, { backgroundImage: `url(${https://source.unsplash.com/random/243x320&quot})`} ">
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline dark:text-gray-100 dark:bg-black">Art</a>
                  <div className="flex flex-col justify-start text-center dark:text-gray-100">
                    <span className="text-3xl font-semibold leading-none tracking-wide">31</span>
                    <span className="leading-none uppercase">Jul</span>
                  </div>
                </div>
                <h2 className="z-10 p-5">
                  <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold dark:text-gray-100">Fuga ea ullam earum assumenda, beatae labore eligendi.</a>
                </h2>
              </div>
              <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500, { backgroundImage: `url(${https://source.unsplash.com/random/243x320&quot})`} ">
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline dark:text-gray-100 dark:bg-black">Art</a>
                  <div className="flex flex-col justify-start text-center dark:text-gray-100">
                    <span className="text-3xl font-semibold leading-none tracking-wide">04</span>
                    <span className="leading-none uppercase">Aug</span>
                  </div>
                </div>
                <h2 className="z-10 p-5">
                  <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline dark:text-gray-100"> Autem sunt tempora mollitia magnam non voluptates</a>
                </h2>
              </div>
              <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500 , { backgroundImage: `url(${https://source.unsplash.com/random/243x320&quot})`} ">
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline dark:text-gray-100 dark:bg-black">Art</a>
                  <div className="flex flex-col justify-start text-center dark:text-gray-100">
                    <span className="text-3xl font-semibold leading-none tracking-wide">01</span>
                    <span className="leading-none uppercase">Aug</span>
                  </div>
                </div>
                <h2 className="z-10 p-5">
                  <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline dark:text-gray-100">Inventore reiciendis aliquam excepturi</a>
                </h2>
              </div>
              <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500, { backgroundImage: `url(${https://source.unsplash.com/random/243x320&quot})`} ">
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline dark:text-gray-100 dark:bg-black">Art</a>
                  <div className="flex flex-col justify-start text-center dark:text-gray-100">
                    <span className="text-3xl font-semibold leading-none tracking-wide">28</span>
                    <span className="leading-none uppercase">Jul</span>
                  </div>
                </div>
                <h2 className="z-10 p-5">
                  <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline dark:text-gray-100">Officiis mollitia dignissimos commodi optio vero animi</a>
                </h2>
              </div>
              <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500 , { backgroundImage: `url(${https://source.unsplash.com/random/243x320&quot})`} ">
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline dark:text-gray-100 dark:bg-black">Art</a>
                  <div className="flex flex-col justify-start text-center dark:text-gray-100">
                    <span className="text-3xl font-semibold leading-none tracking-wide">19</span>
                    <span className="leading-none uppercase">Jul</span>
                  </div>
                </div>
                <h2 className="z-10 p-5">
                  <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline dark:text-gray-100">Doloribus sit illo necessitatibus architecto exercitationem enim</a>
                </h2>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Banner />

    </div>
  );
}

export default Gallery;