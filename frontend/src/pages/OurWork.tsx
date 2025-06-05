"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import PortfolioGrid from "@/components/portfolio/PortfolioGrid"
import FinalCTA from "@/components/sections/FinalCTA"
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel"

import { longformVideos } from "@/data/longformVideoData"
import { shortformVideos } from "@/data/shortformVideoData"
import { thumbnailDesigns } from "@/data/thumbnailData"

// Animation variants for consistent animations
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

// Section Divider component for consistency
const SectionDivider = () => (
  <div className="w-full max-w-7xl mx-auto px-4 py-8">
    <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-80" />
  </div>
);

const tabDetails = {
  longform: {
    heading: "Professional Video Editing for Long-Form Content",
    description:
      "Get motion graphics, audio and color correction, copyright-free music, stock footage, custom text, VFX, and more for your long-form videos — our professional video editors can do it all. Plus, you'll have a personal video manager who will quality-check every video. We guarantee excellence and consistency on every single video."
  },
  shortform: {
    heading: "Professional Short-Form Video Editing Services",
    description:
      "Our professional video editors can reformat your old long-form videos or create brand new verticals from scratch. Either way, we know how to create engaging short-form content and can help you take your Shorts, Reels, and TikTok videos to the next level."
  },
  thumbnail: {
    heading: "Thumbnail Design",
    description:
      "Good thumbnails are necessary for every YouTube channel. Our professional thumbnail artists create high performing thumbnails from scratch to boost your click-through rates."
  }
};

export default function OurWork() {
  const [activeTab, setActiveTab] = useState<'longform' | 'shortform' | 'thumbnail'>('longform');
  const { heading, description } = tabDetails[activeTab];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full py-24">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Our Creative{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
                Portfolio
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Explore our collection of video editing projects across different industries and styles.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Portfolio Grid Section */}
      <motion.section 
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.7 }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#FFF8E1] via-[#FFFAF0] to-white border border-amber-200 rounded-3xl p-8 md:p-12 shadow-md">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{heading}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
            </div>
            <PortfolioGrid
              longformVideos={longformVideos}
              shortformVideos={shortformVideos}
              thumbnails={thumbnailDesigns}
              showTabs={true}
              initialTab={activeTab}
              title={undefined}
              description={undefined}
              key={activeTab}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>
      </motion.section>

      <SectionDivider />

      {/* Testimonials */}
            <motion.section
              className="py-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              transition={{ duration: 0.7 }}
            >
              <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-[#FFF8E1] via-[#FFFAF0] to-white border border-amber-200 rounded-3xl p-8 md:p-12 shadow-md">
                  <TestimonialsCarousel />
                </div>
              </div>
            </motion.section>
      
            <SectionDivider />

      {/* Final Call to Action */}
      <motion.section 
        className="pt-16 pb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.7 }}
      >
        <FinalCTA />
      </motion.section>
    </main>
  )
}
