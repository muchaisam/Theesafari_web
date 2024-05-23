import React, {useState, useEffect} from 'react';
import Category from './Category';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

interface Category {
    id: string;
    name: string;
    image: string;
}

const Categories: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
    // Retrieve data from Firestore
    const getCategories = async () => {
        const categoriesCol = collection(db, "categories");
        const categorySnapshot = await getDocs(categoriesCol);
        console.log('categorySnapshot', categorySnapshot); // Log the snapshot to see if data is being retrieved
        const categoriesList: Category[] = categorySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }) as Category);
        console.log('categoriesList', categoriesList); // Log the categories list to see if it's being created correctly
        setCategories(categoriesList);
    };

    getCategories();
}, []);


    return (
        <section className="relative">

            <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-4">
                        <h1 className="h2 mb-4">Explore the categories</h1>
                        <p className="text-xl text-gray-600">From date nights, solo dates and weekend getaways.</p>
                    </div>

                    <div style={{display: "flex", alignItems: "center", overflowX: "scroll", scrollbarWidth: "none"}}>
                        {categories.map((category) => (
                            <Category
                                key={category.id}
                                title={category.name}
                                image={category.image}/>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Categories;