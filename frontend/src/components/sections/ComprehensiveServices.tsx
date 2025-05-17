import ServiceCard from "@/components/sections/ServiceCard";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Service {
  title: string;
  description: string;
  icon: string | ReactNode;
  features: string[];
}

interface ComprehensiveServicesProps {
  services: Service[];
  heading?: string;
  description?: string;
  sectionIcon?: ReactNode;
}

export default function ComprehensiveServices({
  services = [],
  heading = "Our Comprehensive Services",
  description = "We offer a wide range of video editing solutions to meet your specific needs",
  sectionIcon,
}: ComprehensiveServicesProps) {
  return (
    <motion.section 
      className="relative py-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50/60 to-amber-100/40 opacity-80 z-0" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5 z-0" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden md:block absolute -top-20 -left-20 w-72 h-72 bg-amber-200 rounded-full blur-3xl z-0"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.10 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden md:block absolute -bottom-32 -right-24 w-96 h-96 bg-amber-300 rounded-full blur-3xl z-0"
      />
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-[#FFF8E1] via-[#FFFAF0] to-white border border-amber-200 rounded-3xl p-8 md:p-12 shadow-xl backdrop-blur-sm">
          <div className="text-center mb-12">
            {sectionIcon && (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg mb-6 animate-fade-in-up">
                {sectionIcon}
              </div>
            )}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up"
            >
              {heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up"
            >
              {description}
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard video={""} key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
} 