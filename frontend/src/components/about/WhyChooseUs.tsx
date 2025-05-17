import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const benefits = [
  "Fast turnaround (1-2 days)",
  "Creative editors with proven experience",
  "Dedicated support team",
  "Licensed music & stock",
  "Consistent branding per client",
  "Transparent pricing",
]

export default function WhyChooseUs() {
  return (
    <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative py-16">
        {/* Background decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -left-20 w-72 h-72 bg-amber-200 rounded-full blur-3xl z-0"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -bottom-20 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl z-0"
        />
        
        <div className="relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-amber-500">Starnexx</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We deliver quality video editing services with rapid turnaround and exceptional results.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {benefits.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="w-full bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-md border border-amber-100 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <CheckCircle className="h-8 w-8 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
