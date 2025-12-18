'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Star, MapPin, Download } from 'react-feather';
import { GiWillowTree } from 'react-icons/gi';

const CTA: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-white"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 border border-white/20">
                            <Smartphone className="w-4 h-4" />
                            Available on Android
                        </span>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            Take Kenya&apos;s Hidden Gems
                            <span className="block text-teal-200">Wherever You Go</span>
                        </h2>

                        <p className="text-lg text-white/80 mb-8 max-w-lg">
                            Download the Theesafari app for offline access to detailed guides,
                            exclusive tips from locals, and personalized recommendations.
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {[
                                { icon: MapPin, text: 'Offline Maps' },
                                { icon: Star, text: 'Save Favorites' },
                                { icon: Download, text: 'Download Guides' },
                                { icon: Smartphone, text: 'Free to Use' },
                            ].map((feature, index) => (
                                <motion.div
                                    key={feature.text}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <feature.icon className="w-5 h-5 text-teal-200" />
                                    </div>
                                    <span className="text-sm font-medium">{feature.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.a
                            href="https://play.google.com/store/apps/details?id=app.kodinova.theesafari"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 bg-white text-teal-700 px-8 py-4 rounded-2xl font-semibold hover:bg-teal-50 transition-all duration-300 shadow-xl shadow-black/20 group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-center gap-3">
                                <svg viewBox="0 0 24 24" className="w-8 h-8">
                                    <path
                                        fill="currentColor"
                                        d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
                                    />
                                </svg>
                                <div className="text-left">
                                    <span className="text-xs text-teal-600 block">Get it on</span>
                                    <span className="text-lg">Google Play</span>
                                </div>
                            </div>
                            <span className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </motion.a>
                    </motion.div>

                    {/* App Preview Images */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative">
                            {/* Phone mockup frame */}
                            <div className="relative mx-auto w-64">
                                <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                                    <div className="bg-gradient-to-br from-teal-400 to-emerald-600 rounded-[2.5rem] overflow-hidden h-[500px] flex flex-col items-center justify-center">
                                        <GiWillowTree className="w-24 h-24 text-white mb-4" />
                                        <span className="text-white text-2xl font-bold">Theesafari</span>
                                        <span className="text-white/70 text-sm mt-2">Discover Kenya</span>
                                    </div>
                                </div>
                                {/* Decorative notch */}
                                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-full" />
                            </div>

                            {/* Floating cards */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="absolute -left-8 top-1/4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3"
                            >
                                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-teal-600" />
                                </div>
                                <div>
                                    <span className="text-xs text-gray-500 block">Explore</span>
                                    <span className="text-sm font-semibold text-gray-900">100+ Places</span>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 }}
                                className="absolute -right-4 bottom-1/3 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3"
                            >
                                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                                    <Star className="w-5 h-5 text-yellow-600" />
                                </div>
                                <div>
                                    <span className="text-xs text-gray-500 block">Rated</span>
                                    <span className="text-sm font-semibold text-gray-900">4.8 Stars</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default CTA;