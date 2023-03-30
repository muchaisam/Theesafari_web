import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/Hero';
import Categories from '../partials/Categories';
import Destinations from '../partials/Destinations';
import Gallery from '../partials/Gpreview';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import Banner from '../partials/Banner';

function Home() {
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

export default Home;