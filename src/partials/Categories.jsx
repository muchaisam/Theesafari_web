import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';
import Category from './Category';

function Features() {

 

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-4">
            <h1 className="h2 mb-4">Explore the categories</h1>
            <p className="text-xl text-gray-600">From date nights, solo dates and weekend getaways.</p>
          </div>

          {/* Section content */}
          <div style={{ display: "flex", alignItems: "center", overflowX: "scroll", scrollbarWidth: "none" }}>
            <Category
              title="Parks and Gardens"
              image="https://images.unsplash.com/photo-1598941101837-e3fdd6d94b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmFpcm9iaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Category
              title="Cafes and Restaurants"
              image="https://images.unsplash.com/photo-1598941101837-e3fdd6d94b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmFpcm9iaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Category
              title="Museums and Galleries"
              image="https://images.unsplash.com/photo-1598941101837-e3fdd6d94b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmFpcm9iaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=609"
            />
            <Category
              title="Historical Sites and Landmarks"
              image="https://images.unsplash.com/photo-1598941101837-e3fdd6d94b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmFpcm9iaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Category
              title="Quiet Neighborhoods and Streets"
              image="https://images.unsplash.com/photo-1598941101837-e3fdd6d94b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmFpcm9iaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Category
              title="Wellness and Spa"
              image="https://images.unsplash.com/photo-1598941101837-e3fdd6d94b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmFpcm9iaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Category
              title="Nature Trails and Hikes"
              image="https://images.unsplash.com/photo-1598941101837-e3fdd6d94b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmFpcm9iaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Category
              title="Trio Mio"
              image="https://images.unsplash.com/photo-1598941101837-e3fdd6d94b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmFpcm9iaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />

            <Category
              title="Wakadinali"
              image="https://images.unsplash.com/photo-1598941101837-e3fdd6d94b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmFpcm9iaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />

          </div>

        </div >
      </div >
    </section >
  );
}

export default Features;
