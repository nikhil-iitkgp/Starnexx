/* cspell:disable */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Youtube } from 'lucide-react';

export interface LongformVideoProps {
  youtubeUrl: string;
}

export default function LongformVideoCard({ youtubeUrl }: LongformVideoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);

  // Extract YouTube video ID
  const getVideoId = (url: string): string | null => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match && match[1] ? match[1] : null;
  };

  // Get YouTube thumbnail
  const getThumbnail = (): string => {
    const videoId = getVideoId(youtubeUrl);
    return videoId 
      ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      : 'https://placehold.co/600x400/FDF2E9/F97316?text=YouTube+Video';
  };

  // Handle click on video
  const handleClick = () => {
    if (showEmbed) {
      // If embed is already shown, open in new tab
      window.open(youtubeUrl, '_blank');
    } else {
      // Show embed when clicked
      setShowEmbed(true);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-xl shadow-md bg-white border border-amber-100 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {showEmbed ? (
        // YouTube embed
        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${getVideoId(youtubeUrl)}?autoplay=1`}
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-xl"
          ></iframe>
        </div>
      ) : (
        // Thumbnail with play button
        <div 
          className="cursor-pointer aspect-video"
          onClick={handleClick}
        >
          <img
            src={getThumbnail()}
            alt="YouTube Video"
            className={`w-full h-full object-cover hover-scale${isHovered ? ' hovered' : ''}`}
          />
          
          {/* Overlay and play button */}
          <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center">
              <Play className="w-7 h-7 text-white" fill="white" />
            </div>
            
            {/* YouTube badge */}
            <div className="absolute bottom-3 right-3 bg-white/90 p-1.5 rounded-full">
              <Youtube className="w-5 h-5 text-red-600" />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
} 