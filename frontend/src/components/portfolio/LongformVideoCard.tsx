/* cspell:disable */
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export interface LongformVideoProps {
  youtubeUrl: string;
}

export default function LongformVideoCard({ youtubeUrl }: LongformVideoProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Extract YouTube video ID
  const getVideoId = (url: string): string | null => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match && match[1] ? match[1] : null;
  };

  // Get YouTube embed URL with autoplay, mute, loop, and clean UI
  const getEmbedUrl = () => {
    const id = getVideoId(youtubeUrl);
    return id
      ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&rel=0&modestbranding=1&iv_load_policy=3&fs=1&controls=1`
      : '';
  };


  // Get thumbnail URL
  useEffect(() => {
    const videoId = getVideoId(youtubeUrl);
    if (videoId) {
      // Try to get the highest quality thumbnail
      setThumbnailUrl(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
    }
  }, [youtubeUrl]);

  // Set up IntersectionObserver for lazy loading
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 0.1,
      }
    );
    
    observer.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-xl shadow-md bg-white border border-amber-100 h-full transform-gpu will-change-transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video w-full relative bg-gray-100">
        {/* Thumbnail while loading or not visible */}
        {(!isLoaded || !isVisible) && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            {thumbnailUrl && (
              <img 
                src={thumbnailUrl} 
                alt="Video thumbnail" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-amber-500/90 flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        )}
        
        {/* YouTube iframe - only load when visible */}
        {isVisible && (
          <iframe
            ref={iframeRef}
            src={getEmbedUrl()}
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={`w-full h-full rounded-xl ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          ></iframe>
        )}
      </div>
      
      {/* Optional hover effect */}
      {isHovered && isLoaded && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"
        />
      )}
    </motion.div>
  );
} 