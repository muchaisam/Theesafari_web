// Comprehensive TypeScript interfaces for Firestore Place documents

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface LocationDetails {
    coordinates: Coordinates;
    county: string;
    region: string;
    nearby_landmarks: string[];
    accessibility_notes: string;
}

export interface Categorization {
    primary_category: string;
    subcategories: string[];
    tags: string[];
    special_features: string[];
    seasonal_availability: string;
}

export interface BestTime {
    season?: string;
    months?: string[];
    weather_considerations?: string;
    time_of_day: string;
}

export interface EstimatedDuration {
    minimum?: string;
    maximum?: string;
    optimal: string;
}

export interface CostRange {
    adult_min?: number;
    adult_max?: number;
    child_min?: number;
    child_max?: number;
    currency: string;
    notes?: string;
}

export interface Amenities {
    on_site?: string[];
    nearby?: string[];
    accessibility?: string[];
}

export interface VisitDetails {
    best_time: BestTime;
    estimated_duration: EstimatedDuration;
    difficulty_level: string;
    cost_range: CostRange;
    popular_activities: string[];
    amenities: Amenities;
    warnings: string[];
}

export interface BasicInformation {
    name: string;
    detailed_description: string;
    short_description: string;
    rating: number;
    estimated_reviews: number;
    status: 'active' | 'inactive' | 'coming_soon';
}

export interface CulturalInformation {
    historical_significance: string;
    cultural_notes: string;
    local_traditions: string[];
    indigenous_people: string;
    languages_spoken?: string[];
}

export interface Climate {
    temperature?: string;
    humidity?: string;
    rainfall: string;
}

export interface EnvironmentalData {
    elevation: number;
    climate: Climate;
    flora: string[];
    fauna: string[];
    conservation_status: string;
    environmental_notes: string;
}

// Main Place interface
export interface Place {
    id: string;
    basic_information: BasicInformation;
    location_details: LocationDetails;
    categorization: Categorization;
    visit_details: VisitDetails;
    cultural_information: CulturalInformation;
    environmental_data: EnvironmentalData;
    primaryImage: string;
    imageGallery: string[];
}

// Derived category type for UI
export interface Category {
    id: string;
    name: string;
    count: number;
    image: string;
}

// Simplified Place card for listings
export interface PlaceCard {
    id: string;
    name: string;
    shortDescription: string;
    primaryImage: string;
    rating: number;
    reviewCount: number;
    county: string;
    region: string;
    primaryCategory: string;
    tags: string[];
}

// Helper function to transform Place to PlaceCard
export function toPlaceCard(place: Place): PlaceCard {
    return {
        id: place.id,
        name: place.basic_information.name,
        shortDescription: place.basic_information.short_description,
        primaryImage: place.primaryImage,
        rating: place.basic_information.rating,
        reviewCount: place.basic_information.estimated_reviews,
        county: place.location_details.county,
        region: place.location_details.region,
        primaryCategory: place.categorization.primary_category,
        tags: place.categorization.tags,
    };
}

// Helper function to derive categories from places
export function deriveCategories(places: Place[]): Category[] {
    const categoryMap = new Map<string, { count: number; image: string }>();

    places.forEach((place) => {
        const category = place.categorization.primary_category;
        const existing = categoryMap.get(category);

        if (existing) {
            existing.count++;
        } else {
            categoryMap.set(category, {
                count: 1,
                image: place.primaryImage,
            });
        }
    });

    return Array.from(categoryMap.entries()).map(([name, data]) => ({
        id: name.toLowerCase().replace(/\s+/g, '-'),
        name,
        count: data.count,
        image: data.image,
    }));
}
