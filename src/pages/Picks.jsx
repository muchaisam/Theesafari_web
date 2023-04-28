import { useEffect, React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Header from '../partials/Header';
import Banner from '../partials/Banner';

function Picks() {
  const { id } = useParams();
  const [pick, setPick] = useState(null);

  useEffect(() => {
    const picksRef = firebase.database().ref('picks').child(id);
    picksRef.on('value', (snapshot) => {
      const data = snapshot.val();
      setPick({ id, ...data });
    });

    return () => firebase.database().ref('picks').child(id).off();
  }, [id]);

  if (!pick)
    return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
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

export default Picks;