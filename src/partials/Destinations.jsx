import React from 'react';
import Card from "./Card";

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0  pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Popular Destinations</h2>
            <p className="text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div>

          {/* Items */}

          <div style={{ display: "flex", alignItems: "center", overflowX: "scroll", scrollbarWidth: "none" }}>
            <Card
              title="The Kaneda"
              image="https://images.unsplash.com/photo-1599555217300-2952310d238e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpcm9iaSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              location="https://open.spotify.com/track/2f90V3j7olJdSjZv4g2nrG?si=1lsI1tTIQZi0iN-swYCwvQ"
            />
            <Card
              title="Rekles"
              image="https://images.unsplash.com/photo-1599555217300-2952310d238e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpcm9iaSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              location="https://open.spotify.com/track/2f90V3j7olJdSjZv4g2nrG?si=1lsI1tTIQZi0iN-swYCwvQ"
            />
            <Card
              title="Kenrazy"
              image="https://images.unsplash.com/photo-1599555217300-2952310d238e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpcm9iaSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              location="https://open.spotify.com/artist/5A7XrYtOkfJOaGyg1fj1ez?si=gcDrVpGCSxiqGhQJ_rwQAg"
            />
            <Card
              title="Ch'cco"
              image="https://images.unsplash.com/photo-1599555217300-2952310d238e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpcm9iaSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              location="https://open.spotify.com/track/7JtWy2vvKVXLaymyTXUJ0K?si=5UTeKlghQZq18cX_zhresg"
            />
            <Card
              title="Buruklyn Boyz"
              image="https://images.unsplash.com/photo-1599555217300-2952310d238e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpcm9iaSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              location="https://open.spotify.com/track/4xIFdWcoMb9MqLYpvS8uCy?si=nUVwM82JTgWUXniieO2GLg"
            />
            <Card
              title="AjeButter22"
              image="https://images.unsplash.com/photo-1599555217300-2952310d238e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpcm9iaSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              location="https://open.spotify.com/track/4fA1ca0O5tOOYDWt1n0z2d?si=28f3b632f5b24625"
            />
            <Card
              title="T.I.E.M"
              image="https://images.unsplash.com/photo-1599555217300-2952310d238e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpcm9iaSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              location="https://open.spotify.com/track/7K8bQsvWhJ8apmdiUm7TUx?si=rSjPRC5kRE2-qRTh05WZ-Q"
            />
            <Card
              title="Trio Mio"
              image="https://images.unsplash.com/photo-1599555217300-2952310d238e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpcm9iaSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              location="https://open.spotify.com/artist/1YSv5pS7iY49Ech2SfHryX?si=WH9Yb3EWTNS4_Kq5EQEtoQ&utm_source=copy-link"
            />

            <Card
              title="Wakadinali"
              image="https://images.unsplash.com/photo-1599555217300-2952310d238e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpcm9iaSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              location="https://open.spotify.com/artist/10jefIr7Jj7c0dDJEqRcWK?si=wijrTYicScK559XW_gmiXw&utm_source=copy-link"
            />

          </div>


        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
