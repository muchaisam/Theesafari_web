'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Tag } from 'lucide-react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import LoadingBar from 'react-top-loading-bar';
import { db } from '../../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

interface Pick {
    id: string;
    image: string;
    name: string;
    // description: string;
    // location: string;
    // duration: string;
    // groupSize: string;
    // price: string;
    // activities: string[];
}

export default function PickPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const [pick, setPick] = useState<Pick | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [progress, setProgress] = useState(30);

    useEffect(() => {
        const fetchPick = async () => {
            try {
                setProgress(50);
                const docRef = doc(db, 'picks', params.id);
                const docSnap = await getDoc(docRef);
                setProgress(70);
                if (docSnap.exists()) {
                    setPick({ id: params.id, ...docSnap.data() } as Pick);
                } else {
                    setError("Pick not found");
                }
            } catch (error) {
                console.error("Error fetching pick: ", error);
                setError("An error occurred while fetching the pick");
            } finally {
                setLoading(false);
                setProgress(100);
            }
        };

        if (params.id) {
            fetchPick();
        }
    }, [params.id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <LoadingBar
                    color='#f11946'
                    progress={progress}
                    onLoaderFinished={() => setProgress(0)}
                />
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold mb-4">{error}</h1>
                <button
                    onClick={() => router.push('/')}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Go back to home
                </button>
            </div>
        );
    }

    if (!pick) {
        return null;
    }

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <Header />

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
                                fontWeight: 'bold',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                padding: '0.5rem 1rem',
                                borderRadius: '5px',
                            }}
                        >
                            {pick.name}
                        </h1>
                    </div>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
                        <h2 className="text-3xl font-bold mb-4">{pick.name}</h2>
                        {/*<p className="text-gray-600 mb-4">{pick.description}</p>*/}
                        {/*<div className="flex items-center mb-2">*/}
                        {/*    <MapPin className="w-4 h-4 mr-2" />*/}
                        {/*    <span>{pick.location}</span>*/}
                        {/*</div>*/}
                        {/*<div className="flex items-center mb-2">*/}
                        {/*    <Calendar className="w-4 h-4 mr-2" />*/}
                        {/*    <span>{pick.duration}</span>*/}
                        {/*</div>*/}
                        {/*<div className="flex items-center mb-2">*/}
                        {/*    <Users className="w-4 h-4 mr-2" />*/}
                        {/*    <span>{pick.groupSize}</span>*/}
                        {/*</div>*/}
                        {/*<div className="flex items-center mb-4">*/}
                        {/*    <Tag className="w-4 h-4 mr-2" />*/}
                        {/*    <span>{pick.price}</span>*/}
                        {/*</div>*/}
                        {/*<h3 className="text-xl font-bold mb-2">Activities:</h3>*/}
                        {/*<ul className="list-disc list-inside">*/}
                        {/*    {pick.activities.map((activity, index) => (*/}
                        {/*        <li key={index}>{activity}</li>*/}
                        {/*    ))}*/}
                        {/*</ul>*/}
                    </div>
                </section>
            </main>

            <Banner />
        </div>
    );
}