import { motion } from "framer-motion"
import { Award, Repeat, Clock, Music, BadgeDollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    title: "Professional Teams",
    description:
      "Work with expert designers and editors with proven experience alongside top YouTubers, creators, and brands.",
    icon: <Award className="w-8 h-8 text-amber-500" />,
  },
  {
    title: "Consistent Style",
    description:
      "All your tasks are completed by the same video editor and designer for consistent style and branding.",
    icon: <Repeat className="w-8 h-8 text-amber-500" />,
  },
  {
    title: "First Draft in 1-2 Business Days",
    description:
      "Keep your projects moving forward and reliably hit deadlines.",
    icon: <Clock className="w-8 h-8 text-amber-500" />,
  },
  {
    title: "Licensed Music & Stock Footage",
    description:
      "Forget about copyright claims or sourcing the right music, SFX, and stock.",
    icon: <Music className="w-8 h-8 text-amber-500" />,
  },
  {
    title: "Transparent Pricing",
    description:
      "Stay on budget with our transparent pricing and cost-effective solutions—quality without compromise.",
    icon: <BadgeDollarSign className="w-8 h-8 text-amber-500" />,
  },
];

export default function BenefitsOfStarnexx() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50/60 to-amber-100/40 opacity-80 z-0" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5 z-0" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 1 }}
        className="hidden md:block absolute -top-16 -left-16 w-64 h-64 bg-amber-100 rounded-full blur-3xl z-0"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden md:block absolute -bottom-20 right-0 w-80 h-80 bg-amber-200 rounded-full blur-3xl z-0"
      />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-[#FFF8E1] via-[#FFFAF0] to-white border border-amber-200 rounded-3xl p-8 md:p-12 shadow-xl backdrop-blur-sm">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 animate-fade-in-up"
            >
              Why Choose Starnexx
            </motion.h2>
            <div className="h-1.5 bg-gradient-to-r from-amber-400 to-amber-500 w-3/4 mx-auto mt-3 rounded-full mb-4 animate-fade-in-up"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up"
            >
              Discover the unique advantages of working with our team.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(251, 191, 36, 0.10)" }}
                whileTap={{ scale: 0.97 }}
                className="bg-white/90 rounded-3xl shadow-xl border border-amber-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center h-full p-8 group"
              >
                <div className="mb-4 bg-amber-50 rounded-full p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="text-xl font-semibold text-amber-600 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                  {benefit.title}
                </div>
                <p className="text-gray-700 text-base">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 