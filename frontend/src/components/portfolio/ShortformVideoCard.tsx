import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Volume2, VolumeX } from 'lucide-react';

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
  const [isMuted, setIsMuted] = useState(true);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Generate thumbnail
  useEffect(() => {
    const video = document.createElement('video');
    video.crossOrigin = 'anonymous';
    video.src = videoUrl;

    video.addEventListener('loadedmetadata', () => {
      video.currentTime = 0.1;
    });

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

    video.addEventListener('error', () => {
      console.error('Error loading video for thumbnail extraction');
      setThumbnailUrl('/shortformvideos/default-thumb.jpg');
    });

    video.load();

    return () => {
      video.removeAttribute('src');
      video.load();
    };
  }, [videoUrl]);

  // Observe visibility
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
        threshold: 0.3,
      }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Autoplay when visible
  useEffect(() => {
    if (isVisible && videoRef.current && !isPlaying) {
      const timeoutId = setTimeout(() => {
        videoRef.current?.play().then(() => {
          setIsPlaying(true);
        }).catch(err => {
          console.error("Error playing video:", err);
        });
      }, Math.random() * 500);

      return () => clearTimeout(timeoutId);
    } else if (!isVisible && videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isVisible, isPlaying]);

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

  const handleSourceClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (originalSource) {
      window.open(originalSource, '_blank', 'noopener,noreferrer');
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(prev => {
      const newMuted = !prev;
      if (videoRef.current) {
        videoRef.current.muted = newMuted;
      }
      return newMuted;
    });
  };

  return (
    <>
      <canvas ref={canvasRef} className="hidden" />

      <motion.div
        ref={containerRef}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-xl aspect-[9/16] min-w-[180px] sm:min-w-[220px] md:min-w-[240px] max-w-[280px] mx-auto mb-4 sm:mb-6"
        style={{ backgroundColor: 'transparent' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <video
          ref={videoRef}
          src={videoUrl}
          poster={thumbnailUrl || undefined}
          muted={isMuted}
          playsInline
          loop
          className="w-full h-full object-cover rounded-xl"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          preload="metadata"
        />

        {/* Overlay when paused */}
        {!isPlaying && (
          <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-80'}`}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-500 flex items-center justify-center">
              <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="white" />
            </div>

            {/* Redirect Icon (ExternalLink) - always visible if originalSource exists */}
            {originalSource && (
              <div 
                className="absolute bottom-3 right-3 bg-white/90 p-1.5 rounded-full hover:bg-white cursor-pointer touch-feedback"
                onClick={handleSourceClick}
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
              </div>
            )}

            {/* Mute Button */}
            <div
              className="absolute bottom-3 left-3 bg-white/90 p-1.5 rounded-full hover:bg-white cursor-pointer touch-feedback"
              onClick={toggleMute}
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
              ) : (
                <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
              )}  
            </div>
          </div>
        )}

        {/* Overlay when playing */}
        {isPlaying && (
          <>
            <div className="absolute bottom-3 right-3 flex gap-2">
              {originalSource && (
                <div 
                  className="bg-white/90 p-1.5 rounded-full hover:bg-white cursor-pointer touch-feedback"
                  onClick={handleSourceClick}
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                </div>
              )}
            </div>

            {/* Mute Button when playing */}
            <div
              className="absolute bottom-3 left-3 bg-white/90 p-1.5 rounded-full hover:bg-white cursor-pointer touch-feedback"
              onClick={toggleMute}
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
              ) : (
                <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
              )}
            </div>
          </>
        )}
      </motion.div>
    </>
  );
}
