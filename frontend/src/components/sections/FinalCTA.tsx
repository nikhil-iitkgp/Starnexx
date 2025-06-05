import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { useEffect } from "react";

// Use the same type declaration for Calendly as defined in HeroSection.tsx
// If you're using a strictly typed environment, you should ideally put this in a shared types file

export default function FinalCTA() {
  // Add Calendly script on component mount (if not already added)
  useEffect(() => {
    // Create a new script element
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      console.log("Calendly script loaded successfully");
    };
    script.onerror = (error) => {
      console.error("Error loading Calendly script:", error);
    };
    
    // Check if the script is already in the document
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    
    if (!existingScript) {
      document.body.appendChild(script);
    }
    
    return () => {
      // No cleanup needed as other components might use Calendly
    };
  }, []);

  // Function to open Calendly popup
  const openCalendlyPopup = () => {
    // Direct URL approach - more reliable than the widget
    window.open(
      "https://calendly.com/creatorhub-edits/how-you-can-improve-your-online-presence?",
      "_blank"
    );
  };

  return (
    <section className="w-full py-16 relative overflow-hidden">
      {/* Decorative blurred gradient shape */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 1 }}
        className="hidden md:block absolute -top-16 -left-16 w-64 h-64 bg-amber-100 rounded-full blur-3xl z-0"
      />
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border border-amber-200 bg-gradient-to-r from-[#FFF8E1] via-[#FFFAF0] to-white p-8 md:p-12 rounded-3xl shadow-xl"
          >
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ready to Take Your Instagram and YouTube Content to the Next Level?
              </h2>
              <p className="text-lg text-gray-600">
                Take your videos to the next level with our premium editing
                services. Let's create content that stands out and engages your
                audience.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  className="bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:bg-amber-600 hover:from-amber-600 hover:to-amber-700 transition-all duration-300 text-lg px-8 py-6 h-auto rounded-full shadow-lg font-semibold flex items-center gap-2"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Get Started with Starnexx <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  className="bg-white border-2 border-amber-500 text-amber-600 hover:bg-amber-50 transition-all duration-300 text-lg px-8 py-6 h-auto rounded-full shadow-lg font-semibold flex items-center gap-2"
                  onClick={openCalendlyPopup}
                >
                  Schedule a Strategy Call <Calendar className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Additional decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="hidden md:block absolute -bottom-16 -right-16 w-72 h-72 bg-amber-200 rounded-full blur-3xl z-0"
      />
    </section>
  );
}
