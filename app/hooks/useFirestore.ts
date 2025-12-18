'use client';

import { useState, useEffect, useCallback } from 'react';
import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { Place, PlaceCard, Category, toPlaceCard, deriveCategories } from '../types/place';
import { resolveAllImages } from '../utils/imageResolver';

// Cache for places data to avoid redundant fetches
let placesCache: Place[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

/**
 * Hook to fetch all places from Firestore
 */
export function usePlaces() {
    const [places, setPlaces] = useState<Place[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPlaces = useCallback(async (forceRefresh = false) => {
        try {
            // Check cache first
            const now = Date.now();
            if (!forceRefresh && placesCache && (now - cacheTimestamp) < CACHE_DURATION) {
                setPlaces(placesCache);
                setLoading(false);
                return;
            }

            setLoading(true);
            const placesCollection = collection(db, 'places');
            const snapshot = await getDocs(placesCollection);

            const placesList = snapshot.docs.map((doc) => {
                const data = doc.data();
                const place = {
                    id: doc.id,
                    ...data,
                } as Place;
                return resolveAllImages(place);
            });

            // Update cache
            placesCache = placesList;
            cacheTimestamp = now;

            setPlaces(placesList);
            setError(null);
        } catch (err) {
            console.error('Error fetching places:', err);
            setError('Failed to load destinations. Please try again.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPlaces();
    }, [fetchPlaces]);

    const refresh = useCallback(() => {
        fetchPlaces(true);
    }, [fetchPlaces]);

    return { places, loading, error, refresh };
}

/**
 * Hook to fetch a single place by ID
 */
export function usePlace(placeId: string | null) {
    const [place, setPlace] = useState<Place | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!placeId) {
            setLoading(false);
            return;
        }

        const fetchPlace = async () => {
            try {
                setLoading(true);

                // Check if we have it in cache first
                if (placesCache) {
                    const cachedPlace = placesCache.find(p => p.id === placeId);
                    if (cachedPlace) {
                        setPlace(cachedPlace);
                        setLoading(false);
                        return;
                    }
                }

                const docRef = doc(db, 'places', placeId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const placeData = {
                        id: docSnap.id,
                        ...docSnap.data(),
                    } as Place;
                    setPlace(resolveAllImages(placeData));
                    setError(null);
                } else {
                    setError('Place not found');
                }
            } catch (err) {
                console.error('Error fetching place:', err);
                setError('Failed to load destination details.');
            } finally {
                setLoading(false);
            }
        };

        fetchPlace();
    }, [placeId]);

    return { place, loading, error };
}

/**
 * Hook to get place cards (simplified data for listings)
 */
export function usePlaceCards() {
    const { places, loading, error, refresh } = usePlaces();

    const placeCards: PlaceCard[] = places.map(toPlaceCard);

    return { placeCards, loading, error, refresh };
}

/**
 * Hook to derive categories from places
 */
export function useCategories() {
    const { places, loading, error } = usePlaces();

    const categories: Category[] = loading ? [] : deriveCategories(places);

    return { categories, loading, error };
}

/**
 * Hook to filter places by category
 */
export function usePlacesByCategory(categoryName: string | null) {
    const { places, loading, error } = usePlaces();

    const filteredPlaces = categoryName
        ? places.filter(p =>
            p.categorization.primary_category.toLowerCase() === categoryName.toLowerCase()
        )
        : places;

    return { places: filteredPlaces, loading, error };
}

/**
 * Hook to search places
 */
export function useSearchPlaces(searchTerm: string) {
    const { places, loading, error } = usePlaces();

    const searchResults = searchTerm.trim()
        ? places.filter(place => {
            const term = searchTerm.toLowerCase();
            return (
                place.basic_information.name.toLowerCase().includes(term) ||
                place.basic_information.short_description.toLowerCase().includes(term) ||
                place.location_details.county.toLowerCase().includes(term) ||
                place.location_details.region.toLowerCase().includes(term) ||
                place.categorization.tags.some(tag => tag.toLowerCase().includes(term))
            );
        })
        : places;

    return { results: searchResults, loading, error };
}

/**
 * Hook to get featured places (highest rated)
 */
export function useFeaturedPlaces(limit = 10) {
    const { places, loading, error } = usePlaces();

    const featured = [...places]
        .sort((a, b) => b.basic_information.rating - a.basic_information.rating)
        .slice(0, limit);

    return { featured, loading, error };
}
