"use client";

import React from 'react';

import Header from '../components/Header';
import HeroHome from '../components/Hero';
import Categories from '../components/Categories';
import Destinations from '../components/Destinations';
import Gallery from '../components/Gpreview';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

function Landing() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <Categories />
        <Destinations />
        <Gallery />
        <Newsletter />

      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Landing;