'use client';

import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
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

interface Pick {
    id: string;
    name: string;
    image: string;
    description: string;
    location: string;
}

function Landing() {
    const [picks, setPicks] = useState<Pick[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPicks = async () => {
            try {
                const picksCollection = collection(db, 'picks');
                const pickSnapshot = await getDocs(picksCollection);
                const picksList = pickSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                } as Pick));
                setPicks(picksList);
            } catch (err) {
                console.error("Error fetching picks: ", err);
                setError("Failed to load destinations. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchPicks();
    }, []);

    if (loading) {
        return <LandingLoader />;
    }


    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <Header />
            <main className="flex-grow">
                <HeroHome />
                <Categories />
                <Destinations picks={picks} />
                <Gallery />
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