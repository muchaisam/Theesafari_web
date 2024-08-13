'use client';

import React from 'react';

import Header from '../components/Header';
import HeroHome from '../components/Hero';
import Categories from '../components/Categories';
import Destinations from '../components/Destinations';
import Gallery from '../components/GalleryPreview';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import About from "@/app/components/About";
import Explore from "@/app/components/Explore";

function Landing() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            <Header/>

            {/*  Page content */}
            <main className="flex-grow">

                {/*  Page sections */}
                <HeroHome/>
                <About/>
                <Categories/>
                <Explore/>
                <Destinations/>
                <Gallery/>
                <CTA/>

            </main>

            <Banner/>

            {/*  Site footer */}
            <Footer/>

        </div>
    );
}

export default Landing;