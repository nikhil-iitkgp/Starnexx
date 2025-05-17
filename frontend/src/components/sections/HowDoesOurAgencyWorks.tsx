import { User, FileText, CheckCircle, MessageSquare } from "lucide-react";
import { motion } from "framer-motion"

const steps = [
  {
    icon: <FileText className="w-12 h-12 text-amber-500" />, 
    title: "Fill Our Contact Us Form",
    description: "Step 1",
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-amber-500" />, 
    title: "Our Video Experts will connect with you",
    description: "Step 2",
  },
  {
    icon: <User className="w-12 h-12 text-amber-500" />, 
    title: "Finalise Synopsis & Creator",
    description: "Step 3",
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-amber-500" />, 
    title: "Video Review/Approval",
    description: "Step 4",
  },
];

export default function HowDoesOurAgencyWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#FFF8E1] via-[#FFFAF0] to-white">
      {/* Decorative blurred gradient shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1 }}
        className="hidden md:block absolute -top-20 -left-20 w-72 h-72 bg-amber-200 rounded-full blur-3xl z-0"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden md:block absolute -bottom-24 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl z-0"
      />
      <div className="w-full max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Does Our Agency Work?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-6">
            We as a top video production agency in India, position your brand superior with pocket-friendly and edgy videos. Make your brand stand out in the consumer's mind with snackable creator-generated content as people trust it 10X times more than text!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center text-center relative z-10 w-full md:w-1/4 group"
            >
              <div className="bg-white rounded-2xl shadow-xl border-2 border-amber-100 p-8 mb-4 flex items-center justify-center">
                {step.icon}
              </div>
              <div className="font-semibold text-lg text-gray-800 mb-1 group-hover:text-amber-600 transition-colors duration-300">{step.title}</div>
              <div className="text-amber-500 font-medium text-sm mb-2">{step.description}</div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-1 border-t-2 border-dashed border-amber-300 z-0 stepper-line"></div>
              )}
            </motion.div>
          ))}
        </div>
        {/* Mobile stepper line */}
        <div className="md:hidden flex justify-between items-center mt-8">
          {steps.map((_, idx) => (
            idx < steps.length - 1 && (
              <div key={idx} className="flex-1 h-1 border-t-2 border-dashed border-amber-300 mx-2"></div>
            )
          ))}
        </div>
      </div>
    </section>
  );
} 