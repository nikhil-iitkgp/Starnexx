import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

// Sample FAQ data
const faqData = [
  {
    question: "What services does Starnexx provide?",
    answer: "Starnexx offers a comprehensive range of video editing services including post-production editing, color grading, motion graphics, special effects, audio enhancement, and more. We tailor our services to meet the specific needs of each client."
  },
  {
    question: "How quickly can you deliver edited videos?",
    answer: "Our standard turnaround time is 48-72 hours for most projects, depending on complexity and length. We also offer expedited services for urgent requests at an additional cost. Please contact us for specific timeline requirements."
  },
  {
    question: "Do you offer revisions to the edited videos?",
    answer: "Yes, all our packages include 2-3 rounds of revisions to ensure your complete satisfaction. Additional revision rounds can be arranged at a nominal fee. We work closely with clients to make sure the final product meets your expectations."
  },
  {
    question: "What file formats do you accept and deliver?",
    answer: "We accept most video file formats including MP4, MOV, AVI, and more. We typically deliver in high-quality MP4 format, but can provide other formats upon request to suit your specific distribution needs."
  },
  {
    question: "How do I send you my video files?",
    answer: "After your initial consultation, we'll provide you with secure upload links to our cloud storage where you can upload your files. For larger projects, we can arrange alternative transfer methods."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="w-full">
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-amber-200 rounded-xl overflow-hidden bg-white/80"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
            >
              <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-amber-500" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-600 border-t border-amber-100">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 