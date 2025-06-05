import { motion } from "framer-motion"
import ClientLogoGrid from "@/components/sections/ClientLogoGrid"
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel"
import WhoWeHelp from "@/components/sections/WhoWeHelp"
import FinalCTA from "@/components/sections/FinalCTA"

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

export default function OurClients() {
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
              Trusted by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
                Industry Leaders
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              We've helped businesses of all sizes achieve their video content goals.
              Here's what they have to say.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Client Logo Grid */}
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
            <ClientLogoGrid />
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

      {/* Who We Help
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.7 }}
      >
        <WhoWeHelp />
      </motion.section>

      <SectionDivider /> */}

      {/* Final CTA */}
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
