import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import type { FAQItem } from "@/types/faq"

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
}

export default function FAQSection({ 
  title = "Frequently Asked Questions", 
  subtitle = "Find answers to common questions about our services",
  items 
}: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  // Animation variants for consistent animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      className="py-16 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      transition={{ duration: 0.7 }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/40 to-amber-100/30" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute -top-20 -left-20 w-72 h-72 bg-amber-200 rounded-full blur-3xl z-0 hidden md:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -bottom-40 -right-20 w-80 h-80 bg-amber-300 rounded-full blur-3xl z-0 hidden md:block"
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-white via-amber-50/50 to-amber-100/30 border border-amber-200/50 rounded-3xl p-8 md:p-12 shadow-xl backdrop-blur-sm">
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg mb-6">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {subtitle}
            </p>
          </div>
          
          {/* FAQ Items */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {items.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.025, boxShadow: '0 8px 32px 0 rgba(245, 158, 11, 0.10)' }}
                  className="overflow-hidden rounded-3xl border border-amber-200/70 shadow-xl bg-gradient-to-br from-white via-amber-50/80 to-amber-100/60 mb-6 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full pl-6 pr-7 py-6 flex items-center justify-between text-left focus:outline-none bg-white/95 text-gray-900 border-b border-amber-100/60 rounded-t-3xl transition-colors duration-200 hover:bg-amber-50/80 focus:bg-amber-100/70 font-semibold text-xl shadow-none border-l-4 "
                  >
                    <h3 className="text-xl font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.span animate={{ rotate: activeIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="w-7 h-7 text-amber-500 drop-shadow" />
                    </motion.span>
                  </button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={activeIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {activeIndex === index && (
                      <div className="px-7 pb-7 pt-2 bg-white/90 text-gray-700 border-b border-amber-100/60 rounded-b-3xl text-base leading-relaxed shadow-sm">
                        {faq.answer}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
} 