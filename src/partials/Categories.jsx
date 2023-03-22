import React, { useState, useRef, useEffect } from 'react';
import Category from './Category';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { auth, db } from '../firebase/firebase';

function Categories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Retrieve data from Firebase database
    const categoriesRef = firebase.database().ref("categories");
    categoriesRef.on("value", (snapshot) => {
      const categoriesData = snapshot.val();
      const categoriesList = Object.keys(categoriesData).map((key) => ({
        id: key,
        ...categoriesData[key]
      }));
      setCategories(categoriesList);
    });

    return () => firebase.database().ref("categories").off();
  }, []);




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
            {categories.map((category) => (
              <Category
                key={category.id}
                title={category.name}
                image={category.image}
              />
            ))}
          </div>

        </div >
      </div >
    </section >
  );
}

export default Categories;
