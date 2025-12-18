'use client';

import React from 'react';
import { GiWillowTree } from 'react-icons/gi';

interface PlaceholderImageProps {
    className?: string;
    iconSize?: string;
    showText?: boolean;
    text?: string;
}

/**
 * Placeholder component to use when images fail to load or as loading state
 * Uses the Theesafari brand icon (GiWillowTree)
 */
export default function PlaceholderImage({
    className = '',
    iconSize = 'w-12 h-12',
    showText = false,
    text = 'Theesafari'
}: PlaceholderImageProps) {
    return (
        <div className={`flex flex-col items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-600 ${className}`}>
            <GiWillowTree className={`${iconSize} text-white/80`} />
            {showText && (
                <span className="mt-2 text-white/70 text-sm font-medium">{text}</span>
            )}
        </div>
    );
}

/**
 * Inline placeholder for use in conditional rendering
 */
export function PlaceholderDiv({ className = '' }: { className?: string }) {
    return (
        <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-600 ${className}`}>
            <GiWillowTree className="w-16 h-16 text-white/60" />
        </div>
    );
}
