'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Tag } from 'lucide-react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import LoadingBar from 'react-top-loading-bar';
import { db } from '../firebase/firebase'; // Adjust the import path as necessary
import { doc, getDoc } from 'firebase/firestore';

interface Pick {
    id: string;
    image: string;
    name: string;
    description: string;
    location: string;
    duration: string;
    groupSize: string;
    price: string;
    activities: string[];
}

export default function PickPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const [pick, setPick] = useState<Pick | null>(null);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const fetchPick = async () => {
            setProgress(30);
            try {
                const docRef = doc(db, 'picks', params.id);
                const docSnap = await getDoc(docRef);
                setProgress(70);
                if (docSnap.exists()) {
                    setPick({ id: params.id, ...docSnap.data() } as Pick);
                } else {
                    console.log("No such document!");
                    router.push('/404'); // Redirect to a 404 page if the pick doesn't exist
                }
            } catch (error) {
                console.error("Error fetching pick: ", error);
                router.push('/error'); // Redirect to an error page
            } finally {
                setLoading(false);
                setProgress(100);
            }
        };

        if (params.id) {
            fetchPick();
        }
    }, [params.id, router]);

    if (loading) {
        return (
            <>
                <LoadingBar
                    color='#f11946'
                    progress={progress}
                    onLoaderFinished={() => setProgress(0)}
                />
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            </>
        );
    }

    if (!pick) {
        return null; // This will never be rendered because of the redirect in fetchPick
    }

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <Header />

            {/*  Page content */}
            <main className="flex-grow">

                <section className="bg-gradient-to-b from-gray-100 to-white">
                    <div
                        style={{
                            backgroundImage: `url(${pick.image})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <h1
                            style={{
                                color: 'white',
                                fontSize: '2rem',
                                fontStyle : 'bold',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                padding: '0.5rem 1rem',
                                borderRadius: '5px',
                            }}
                        >
                            {pick.name}
                        </h1>
                        {/* Add more details as needed */}
                    </div>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                        </div>
                    </div>
                </section>

            </main>

            <Banner />

        </div>
    );
}
