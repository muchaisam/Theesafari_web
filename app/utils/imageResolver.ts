/**
 * Image Resolver Utility
 * Converts @image: references in Firestore to Firebase Storage URLs
 */

const FIREBASE_STORAGE_BUCKET = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;

// Base URL for Firebase Storage (using storage.googleapis.com format)
const getStorageBaseUrl = () => {
    if (!FIREBASE_STORAGE_BUCKET) {
        console.warn('Firebase Storage bucket not configured');
        return '';
    }
    // Using the storage.googleapis.com/{bucket} format
    return `https://storage.googleapis.com/${FIREBASE_STORAGE_BUCKET}`;
};

/**
 * Resolves an @image: reference to a full Firebase Storage URL
 * @param imageRef - The image reference from Firestore (e.g., "@image:main.jpg" or "@image:gallery/photo.jpg")
 * @param placeId - The place document ID (used as folder name in storage)
 * @returns Full Firebase Storage URL or placeholder if invalid
 */
export function resolveImageUrl(imageRef: string, placeId: string): string {
    // Return as-is if it's already a full URL
    if (imageRef.startsWith('http://') || imageRef.startsWith('https://')) {
        return imageRef;
    }

    // Check for @image: prefix
    if (!imageRef.startsWith('@image:')) {
        // If it's a relative path without prefix, assume it's in the place folder
        const path = `places/${placeId}/${imageRef}`;
        return `${getStorageBaseUrl()}/${path}`;
    }

    // Extract the image path after @image:
    const imagePath = imageRef.replace('@image:', '');

    // Build the full storage path: places/{placeId}/{imagePath}
    const fullPath = `places/${placeId}/${imagePath}`;

    return `${getStorageBaseUrl()}/${fullPath}`;
}

/**
 * Resolves all image references in a place document
 * @param place - The place object with @image: references
 * @returns Place object with resolved image URLs
 */
export function resolveAllImages<T extends { id: string; primaryImage: string; imageGallery: string[] }>(
    place: T
): T {
    return {
        ...place,
        primaryImage: resolveImageUrl(place.primaryImage, place.id),
        imageGallery: place.imageGallery.map((img) => resolveImageUrl(img, place.id)),
    };
}

/**
 * Placeholder image URL for loading states or errors
 * Using an existing image in the public folder
 */
export const PLACEHOLDER_IMAGE = '/safari.webp';

/**
 * Generate a blur data URL for image placeholders
 * This creates a simple gray blur placeholder
 */
export const BLUR_DATA_URL =
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABsRAAICAwEAAAAAAAAAAAAAAAECAAMEESEx/9oADAMBAAIRAxEAPwCdp2qXNhqcV7bzSRTxtuV0bBB/a2PSfNr7W9Ot7q8vJJ55oxI7yHJYkZJP3NKVZixW3QYOqKGqT//Z';

/**
 * Get optimized image URL with size parameters (for Firebase Storage)
 * Note: Firebase Storage doesn't support on-the-fly resizing like some CDNs,
 * but this is here for future use with a CDN or image processing service
 */
export function getOptimizedImageUrl(
    imageRef: string,
    placeId: string,
    _width?: number,
    _height?: number
): string {
    // For now, just return the resolved URL
    // In production, you might use a CDN with image optimization
    return resolveImageUrl(imageRef, placeId);
}
