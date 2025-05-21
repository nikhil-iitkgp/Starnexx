import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const roles = ["Youtubers", "Podcasters", "Businesses", "Realtors", "Creators"];

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState(roles[0].slice(0, 1));
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const typingSpeed = 50;
  const pauseTime = 1000;
  const loopRef = useRef<any>(null);

  // Add Calendly script on component mount
  useEffect(() => {
    // Create a new script element
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      console.log('Calendly script loaded successfully in HeroSection');
    };
    script.onerror = (error) => {
      console.error('Error loading Calendly script in HeroSection:', error);
    };
    
    // Check if the script is already in the document
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    
    if (!existingScript) {
      document.body.appendChild(script);
    }
    
    return () => {
      // Clean up not needed as script might be used by other components
    };
  }, []);

  useEffect(() => {
    loopRef.current = setTimeout(
      () => {
        if (!deleting) {
          if (charIdx < roles[index].length) {
            setDisplayed(roles[index].slice(0, charIdx + 1));
            setCharIdx(charIdx + 1);
          } else {
            // Introduce a pause before starting deletion
            setTimeout(() => setDeleting(true), pauseTime);
          }
        } else {
          if (charIdx > 0) {
            setDisplayed(roles[index].slice(0, charIdx - 1));
            setCharIdx(charIdx - 1);
          } else {
            // Move to the next word and start typing
            setDeleting(false);
            setIndex((prev) => (prev + 1) % roles.length);
            setCharIdx(1); // Start typing from the first character
            setDisplayed(roles[index].slice(0, 1));
          }
        }
      },
      deleting ? typingSpeed * 0.7 : typingSpeed
    );
    return () => clearTimeout(loopRef.current);
  }, [charIdx, deleting, index, pauseTime, typingSpeed]);

  // This useEffect still correctly resets the displayed text and charIdx when the index changes
  useEffect(() => {
    if (!deleting) {
      setCharIdx(1);
      setDisplayed(roles[index].slice(0, 1));
    } else {
      setCharIdx(roles[index].length);
      setDisplayed(roles[index]);
    }
  }, [index, deleting]);

  // Function to open Calendly directly in a new tab
  const openCalendlyPopup = () => {
    window.open('https://calendly.com/creatorhub-edits/how-you-can-improve-your-online-presence?', '_blank');
  };

  // Animation variants for buttons
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.4)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.98 }
  };

  // Animation variant for arrow icon

  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-gradient-to-b from-white via-amber-50/40 to-amber-100/30">
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5" />
      <div className="relative w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col lg:flex-row items-center">
        {/* Left: Text */}
        <div className="flex-1 max-w-md lg:max-w-xl text-left mb-12 lg:mb-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            The Ultimate Video Editing Solution
            <br />
            <span className="inline-block mt-2">
              for{" "}
              <span className="text-amber-500">
                {displayed}
                <span className="border-r-2 border-amber-500 animate-blink ml-1" />
              </span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 mb-8"
          >
            Elevate your content and grow your audience with our professional
            video editing and channel management services.
          </motion.p>
          <div className="flex flex-wrap gap-4">
            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="relative"
            >
              <Button
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-full shadow-xl px-10 py-4 text-lg flex items-center gap-2 transition-all border-none scale-100 hover:scale-105 active:scale-95 duration-200"
                onClick={() => window.scrollTo(0, 0)}
                asChild={false}
              >
                <Link to="/contact" className="flex items-center gap-2 no-underline text-white">
                  Start My Edit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                variant="outline"
                className="border-2 border-amber-500 text-amber-600 bg-white/90 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-600 rounded-full px-8 py-3 text-base font-semibold transition-all shadow-md scale-100 hover:scale-105 active:scale-95 duration-200 book-call-btn"
                onClick={openCalendlyPopup}
              >
                Book A Call
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Right: Clean Video Player - Only visible on lg screens and up */}
        <div className="hidden lg:block lg:flex-1 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-[600px] mx-auto rounded-xl overflow-hidden shadow-xl"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/yI0R0xHSSz0?si=8Fz5Y0MtFBjxLRZu&autoplay=1&mute=1&loop=1&playlist=yI0R0xHSSz0&controls=1"
                title="Demo Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* Play button overlay - only visible on hover */}
            {isHovering && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-0 top-1/4 w-36 h-36 bg-gradient-to-r from-amber-300/30 to-amber-500/20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute right-0 bottom-1/4 w-48 h-48 bg-gradient-to-r from-amber-400/20 to-amber-300/30 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute left-1/4 bottom-0 w-24 h-24 bg-gradient-to-br from-amber-200/20 to-amber-300/10 rounded-full blur-3xl"
      />
      <style>{`.animate-blink { animation: blink-cursor 1.2s steps(1) infinite; } @keyframes blink-cursor { 0%,100%{opacity:1;} 50%{opacity:0;} }`}</style>
    </section>
  );
}
