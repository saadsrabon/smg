import React from 'react';

// Import all images directly (update paths to match your actual files)
import Arc1 from '../assets/constructionGallery/architecture Gallery/arc-1.jpg';
import Arc2 from '../assets/constructionGallery/architecture Gallery/arc-2.jpg';
import Arc3 from '../assets/constructionGallery/architecture Gallery/arc-3.jpg';
import Arc4 from '../assets/constructionGallery/architecture Gallery/arc-4.jpg';
import Arc5 from '../assets/constructionGallery/architecture Gallery/arc-5.jpg';
import Arc6 from '../assets/constructionGallery/architecture Gallery/arc-6.jpg';
import Arc7 from '../assets/constructionGallery/architecture Gallery/arc-7.jpg';

import Elec1 from '../assets/constructionGallery/electrical/elc-1.jpg';
import Elec2 from '../assets/constructionGallery/electrical/elc-2.jpg';
import Elec3 from '../assets/constructionGallery/electrical/elc-3.jpg';

import Plumb1 from '../assets/constructionGallery/plumbing/plmb-1.jpg';
import Plumb2 from '../assets/constructionGallery/plumbing/plmb-2.jpg';

import Struct1 from '../assets/constructionGallery/structural/building_foundation_1.webp';
import Struct2 from '../assets/constructionGallery/structural/building_foundation_4.webp';
import Struct3 from '../assets/constructionGallery/structural/PHOTO-2023-10-09-07-20-41.webp';
import Struct4 from '../assets/constructionGallery/structural/PHOTO-2023-10-17-06-44-5222222.webp';
import Struct5 from '../assets/constructionGallery/structural/PHOTO-2024-03-18-00-29-22.webp';
import Struct6 from '../assets/constructionGallery/structural/PHOTO-2024-06-19-06-26-53.webp';
import Struct7 from '../assets/constructionGallery/structural/PHOTO-2024-08-19-03-28-03.webp';
import Struct8 from '../assets/constructionGallery/structural/struc-1.jpg';

import { useState } from 'react';

const StaticConstructionGallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
    // Group imported images
    const categories = [
        {
            name: "Structural",
            icon: "🏗️",
            images: [Struct1, Struct2, Struct3, Struct4, Struct5, Struct6, Struct7, Struct8]
        },
        {
            name: "Architecture",
            icon: "🏛️",
            images: [Arc1, Arc2, Arc3, Arc4, Arc5, Arc6, Arc7]
        },
        {
            name: "Electrical",
            icon: "⚡",
            images: [Elec1, Elec2, Elec3]
        },
        {
            name: "Plumbing",
            icon: "🚿",
            images: [Plumb1, Plumb2]
        },

    ];

    return (
        <>
            <section className="py-12 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Construction Progress</h2>

                {categories.map((category) => (
                    <div key={category.name} className="mb-12">
                        <div className="flex items-center mb-4">
                            <span className="text-2xl mr-2">{category.icon}</span>
                            <h3 className="text-xl font-semibold">
                                {category.name} ({category.images.length} photos)
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {category.images.map((image, index) => (
                                <div
                                    key={index}
                                    className="aspect-square overflow-hidden rounded-lg border border-gray-200 cursor-pointer"
                                    onClick={() => setFullscreenImage(image)}
                                >
                                    <img
                                        src={image}
                                        alt={`${category.name} photo ${index + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* Fullscreen overlay - appears when an image is clicked */}
            {fullscreenImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
                    onClick={() => setFullscreenImage(null)}
                >
                    <img
                        src={fullscreenImage}
                        className="max-h-full max-w-full object-contain"
                        alt="Fullscreen view"
                    />
                </div>
            )}
        </>
    );
};

export default StaticConstructionGallery;