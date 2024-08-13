'use client';

import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Users, Calendar } from "react-feather";

interface CategoryProps {
  id: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  location: string;
  groupSize: string;
  duration: string;
}

const Category: React.FC<CategoryProps> = memo(({ id, title, image, alt, description, location, groupSize, duration }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <Link href={`/categories/${id}`} className="block">
        <div className="relative h-48">
          <Image
              alt={alt}
              src={image}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
          />
        </div>

        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

          <div className="flex flex-col space-y-2 text-sm text-gray-500">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-indigo-600" />
              <span>{location}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-indigo-600" />
              <span>{groupSize}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-indigo-600" />
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
));

Category.displayName = "Category";

export default Category;