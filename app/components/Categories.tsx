'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
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
    const [scrollPosition, setScrollPosition] = useState(0);

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

    const scroll = (direction: 'left' | 'right') => {
        const container = document.getElementById('categories-container');
        if (container) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            setScrollPosition(container.scrollLeft + scrollAmount);
        }
    };

    if (loading) {
        return <Shimmer />;
    }

    if (error) {
        return <div className="text-red-500 text-center py-8">Error: {error}</div>;
    }

    return (
        <section className="relative py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore the categories</h2>
                    <p className="text-xl text-gray-600">From date nights to solo adventures and weekend getaways.</p>
                </motion.div>
                <div className="relative">
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 focus:outline-none"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <div
                        id="categories-container"
                        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {categories.map((category) => (
                            <motion.div
                                key={category.id}
                                className="flex-none w-64 mr-6 snap-start"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-40 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 focus:outline-none"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Categories;