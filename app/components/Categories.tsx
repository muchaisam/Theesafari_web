'use client';

import React, {useState, useEffect} from 'react';
import Category from './Category';
import {db} from '../firebase/firebase';
import {collection, getDocs} from 'firebase/firestore';
import Shimmer from "@/app/utils/Shimmer";

interface Category {
    id: string;
    name: string;
    image: string;
}

const Categories: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const getCategories = async () => {
            try {
                const categoriesCol = collection(db, "categories");
                const categorySnapshot = await getDocs(categoriesCol);
                const categoriesList: Category[] = categorySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }) as Category);
                setCategories(categoriesList);
                setLoading(false);
            } catch (err) {
                setError((err as Error).message);
                setLoading(false);
            }
        };

        getCategories();
    }, []);

    if (loading) {
        return <Shimmer/>; // Render the Shimmer component while loading
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <section className="relative">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-4">
                        <h1 className="h2 mb-4">Explore the categories</h1>
                        <p className="text-xl text-gray-600">From date nights, solo dates and weekend getaways.</p>
                    </div>
                    <div style={{display: "flex", alignItems: "center", overflowX: "scroll", scrollbarWidth: "none"}}>
                        {categories.map((category) => (
                            <Category
                                key={category.id}
                                title={category.name}
                                image={category.image}
                                alt={category.name}/> // Add alt text for screen readers
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories;