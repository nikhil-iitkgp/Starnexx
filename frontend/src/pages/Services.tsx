import { motion } from "framer-motion"
import ComprehensiveServices from "@/components/sections/ComprehensiveServices"
import WhoWeHelp from "@/components/sections/WhoWeHelp"
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel"
import FinalCTA from "@/components/sections/FinalCTA"
import FAQSection from "@/components/sections/FAQSection"
import { serviceFAQs } from "@/data/faqData"

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

const services = [
  {
    title: "Video Editing",
    description: "Professional video editing with attention to detail, color grading, and seamless transitions.",
    icon: "🎬",
    features: ["Color Grading", "Transitions", "Sound Design", "Motion Graphics"]
  },
  {
    title: "Content Optimization",
    description: "Optimize your videos for different platforms and maximize engagement.",
    icon: "📱",
    features: ["Platform-Specific Formats", "Thumbnail Creation", "SEO Optimization", "Engagement Analytics"]
  },
  {
    title: "Motion Graphics",
    description: "Eye-catching motion graphics and animations to enhance your videos.",
    icon: "✨",
    features: ["2D/3D Animation", "Logo Animation", "Text Effects", "Visual Effects"]
  }
]

export default function Services() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Video Editing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
                Services
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Transform your footage into captivating videos that engage, inspire, and convert.
From raw clips to polished content, our expert editors bring your vision to life—perfectly tailored for social media, YouTube, and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Services Grid */}
      <ComprehensiveServices services={services} />

      <SectionDivider />

      {/* Who We Help Section */}
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

      <SectionDivider />

      {/* Service-specific FAQ Section */}
      <FAQSection 
        title="Service FAQ" 
        subtitle="Common questions about our video editing services"
        items={serviceFAQs}
      />

      <SectionDivider />

      {/* Testimonials
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
