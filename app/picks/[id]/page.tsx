'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MapPin, Clock, Tag, Star, ChevronLeft,
    Calendar, AlertTriangle, Compass, Leaf, Info,
    Camera, Share2, Heart
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { DetailSkeleton } from '../../components/skeletons';
import { usePlace } from '../../hooks/useFirestore';

export default function PlacePage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const { place, loading, error } = usePlace(params.id);
    const [activeImage, setActiveImage] = useState(0);
    const [imageError, setImageError] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    // Get all images (primary + gallery)
    const allImages = place ? [place.primaryImage, ...place.imageGallery] : [];

    if (loading) {
        return <DetailSkeleton />;
    }

    if (error || !place) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <div className="flex-grow flex items-center justify-center bg-gray-50">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center p-8 max-w-md"
                    >
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
                            <AlertTriangle className="w-10 h-10 text-red-500" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-3">
                            {error || "Destination not found"}
                        </h1>
                        <p className="text-gray-600 mb-6">
                            We couldn&apos;t find this destination. It may have been removed or the link is incorrect.
                        </p>
                        <button
                            onClick={() => router.push('/')}
                            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 mr-1" />
                            Back to Home
                        </button>
                    </motion.div>
                </div>
            </div>
        );
    }

    const {
        basic_information,
        location_details,
        categorization,
        visit_details,
        cultural_information,
        environmental_data
    } = place;

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[500px]">
                {/* Background Image */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={imageError ? '/safari.webp' : allImages[activeImage]}
                            alt={basic_information.name}
                            fill
                            className="object-cover"
                            priority
                            onError={() => setImageError(true)}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => router.back()}
                    className="absolute top-24 left-6 flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-colors"
                >
                    <ChevronLeft className="w-5 h-5" />
                    Back
                </motion.button>

                {/* Action Buttons */}
                <div className="absolute top-24 right-6 flex gap-3">
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsLiked(!isLiked)}
                        className={`p-3 rounded-full backdrop-blur-md transition-colors ${isLiked ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
                            }`}
                    >
                        <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                    </motion.button>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="p-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-colors"
                    >
                        <Share2 className="w-5 h-5" />
                    </motion.button>
                </div>

                {/* Hero Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Category Badge */}
                            <span className="inline-flex items-center px-4 py-1.5 bg-teal-500/80 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4">
                                {categorization.primary_category}
                            </span>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                                {basic_information.name}
                            </h1>

                            {/* Location & Rating */}
                            <div className="flex flex-wrap items-center gap-4 text-white/90">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5" />
                                    <span>{location_details.county}, {location_details.region}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-amber-400 fill-current" />
                                    <span className="font-semibold">{basic_information.rating}</span>
                                    <span className="text-white/70">
                                        ({basic_information.estimated_reviews} reviews)
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Image Gallery Thumbnails */}
                {allImages.length > 1 && (
                    <div className="absolute bottom-6 right-6 flex gap-2">
                        {allImages.slice(0, 5).map((img, index) => (
                            <motion.button
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                onClick={() => setActiveImage(index)}
                                className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${activeImage === index
                                        ? 'border-white scale-110'
                                        : 'border-white/30 hover:border-white/60'
                                    }`}
                            >
                                <Image
                                    src={img}
                                    alt={`Gallery ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </motion.button>
                        ))}
                    </div>
                )}
            </section>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
                {/* Quick Info Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-20 relative z-10 mb-12"
                >
                    <QuickInfoCard
                        icon={<Clock className="w-6 h-6 text-teal-600" />}
                        label="Duration"
                        value={visit_details.estimated_duration.optimal}
                    />
                    <QuickInfoCard
                        icon={<Tag className="w-6 h-6 text-teal-600" />}
                        label="Difficulty"
                        value={visit_details.difficulty_level}
                    />
                    <QuickInfoCard
                        icon={<Calendar className="w-6 h-6 text-teal-600" />}
                        label="Best Time"
                        value={visit_details.best_time.time_of_day}
                    />
                    <QuickInfoCard
                        icon={<Compass className="w-6 h-6 text-teal-600" />}
                        label="Elevation"
                        value={`${environmental_data.elevation}m`}
                    />
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Description */}
                        <ContentCard title="About this Place">
                            <p className="text-gray-700 leading-relaxed">
                                {basic_information.detailed_description}
                            </p>
                        </ContentCard>

                        {/* Activities */}
                        {visit_details.popular_activities.length > 0 && (
                            <ContentCard title="Popular Activities">
                                <div className="flex flex-wrap gap-2">
                                    {visit_details.popular_activities.map((activity, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium"
                                        >
                                            {activity}
                                        </span>
                                    ))}
                                </div>
                            </ContentCard>
                        )}

                        {/* Cultural Information */}
                        <ContentCard title="Cultural Significance" icon={<Info className="w-5 h-5" />}>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">Historical Background</h4>
                                    <p className="text-gray-600">{cultural_information.historical_significance}</p>
                                </div>
                                {cultural_information.cultural_notes && (
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-1">Cultural Notes</h4>
                                        <p className="text-gray-600">{cultural_information.cultural_notes}</p>
                                    </div>
                                )}
                                {cultural_information.indigenous_people && cultural_information.indigenous_people !== 'N/A' && (
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-1">Indigenous People</h4>
                                        <p className="text-gray-600">{cultural_information.indigenous_people}</p>
                                    </div>
                                )}
                                {cultural_information.local_traditions.length > 0 && (
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-2">Local Traditions</h4>
                                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                                            {cultural_information.local_traditions.map((tradition, i) => (
                                                <li key={i}>{tradition}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </ContentCard>

                        {/* Environmental Data */}
                        <ContentCard title="Environmental Information" icon={<Leaf className="w-5 h-5" />}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Flora</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {environmental_data.flora.map((item, i) => (
                                            <span key={i} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                                                🌿 {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Fauna</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {environmental_data.fauna.map((item, i) => (
                                            <span key={i} className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm">
                                                🦁 {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <Leaf className="w-4 h-4 text-green-600" />
                                    <span className="font-medium text-gray-900">Conservation Status</span>
                                </div>
                                <p className="text-gray-600">{environmental_data.conservation_status}</p>
                            </div>
                            {environmental_data.environmental_notes && (
                                <p className="text-gray-600 mt-4 text-sm">
                                    {environmental_data.environmental_notes}
                                </p>
                            )}
                        </ContentCard>

                        {/* Photo Gallery */}
                        {place.imageGallery.length > 0 && (
                            <ContentCard title="Photo Gallery" icon={<Camera className="w-5 h-5" />}>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {place.imageGallery.map((img, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.02 }}
                                            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                                            onClick={() => setActiveImage(index + 1)}
                                        >
                                            <Image
                                                src={img}
                                                alt={`${basic_information.name} - Photo ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </ContentCard>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Pricing Card */}
                        {visit_details.cost_range && (
                            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Entry Fees</h3>
                                <div className="space-y-3">
                                    {visit_details.cost_range.adult_min && (
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Adult</span>
                                            <span className="font-medium">
                                                {visit_details.cost_range.currency} {visit_details.cost_range.adult_min}
                                                {visit_details.cost_range.adult_max && ` - ${visit_details.cost_range.adult_max}`}
                                            </span>
                                        </div>
                                    )}
                                    {visit_details.cost_range.child_min && (
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Child</span>
                                            <span className="font-medium">
                                                {visit_details.cost_range.currency} {visit_details.cost_range.child_min}
                                                {visit_details.cost_range.child_max && ` - ${visit_details.cost_range.child_max}`}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                {visit_details.cost_range.notes && (
                                    <p className="text-sm text-gray-500 mt-3">{visit_details.cost_range.notes}</p>
                                )}

                                <button className="w-full mt-6 py-3 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition-colors">
                                    Plan Your Visit
                                </button>
                            </div>
                        )}

                        {/* Location Card */}
                        <div className="bg-white rounded-2xl shadow-sm p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Location</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-teal-600 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-gray-900">{location_details.county}</p>
                                        <p className="text-gray-500">{location_details.region} Region</p>
                                    </div>
                                </div>
                                {location_details.nearby_landmarks.length > 0 && (
                                    <div>
                                        <p className="font-medium text-gray-900 mb-2">Nearby Landmarks</p>
                                        <ul className="space-y-1 text-gray-600">
                                            {location_details.nearby_landmarks.map((landmark, i) => (
                                                <li key={i}>• {landmark}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                <p className="text-gray-500 text-xs mt-3">
                                    {location_details.accessibility_notes}
                                </p>
                            </div>
                        </div>

                        {/* Tags */}
                        {categorization.tags.length > 0 && (
                            <div className="bg-white rounded-2xl shadow-sm p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {categorization.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Warnings */}
                        {visit_details.warnings && visit_details.warnings.length > 0 && (
                            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                                    <h3 className="text-lg font-semibold text-amber-800">Important Notes</h3>
                                </div>
                                <ul className="space-y-2 text-sm text-amber-700">
                                    {visit_details.warnings.map((warning, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-amber-500 mt-1">•</span>
                                            {warning}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Special Features */}
                        {categorization.special_features.length > 0 && (
                            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6">
                                <h3 className="text-lg font-semibold text-teal-800 mb-4">Special Features</h3>
                                <ul className="space-y-2 text-sm text-teal-700">
                                    {categorization.special_features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <span className="text-teal-500">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

// Quick Info Card Component
function QuickInfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <motion.div
            whileHover={{ y: -2 }}
            className="bg-white rounded-xl p-4 shadow-md"
        >
            <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-50 rounded-lg">
                    {icon}
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
                    <p className="font-semibold text-gray-900">{value}</p>
                </div>
            </div>
        </motion.div>
    );
}

// Content Card Component
function ContentCard({
    title,
    icon,
    children
}: {
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm p-6"
        >
            <div className="flex items-center gap-2 mb-4">
                {icon && <span className="text-teal-600">{icon}</span>}
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            </div>
            {children}
        </motion.div>
    );
}