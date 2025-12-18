'use client';

import React from 'react';
import { usePlaces, useCategories } from '../hooks/useFirestore';
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
import LandingLoader from "@/app/components/LandingLoader";
import { motion } from 'framer-motion';

function Landing() {
    const { places, loading, error, refresh } = usePlaces();
    const { categories } = useCategories();

    if (loading) {
        return <LandingLoader />;
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-8 max-w-md"
                >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        Oops! Something went wrong
                    </h2>
                    <p className="text-gray-600 mb-6">{error}</p>
                    <button
                        onClick={refresh}
                        className="px-6 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors"
                    >
                        Try Again
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <>
            <Header />
            <main className="flex-grow">
                <HeroHome places={places} loading={loading} />
                <Categories categories={categories} />
                <Destinations places={places} />
                <Gallery places={places} />
                <About />
                <Explore />
                <CTA />
                <Banner />
            </main>
            <Footer />
        </>
    );
}

export default Landing;