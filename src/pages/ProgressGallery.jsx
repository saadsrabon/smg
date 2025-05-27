import React from 'react';
import Image1 from '../assets/progressGallery/Screenshot 2025-05-28 003732..jpg'
import Image2 from '../assets/progressGallery/Screenshot 2025-05-28 003920.png'
import Image3 from '../assets/progressGallery/Screenshot 2025-05-28 004159.png'
import Image4 from '../assets/progressGallery/Screenshot 2025-05-28 004740.png'
import { ArrowLeft, } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProgressGallery = () => {

    return (
        <section className="px-4 py-12 bg-white">
            <div className="mb-6">
                <Link
                    to=".."
                    relative="path" 
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors btn"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Go Back
                </Link>
            </div>
            <div className="max-w-7xl mx-auto">
                {/* Simple Grid Layout */}
                <div className="grid grid-cols-2  gap-3">

                    <div className="aspect-square overflow-hidden relative group">
                        <img
                            src={Image1}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="aspect-square overflow-hidden relative group">
                        <img
                            src={Image2}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="aspect-square overflow-hidden relative group">
                        <img
                            src={Image3}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="aspect-square overflow-hidden relative group">
                        <img
                            src={Image4}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProgressGallery;