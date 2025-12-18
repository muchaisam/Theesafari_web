'use client';

import React from 'react';
import { motion } from 'framer-motion';

const LandingLoader: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-teal-50 via-white to-orange-50 z-50 overflow-hidden">
            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-20 -right-20 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-20 -left-20 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Main content */}
            <div className="relative flex flex-col items-center justify-center min-h-screen px-4">
                {/* Logo/Brand area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">
                        Theesafari
                    </h1>
                </motion.div>

                {/* Animated loader */}
                <div className="relative mb-8">
                    {/* Outer ring */}
                    <motion.div
                        className="w-24 h-24 rounded-full border-4 border-teal-100"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    />

                    {/* Spinning arc */}
                    <motion.div
                        className="absolute inset-0 w-24 h-24 rounded-full border-4 border-transparent border-t-teal-500 border-r-teal-300"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Inner pulsing dot */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.div
                            className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full shadow-lg"
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </div>

                {/* Loading text with typing effect */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <motion.p
                        className="text-xl font-medium text-gray-700 mb-2"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        Discovering adventures...
                    </motion.p>
                    <p className="text-sm text-gray-500">
                        Finding hidden gems across Kenya
                    </p>
                </motion.div>

                {/* Animated dots */}
                <motion.div
                    className="flex gap-2 mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            className="w-2 h-2 bg-teal-400 rounded-full"
                            animate={{
                                y: [0, -8, 0],
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: index * 0.15,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Bottom decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-orange-400 to-teal-500">
                <motion.div
                    className="h-full bg-white/50"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ width: '50%' }}
                />
            </div>
        </div>
    );
};

export default LandingLoader;