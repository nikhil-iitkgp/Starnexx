import { motion } from "framer-motion"
import FinalCTA from "@/components/sections/FinalCTA"
import Hero from "@/components/contact/Hero"
import ContactInfo from "@/components/contact/ContactInfo"
import ContactForm from "@/components/forms/ContactForm"
import FAQSection from "@/components/sections/FAQSection"
import { generalFAQs } from "@/data/faqData"

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

export default function Contact() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <Hero />

      <SectionDivider />

      {/* Contact Form & Info */}
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
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">Send us a message</h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <ContactForm />
              </motion.div>

              {/* Contact Info */}
              <ContactInfo />
            </div>
          </div>
        </div>
      </motion.section>

      <SectionDivider />

      {/* FAQ Section - using the reusable component */}
      <FAQSection 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions about our services"
        items={generalFAQs}
      />

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
