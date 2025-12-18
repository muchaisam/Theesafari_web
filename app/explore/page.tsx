'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { GiWillowTree } from 'react-icons/gi';
import { ArrowLeft, Grid, MapPin, Star, Search, X, ChevronDown } from 'react-feather';
import { usePlaces, useCategories } from '../hooks/useFirestore';
import { Place } from '../types/place';
import { CardSkeletonList } from '../components/skeletons';

export default function ExplorePage() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get('category');

    const { places, loading } = usePlaces();
    const { categories } = useCategories();

    const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
    const [searchQuery, setSearchQuery] = useState('');
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

    // Update selected category when URL param changes
    useEffect(() => {
        setSelectedCategory(categoryParam);
    }, [categoryParam]);

    // Helper function to normalize category for comparison
    const normalizeCategory = (cat: string) => cat.toLowerCase().replace(/\s+/g, '-');

    // Filter places based on category and search
    const filteredPlaces = useMemo(() => {
        return places.filter(place => {
            // Compare normalized category IDs
            const placeCategory = place.categorization?.primary_category
                ? normalizeCategory(place.categorization.primary_category)
                : '';
            const matchesCategory = !selectedCategory || placeCategory === selectedCategory;

            const matchesSearch = !searchQuery ||
                place.basic_information?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                place.basic_information?.short_description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                place.location_details?.county?.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [places, selectedCategory, searchQuery]);

    // Get category info for the selected category
    const selectedCategoryInfo = categories.find(c => c.id === selectedCategory);

    // Category icon mapping
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
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2 text-gray-900 hover:text-teal-600 transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <GiWillowTree className="h-8 w-8 text-teal-500" />
                            <span className="text-lg font-bold hidden sm:inline">Theesafari</span>
                        </Link>

                        {/* Search Bar */}
                        <div className="flex-1 max-w-md mx-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search destinations..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-10 py-2.5 bg-gray-100 rounded-full border-0 focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Category Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                                className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                            >
                                <Grid className="w-4 h-4" />
                                <span className="hidden sm:inline text-sm font-medium">
                                    {selectedCategory || 'All Categories'}
                                </span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${showCategoryDropdown ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {showCategoryDropdown && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 max-h-96 overflow-y-auto z-50"
                                    >
                                        <button
                                            onClick={() => {
                                                setSelectedCategory(null);
                                                setShowCategoryDropdown(false);
                                            }}
                                            className={`w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 ${!selectedCategory ? 'bg-teal-50 text-teal-700' : ''
                                                }`}
                                        >
                                            <span className="text-xl">🌍</span>
                                            <span>All Categories</span>
                                            <span className="ml-auto text-sm text-gray-400">{places.length}</span>
                                        </button>
                                        {categories.map((category) => (
                                            <button
                                                key={category.id}
                                                onClick={() => {
                                                    setSelectedCategory(category.id);
                                                    setShowCategoryDropdown(false);
                                                }}
                                                className={`w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 ${selectedCategory === category.id ? 'bg-teal-50 text-teal-700' : ''
                                                    }`}
                                            >
                                                <span className="text-xl">{getCategoryIcon(category.name)}</span>
                                                <span className="truncate">{category.name}</span>
                                                <span className="ml-auto text-sm text-gray-400">{category.count}</span>
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section for Category */}
            {selectedCategory && selectedCategoryInfo && (
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="relative bg-gradient-to-br from-teal-600 to-emerald-700 text-white py-16"
                >
                    <div className="container mx-auto px-4 text-center">
                        <span className="text-5xl mb-4 block">{getCategoryIcon(selectedCategoryInfo.name)}</span>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">{selectedCategoryInfo.name}</h1>
                        <p className="text-white/80 text-lg">
                            Discover {selectedCategoryInfo.count} amazing {selectedCategoryInfo.count === 1 ? 'destination' : 'destinations'}
                        </p>
                    </div>
                    <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
                </motion.section>
            )}

            {/* Results Header */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            {selectedCategory ? selectedCategoryInfo?.name || selectedCategory : 'All Destinations'}
                        </h2>
                        <p className="text-gray-500 mt-1">
                            {filteredPlaces.length} {filteredPlaces.length === 1 ? 'place' : 'places'} found
                            {searchQuery && ` for "${searchQuery}"`}
                        </p>
                    </div>

                    {selectedCategory && (
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-teal-600 hover:bg-teal-50 rounded-full transition-colors"
                        >
                            <X className="w-4 h-4" />
                            Clear filter
                        </button>
                    )}
                </div>

                {/* Places Grid */}
                {loading ? (
                    <CardSkeletonList count={8} />
                ) : filteredPlaces.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-16"
                    >
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                            <Search className="w-10 h-10 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No destinations found</h3>
                        <p className="text-gray-500 mb-6">
                            Try adjusting your search or filter to find what you&apos;re looking for.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory(null);
                            }}
                            className="px-6 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors"
                        >
                            Show all destinations
                        </button>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filteredPlaces.map((place, index) => (
                                <PlaceCard key={place.id} place={place} index={index} />
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </div>
    );
}

// Place Card Component
function PlaceCard({ place, index }: { place: Place; index: number }) {
    const [imageError, setImageError] = useState(false);

    const mainImage = place.primaryImage || '/safari.webp';

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
        >
            <Link href={`/picks/${place.id}`} className="group block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                        <Image
                            src={imageError ? '/safari.webp' : mainImage}
                            alt={place.basic_information?.name || 'Destination'}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={() => setImageError(true)}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        {/* Category Badge */}
                        {place.categorization?.primary_category && (
                            <div className="absolute top-3 left-3">
                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full">
                                    {place.categorization.primary_category}
                                </span>
                            </div>
                        )}

                        {/* Rating */}
                        {place.basic_information?.rating && (
                            <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                <span className="text-xs font-semibold">{place.basic_information.rating}</span>
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors line-clamp-1">
                            {place.basic_information?.name}
                        </h3>
                        <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                            {place.basic_information?.short_description}
                        </p>

                        {/* Location */}
                        {place.location_details?.county && (
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                                <MapPin className="w-3.5 h-3.5" />
                                <span>{place.location_details.county}, Kenya</span>
                            </div>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
