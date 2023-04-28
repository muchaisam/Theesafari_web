import Card from "./Card";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { auth, db } from '../firebase/firebase';
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from 'react';

function Destinations() {

  const [picks, setPicks] = useState([]);

  useEffect(() => {
    // Retrieve data from Firebase database
    const picksRef = firebase.database().ref("picks");
    picksRef.on("value", (snapshot) => {
      const picksData = snapshot.val();
      const picksList = Object.keys(picksData).map((key) => ({
        id: key,
        ...picksData[key]
      }));
      setPicks(picksList);
    });

    return () => firebase.database().ref("picks").off();
  }, []);
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0  pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Top Picks</h2>
            <p className="text-gray-600">Check out our top destination picks now and start planning your next adventure!</p>
          </div>

          {/* Items */}

          <div style={{ display: "flex", alignItems: "center", overflowX: "scroll", scrollbarWidth: "none" }}>
          {picks.map((pick) => (
            <Link key={pick.id} to={`/picks/${pick.id}`}>
              <Card
                title={pick.name}
                image={pick.image}
              />
              </Link>
            ))}

          </div>


        </div>
      </div>
    </section>
  );
}

export default Destinations;
