'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
    className?: string;
}

// Base skeleton component with shimmer animation
export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
    <div
        className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded ${className}`}
        style={{
            animation: 'shimmer 1.5s ease-in-out infinite',
        }}
    />
);

// Card skeleton for destination cards
export const CardSkeleton: React.FC = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-none w-80 mr-6"
    >
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Image placeholder */}
            <Skeleton className="h-48 w-full rounded-none" />

            {/* Content */}
            <div className="p-4 space-y-3">
                {/* Title */}
                <Skeleton className="h-6 w-3/4" />

                {/* Description */}
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                </div>

                {/* Location */}
                <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 w-1/3" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 w-16" />
                </div>
            </div>
        </div>
    </motion.div>
);

// Multiple card skeletons for list
export const CardSkeletonList: React.FC<{ count?: number }> = ({ count = 4 }) => (
    <div className="flex overflow-x-hidden">
        {Array.from({ length: count }).map((_, index) => (
            <CardSkeleton key={index} />
        ))}
    </div>
);

// Category skeleton
export const CategorySkeleton: React.FC = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-none w-64 mr-6"
    >
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Skeleton className="h-40 w-full rounded-none" />
            <div className="p-4 space-y-2">
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-4 w-1/3" />
            </div>
        </div>
    </motion.div>
);

// Category skeleton list
export const CategorySkeletonList: React.FC<{ count?: number }> = ({ count = 5 }) => (
    <div className="flex overflow-x-hidden">
        {Array.from({ length: count }).map((_, index) => (
            <CategorySkeleton key={index} />
        ))}
    </div>
);

// Hero section skeleton for detail page
export const HeroSkeleton: React.FC = () => (
    <div className="relative h-[70vh] w-full">
        <Skeleton className="absolute inset-0 rounded-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 space-y-4">
            <Skeleton className="h-10 w-1/2 max-w-md" />
            <Skeleton className="h-6 w-1/3 max-w-xs" />
            <div className="flex gap-4">
                <Skeleton className="h-8 w-24 rounded-full" />
                <Skeleton className="h-8 w-32 rounded-full" />
            </div>
        </div>
    </div>
);

// Detail page content skeleton
export const DetailSkeleton: React.FC = () => (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Skeleton */}
        <HeroSkeleton />

        {/* Content Skeleton */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 shadow-sm space-y-2">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-5 w-full" />
                    </div>
                ))}
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
                <Skeleton className="h-7 w-40" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                </div>
            </div>

            {/* Activities */}
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
                <Skeleton className="h-7 w-48" />
                <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Skeleton key={i} className="h-8 w-24 rounded-full" />
                    ))}
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="space-y-4">
                <Skeleton className="h-7 w-32" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} className="h-40 rounded-xl" />
                    ))}
                </div>
            </div>
        </div>
    </div>
);

// Full page loading skeleton (for Landing page)
export const PageSkeleton: React.FC = () => (
    <div className="min-h-screen bg-gray-50">
        {/* Header skeleton */}
        <div className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
            <Skeleton className="h-8 w-32" />
            <div className="flex gap-4">
                <Skeleton className="h-6 w-20 hidden md:block" />
                <Skeleton className="h-6 w-20 hidden md:block" />
                <Skeleton className="h-6 w-20 hidden md:block" />
            </div>
            <Skeleton className="h-10 w-24 rounded-full" />
        </div>

        {/* Hero skeleton */}
        <div className="h-[60vh] relative">
            <Skeleton className="absolute inset-0 rounded-none" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 px-4">
                    <Skeleton className="h-12 w-64 mx-auto" />
                    <Skeleton className="h-6 w-96 mx-auto" />
                    <Skeleton className="h-12 w-40 mx-auto rounded-full" />
                </div>
            </div>
        </div>

        {/* Section skeleton */}
        <div className="max-w-6xl mx-auto px-4 py-16 space-y-4">
            <div className="text-center space-y-2">
                <Skeleton className="h-8 w-64 mx-auto" />
                <Skeleton className="h-5 w-96 mx-auto" />
            </div>
            <CardSkeletonList count={4} />
        </div>
    </div>
);

// Add shimmer keyframes via CSS-in-JS
const shimmerStyles = `
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.innerText = shimmerStyles;
    document.head.appendChild(styleSheet);
}

export default Skeleton;
