import { motion, useAnimation } from "framer-motion"
import { Award, Repeat, Clock, Music, BadgeDollarSign } from "lucide-react"
import { useEffect } from "react"

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
  const controls = useAnimation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: { 
      y: -8,
      scale: 1.03,
      boxShadow: "0 10px 25px -5px rgba(251, 191, 36, 0.2)",
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 20 
      }
    }
  };
  
  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 20,
        delay: 0.3
      }
    },
    hover: { 
      scale: 1.2, 
      transition: { 
        type: "spring", 
        stiffness: 400 
      } 
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: 0.1
      }
    }
  };
  
  const underlineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: "50%", 
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3
      }
    }
  };
  
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section className="relative py-16 bg-amber-50 overflow-hidden">
      {/* Light decorative backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50/60 to-amber-100/40 opacity-40 z-0" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5 z-0" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="hidden md:block absolute -top-16 -left-16 w-64 h-64 bg-amber-100 rounded-full blur-3xl z-0"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden md:block absolute -bottom-20 right-0 w-80 h-80 bg-amber-200 rounded-full blur-3xl z-0"
      />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 animate-fade-in-up"
          >
            Benefits of Starnexx
          </motion.h2>
          <motion.div 
            className="h-1 bg-amber-500 w-1/2 mx-auto mt-3 rounded-full mb-4"
            variants={underlineVariants}
            initial="hidden"
            animate="visible"
          ></motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center h-full p-6 group"
              variants={itemVariants}
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <motion.div 
                className="mb-4 bg-amber-50 rounded-full p-3 flex items-center justify-center"
                variants={iconVariants}
                whileHover="hover"
              >
                {benefit.icon}
              </motion.div>
              <motion.div 
                className="text-lg font-semibold text-amber-600 mb-2 group-hover:text-amber-700 transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
              >
                {benefit.title}
              </motion.div>
              <motion.p 
                className="text-gray-600 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                {benefit.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 