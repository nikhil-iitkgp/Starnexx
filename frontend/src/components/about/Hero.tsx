import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="w-full py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet the Team <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Behind the Magic</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Experts in video editing, marketing, and client success dedicated to taking your content to the next level
          </motion.p>
        </div>
      </div>
    </section>
  )
}
