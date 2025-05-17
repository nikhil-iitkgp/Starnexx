import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Instagram, ExternalLink } from 'lucide-react';

export interface ShortformVideoProps {
  videoUrl: string;  // Local path to video file
  originalSource?: string;  // Original Instagram URL for attribution
}

export default function ShortformVideoCard({ 
  videoUrl, 
  originalSource 
}: ShortformVideoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Generate thumbnail from video on mount
  useEffect(() => {
    const video = document.createElement('video');
    video.crossOrigin = 'anonymous';
    video.src = videoUrl;
    
    // Once metadata is loaded, seek to 0.1 seconds and capture thumbnail
    video.addEventListener('loadedmetadata', () => {
      video.currentTime = 0.1;
    });
    
    // When the frame at 0.1 seconds is available, capture it
    video.addEventListener('seeked', () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL('image/jpeg');
          setThumbnailUrl(dataUrl);
        }
      }
    });
    
    // Handle loading errors
    video.addEventListener('error', () => {
      console.error('Error loading video for thumbnail extraction');
      setThumbnailUrl('/shortformvideos/default-thumb.jpg');
    });
    
    video.load();
    
    return () => {
      // Cleanup
      video.removeAttribute('src');
      video.load();
    };
  }, [videoUrl]);

  // Set up IntersectionObserver to detect when the video is visible
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // When 50% of the video is visible
      }
    );
    
    observer.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  // Autoplay video when it becomes visible
  useEffect(() => {
    if (isVisible && videoRef.current && !isPlaying) {
      // Add a small delay to stagger the videos starting
      const timeoutId = setTimeout(() => {
        videoRef.current?.play().then(() => {
          setIsPlaying(true);
        }).catch(err => {
          console.error("Error playing video:", err);
        });
      }, Math.random() * 500); // Random delay up to 500ms
      
      return () => clearTimeout(timeoutId);
    } else if (!isVisible && videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isVisible, isPlaying]);

  // Handle video click
  const handleClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => {
          console.error("Error playing video:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle opening original source
  const handleSourceClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (originalSource) {
      window.open(originalSource, '_blank');
    }
  };

  return (
    <>
      {/* Hidden canvas for thumbnail generation */}
      <canvas ref={canvasRef} className="hide" />
      
      <motion.div
        ref={containerRef}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-xl shadow-md bg-transparent border border-amber-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Container with portrait aspect ratio */}
        <div 
          className="portrait-video-container cursor-pointer portrait-aspect"
          onClick={handleClick}
        >
          {/* Video element */}
          <video
            ref={videoRef}
            src={videoUrl}
            poster={thumbnailUrl || undefined}
            muted
            playsInline
            loop
            className="w-full h-full object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          
          {/* Play/pause overlay */}
          {!isPlaying && (
            <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center">
                <Play className="w-7 h-7 text-white" fill="white" />
              </div>
              
              {/* Instagram badge */}
              {originalSource && (
                <div 
                  className="absolute bottom-3 right-3 bg-white/90 p-1.5 rounded-full hover:bg-white cursor-pointer"
                  onClick={handleSourceClick}
                >
                  <Instagram className="w-5 h-5 text-pink-600" />
                </div>
              )}
            </div>
          )}
          
          {/* Pause indicator when playing */}
          {isPlaying && isHovered && (
            <div className="absolute bottom-3 right-3 flex gap-2">
              {originalSource && (
                <div 
                  className="bg-white/90 p-1.5 rounded-full hover:bg-white cursor-pointer"
                  onClick={handleSourceClick}
                >
                  <ExternalLink className="w-5 h-5 text-amber-600" />
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
} 