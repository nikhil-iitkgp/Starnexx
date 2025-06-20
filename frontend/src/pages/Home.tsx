// src/app/home.tsx
import { HeroSection } from "@/components/sections/HeroSection"
import TeamSection from "@/components/about/Team"
import ClientLogoGrid from "@/components/sections/ClientLogoGrid"
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel"
import PortfolioHighlights from "@/components/sections/PortfolioHighlights"
import FinalCTA from "@/components/sections/FinalCTA"
import BenefitsOfStarnexx from "@/components/sections/BenefitsOfStarnexx"
import HowDoesOurAgencyWorks from "@/components/sections/HowDoesOurAgencyWorks"
import { motion } from "framer-motion"

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

const stats = [
  { value: "10 M+", label: "Views Generated" },
  { value: "50+", label: "Satisfied Clients" },
  { value: "100+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" }
]

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <HeroSection />
      
      <SectionDivider />

      {/* Client Logo Grid */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.7 }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#FFF8E1]/50 via-[#FFFAF0]/50 to-white/50 border border-amber-100 rounded-3xl p-8 md:p-12 overflow-visible">
            <ClientLogoGrid/>
          </div>
        </div>
      </motion.section>

      {/* Reduce the spacing by using a smaller SectionDivider */}
      <div className="w-full max-w-7xl mx-auto px-4 py-4">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-80" />
      </div>

      {/* Stats Section */}
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
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Impact</h2>
                    <div className="h-1 bg-gradient-to-r from-amber-400 to-amber-500 w-1/4 mx-auto mb-4 rounded-full"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      See the results we deliver for our clients
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
                          {stat.value}
                        </h3>
                        <p className="text-gray-600 mt-2">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
      
            <SectionDivider />

      {/* Portfolio Highlights */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.7 }}
      >
        <PortfolioHighlights />
      </motion.section>

      <SectionDivider />

      {/* How Does Our Agency Work */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.7 }}
        className="py-16"
      >
        <HowDoesOurAgencyWorks />
      </motion.div>

      <SectionDivider />

      {/* Benefits of Starnexx */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.7 }}
        className="py-16"
      >
        <BenefitsOfStarnexx />
      </motion.div>

      <SectionDivider />

      {/* Team Section */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.7 }}
      >
        <TeamSection />
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
        <TestimonialsCarousel />
      </motion.section>

      <SectionDivider />

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