'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "react-feather";

interface ExploreCardProps {
    category: string;
    title: string;
    image: string;
    link: string;
    span?: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({ category, title, image, link, span }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={span}
    >
        <Link href={link} className="group relative block h-full min-h-[300px] overflow-hidden rounded-2xl">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <span className="text-teal-300 text-sm font-medium mb-2 uppercase tracking-wider">
                    {category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-teal-200 transition-colors">
                    {title}
                </h3>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md text-white text-sm font-medium rounded-full border border-white/20 group-hover:bg-teal-500 group-hover:border-teal-500 transition-all duration-300">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
            </div>
        </Link>
    </motion.div>
);

const Explore: React.FC = () => {
    const experiences = [
        {
            category: "Dining",
            title: "Culinary Adventures",
            description: "Discover hidden restaurants and authentic local cuisine",
            image: "/cereal.webp",
            link: "/explore?category=Dining Experience"
        },
        {
            category: "Nature",
            title: "Natural Wonders",
            description: "Explore waterfalls, forests, and scenic landscapes",
            image: "/waterfall.webp",
            link: "/explore?category=Nature Sanctuary"
        },
        {
            category: "Adventure",
            title: "Thrilling Experiences",
            description: "From hiking trails to water sports adventures",
            image: "/nbo.webp",
            link: "/explore?category=Adventure Park"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
                        ✨ Featured Experiences
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Unearth Kenya&apos;s Hidden Treasures
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Step off the well-trodden path and discover authentic experiences
                        that make Kenya truly unforgettable
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ExploreCard
                        category={experiences[0].category}
                        title={experiences[0].title}
                        image={experiences[0].image}
                        link={experiences[0].link}
                    />
                    <ExploreCard
                        category={experiences[1].category}
                        title={experiences[1].title}
                        image={experiences[1].image}
                        link={experiences[1].link}
                    />
                    <ExploreCard
                        category={experiences[2].category}
                        title={experiences[2].title}
                        image={experiences[2].image}
                        link={experiences[2].link}
                        span="md:col-span-2 lg:col-span-1"
                    />
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/explore"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-gray-900/20 group"
                    >
                        View All Destinations
                        <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default Explore;