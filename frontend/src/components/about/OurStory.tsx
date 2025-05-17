import { motion } from "framer-motion"

export default function OurStory() {
  return (
    <div className="w-full py-16">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Story
        </motion.h2>

        <motion.p
          className="text-gray-600 text-lg md:text-xl leading-relaxed text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          We started Starnexx with a mission to empower creators and brands through powerful video storytelling.
          From YouTube edits to viral reels and brand campaigns, we deliver speed, creativity, and strategy.
        </motion.p>
      </div>
    </div>
  )
}
