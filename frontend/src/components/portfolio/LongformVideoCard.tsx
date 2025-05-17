/* cspell:disable */
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export interface LongformVideoProps {
  youtubeUrl: string;
}

export default function LongformVideoCard({ youtubeUrl }: LongformVideoProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [, setIsHovered] = useState(false);

  // Extract YouTube video ID
  const getVideoId = (url: string): string | null => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match && match[1] ? match[1] : null;
  };

  // Get YouTube embed URL with autoplay, mute, loop
  const getEmbedUrl = () => {
    const id = getVideoId(youtubeUrl);
    return id
      ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}`
      : '';
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-xl shadow-md bg-white border border-amber-100 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Always show the YouTube embed, autoplay, muted, loop */}
      <div className="aspect-video w-full relative">
        <iframe
          ref={iframeRef}
          src={getEmbedUrl()}
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-xl"
        ></iframe>
      </div>
    </motion.div>
  );
} 