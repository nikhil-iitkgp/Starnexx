import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, X } from 'lucide-react';
import { createPortal } from 'react-dom';

export interface ThumbnailProps {
  imageUrl: string;
}

export default function ThumbnailCard({ imageUrl }: ThumbnailProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleClick = () => {
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Restore body scrolling
    document.body.style.overflow = '';
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  // Modal component that will be rendered via portal
  const Modal = () => {
    if (!isModalOpen) return null;
    
    return createPortal(
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999999,
          padding: '1rem'
        }}
        onClick={closeModal}
        aria-modal="true"
        role="dialog"
      >
        <div 
          style={{
            position: 'relative',
            maxWidth: '64rem',
            width: '100%'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <img 
            src={imageUrl} 
            alt="Enlarged Thumbnail" 
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              maxHeight: '80vh',
              borderRadius: '0.5rem'
            }}
          />
          <button
            onClick={closeModal}
            style={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              backgroundColor: '#F59E0B',
              color: 'white',
              borderRadius: '9999px',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
            aria-label="Close"
          >
            <X style={{ width: '1.25rem', height: '1.25rem' }} />
          </button>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-xl shadow-md bg-white border border-amber-100 card-adjust transform-gpu"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Thumbnail image with zoom effect */}
        <div 
          className="cursor-pointer aspect-video relative bg-gray-100"
          onClick={handleClick}
        >
          {/* Loading placeholder */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center img-loading-placeholder" />
          )}
          
          <img
            src={imageUrl}
            alt="Thumbnail Design"
            className={`w-full h-full object-cover hover-scale transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${isHovered ? 'hovered' : ''}`}
            onLoad={handleImageLoad}
            loading="lazy"
          />
          
          {/* Overlay with zoom icon - always visible on mobile for better UX */}
          <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered || isMobile ? 'opacity-80' : 'opacity-0'}`}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-500 flex items-center justify-center">
              <ZoomIn className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Render modal using portal */}
      <Modal />
    </>
  );
} 