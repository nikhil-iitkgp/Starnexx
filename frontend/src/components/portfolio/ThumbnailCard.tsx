import { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, X } from 'lucide-react';

export interface ThumbnailProps {
  imageUrl: string;
}

export default function ThumbnailCard({ imageUrl }: ThumbnailProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-xl shadow-md bg-white border border-amber-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Thumbnail image with zoom effect */}
        <div 
          className="cursor-pointer aspect-video"
          onClick={handleClick}
        >
          <img
            src={imageUrl}
            alt="Thumbnail Design"
            className={`w-full h-full object-cover hover-scale${isHovered ? ' hovered' : ''}`}
          />
          
          {/* Overlay with zoom icon */}
          <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center">
              <ZoomIn className="w-7 h-7 text-white" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal for enlarged view */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={imageUrl} 
              alt="Enlarged Thumbnail" 
              className="w-full h-auto object-contain max-h-[80vh] rounded-lg" 
            />
            <button 
              className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white"
              onClick={closeModal}
              aria-label="Close thumbnail preview"
              title="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
} 