import { motion } from "framer-motion"
import { BookOpen, Star, Award, TrendingUp } from "lucide-react"

export default function OurStory() {
  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute -top-20 -left-20 w-72 h-72 bg-amber-100 rounded-full blur-3xl z-0 hidden md:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -bottom-32 -right-20 w-80 h-80 bg-amber-200 rounded-full blur-3xl z-0 hidden md:block"
      />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-[#FFF8E1] via-[#FFFAF0] to-white border border-amber-200 rounded-3xl p-8 md:p-12 shadow-md">
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center justify-center gap-2 mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <BookOpen className="w-6 h-6 text-amber-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
            </motion.div>
            
            <div className="h-1 bg-gradient-to-r from-amber-400 to-amber-500 w-1/3 mx-auto mb-8 rounded-full"></div>

            <motion.p
              className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              We started Starnexx with a simple yet powerful vision: to transform how creators and brands tell their stories through video. 
              What began as a passion for video editing has evolved into a comprehensive creative agency, dedicated to helping content creators
              thrive in an increasingly competitive digital landscape.
            </motion.p>
            
            <motion.p
              className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              From YouTube edits to viral reels and strategic brand campaigns, we combine technical expertise with creative storytelling
              to deliver content that resonates, engages, and converts. Our journey is defined by the success of our clients and the
              relationships we build along the way.
            </motion.p>
          </div>
          
          {/* Value Propositions */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-amber-50 p-6 rounded-xl shadow-sm">
              <Star className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence in Every Edit</h3>
              <p className="text-gray-600">We believe that quality is non-negotiable. Every project receives our full attention and creative expertise.</p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-xl shadow-sm">
              <Award className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Client-Centered Approach</h3>
              <p className="text-gray-600">Your vision drives our process. We listen, adapt, and collaborate to ensure your unique voice shines through.</p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-xl shadow-sm">
              <TrendingUp className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Results-Driven Strategy</h3>
              <p className="text-gray-600">Beyond beautiful videos, we focus on content that helps you achieve tangible growth and audience engagement.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
