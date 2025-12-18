'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Grid } from 'react-feather';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Category } from '../types/place';
import { CategorySkeletonList } from './skeletons';

interface CategoriesProps {
    categories: Category[];
    loading?: boolean;
}

const Categories: React.FC<CategoriesProps> = ({ categories, loading = false }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
    const router = useRouter();

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -280 : 280;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleCategoryClick = (categoryId: string) => {
        router.push(`/explore?category=${categoryId}`);
    };

    const handleImageError = (categoryId: string) => {
        setImageErrors(prev => new Set(prev).add(categoryId));
    };

    // Category icons mapping
    const getCategoryIcon = (categoryName: string) => {
        const iconMap: { [key: string]: string } = {
            'Adventure Park': '🎢',
            'Sacred Site': '🏛️',
            'Geological Formation': '🏔️',
            'Cultural Heritage Site': '🎭',
            'Cultural Site': '🎨',
            'Nature Sanctuary': '🌿',
            'Historical Site': '📜',
            'Natural Heritage': '🌲',
            'Dining Experience': '🍽️',
            'Natural Landmark': '⛰️',
            'Archaeological Site': '🔍',
            'Historical Museum': '🏛️',
            'Nature Reserve': '🦁',
            'Fine Dining': '✨',
            'Family Entertainment': '👨‍👩‍👧‍👦',
            'Bar & Lounge': '🍸',
            'Restaurant': '🍴',
            'Indoor Recreation': '🎮',
            'Outdoor Adventure': '🏕️',
        };
        return iconMap[categoryName] || '📍';
    };

    return (
        <section id="categories" className="relative py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
                        <Grid className="w-4 h-4" />
                        Browse by Category
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Explore by Experience
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        From date nights to solo adventures and weekend getaways
                    </p>
                </motion.div>

                {loading ? (
                    <CategorySkeletonList count={5} />
                ) : (
                    <div className="relative">
                        {/* Left scroll button */}
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg z-10 focus:outline-none hover:bg-gray-50 transition-colors hidden md:block"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>

                        {/* Scrollable container */}
                        <div
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-5 pb-4 -mx-4 px-4"
                            style={{ scrollBehavior: 'smooth' }}
                        >
                            {categories.map((category, index) => (
                                <motion.div
                                    key={category.id}
                                    onClick={() => handleCategoryClick(category.id)}
                                    className="flex-none w-64 snap-start cursor-pointer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
                                        {/* Image */}
                                        <div className="relative h-36 overflow-hidden">
                                            <Image
                                                src={imageErrors.has(category.id) ? '/safari.webp' : category.image}
                                                alt={category.name}
                                                fill
                                                className="object-cover transition-transform duration-500 hover:scale-110"
                                                onError={() => handleImageError(category.id)}
                                                sizes="256px"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                                            {/* Icon overlay */}
                                            <div className="absolute bottom-3 left-3 w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md text-xl">
                                                {getCategoryIcon(category.name)}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-4">
                                            <h3 className="text-base font-semibold text-gray-900 mb-1">
                                                {category.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {category.count} {category.count === 1 ? 'destination' : 'destinations'}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Right scroll button */}
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg z-10 focus:outline-none hover:bg-gray-50 transition-colors hidden md:block"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Categories;