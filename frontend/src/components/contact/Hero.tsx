import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="w-full py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
              Touch
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="relative w-full max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -top-20 -left-20 w-72 h-72 bg-amber-200 rounded-full blur-3xl z-0 hidden md:block"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute -bottom-40 -right-20 w-80 h-80 bg-amber-300 rounded-full blur-3xl z-0 hidden md:block"
        />
      </div>
    </section>
  )
} 