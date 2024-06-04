import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  image: string;
  description: string;
  // tags: string[];
}

const Card: React.FC<CardProps> = ({ title, image, description }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mr-6 w-64 h-80"> {/* Add w-64 h-80 for standard width and height */}
      <Image className="w-full h-48"
             width={640}
             height={480}
             src={image} alt="Card image cap"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      {/*<div className="px-6 pt-4 pb-2">*/}
      {/*  {tags.map((tag, index) => (*/}
      {/*    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>*/}
      {/*  ))}*/}
      {/*</div>*/}
      <div className="px-2 pt-4 pb-2">
        <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
);

export default Card;