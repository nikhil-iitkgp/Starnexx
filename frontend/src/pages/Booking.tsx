import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Booking() {
  // This effect adds the Calendly script when the component mounts
  useEffect(() => {
    // Add Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/40 to-amber-100/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book a Discovery Call
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule a call with our team to discuss your video editing needs and how we can help you create stunning content.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white p-6 rounded-xl shadow-lg border border-amber-100"
        >
          {/* Calendly inline widget */}
          <div 
            className="calendly-inline-widget calendly-widget-size" 
            data-url="https://calendly.com/your-calendly-username/discovery-call"
          ></div>
        </motion.div>
      </div>
    </div>
  );
} 