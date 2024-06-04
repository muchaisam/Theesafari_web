import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Image from "next/image";

// Define the type of pick
interface Pick {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
}

const Destinations: React.FC = () => {
  const [picks, setPicks] = useState<Pick[]>([]);

  useEffect(() => {
  // Retrieve data from Firestore
  const getPicks = async () => {
    const picksCol = collection(db, "picks");
    const pickSnapshot = await getDocs(picksCol);
    const picksList: Pick[] = pickSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }) as Pick);
    setPicks(picksList);
  };

  getPicks();
}, []);

  return (
      <section className="relative">

        <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0  pointer-events-none" aria-hidden="true"></div>
        <div
            className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Top Picks</h2>
              <p className="text-gray-600">Check out our top destination picks now and start planning your next
                adventure!</p>
            </div>
            <div style={{display: "flex", alignItems: "center", overflowX: "scroll", scrollbarWidth: "none"}}>
              {picks.map((pick) => (
                  <Link key={pick.id} href={`/picks/${pick.id}`}>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mr-6 w-64 h-auto">
                      <Image
                          width={640}
                            height={480}
                          className="w-full h-48 object-cover" src={pick.image} alt="Card image cap"/>
                      <div className="px-6 py-4">
                        <div className="font-bold text-l mb-2">{pick.name}</div>
                        <p className="text-gray-700 text-base">{pick.description}</p>
                      </div>
                      <div className="px-2 pt-4 pb-2">
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                      </div>
                    </div>
                  </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}

export default Destinations;