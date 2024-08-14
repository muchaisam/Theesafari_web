import React from 'react';
import { motion } from 'framer-motion';

const LandingLoader: React.FC = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
            <motion.div
                className="w-20 h-20 border-t-4 border-b-4 border-red-400 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute text-2xl font-bold text-red-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            >
                Loading Adventures...
            </motion.div>
        </div>
    );
};

export default LandingLoader;