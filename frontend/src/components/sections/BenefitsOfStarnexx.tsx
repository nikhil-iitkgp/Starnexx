import { motion, useAnimation } from "framer-motion"
import { Award, Repeat, Clock, Music, BadgeDollarSign } from "lucide-react"
import { useEffect } from "react"

const benefits = [
  {
    title: "Professional Teams",
    description:
      "Work with expert designers and editors with proven experience alongside top YouTubers, creators, and brands.",
    icon: <Award className="w-8 h-8" />,
    gradient: "from-amber-400/20 via-amber-300/10 to-amber-200/5"
  },
  {
    title: "Consistent Style",
    description:
      "All your tasks are completed by the same video editor and designer for consistent style and branding.",
    icon: <Repeat className="w-8 h-8" />,
    gradient: "from-amber-300/20 via-amber-200/10 to-amber-100/5"
  },
  {
    title: "Delivered in Just 1-2 Business Days",
    description:
      "Keep your projects moving forward and reliably hit deadlines.",
    icon: <Clock className="w-8 h-8" />,
    gradient: "from-amber-200/20 via-amber-300/10 to-amber-400/5"
  },
  {
    title: "5× Faster Audience Growth",
    description:
      "With content crafted to target the right viewers-every time.",
    icon: <Music className="w-8 h-8" />,
    gradient: "from-amber-400/20 via-amber-200/10 to-amber-300/5"
  },
  {
    title: "98% Client Retention Rate",
    description:
      "Because we don’t just deliver—we build long-term brand success.",
    icon: <BadgeDollarSign className="w-8 h-8" />,
    gradient: "from-amber-300/20 via-amber-400/10 to-amber-200/5"
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
      rotate: 15,
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
    <section className="relative py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50/60 to-amber-100/40 opacity-40" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="hidden md:block absolute -top-16 -left-16 w-64 h-64 bg-amber-100 rounded-full blur-3xl"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden md:block absolute -bottom-20 right-0 w-80 h-80 bg-amber-200 rounded-full blur-3xl"
      />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
          >
            Why Choose Starnexx?
          </motion.h2>
          <motion.div 
            className="h-1 bg-gradient-to-r from-amber-400 to-amber-500 w-1/3 mx-auto mt-3 rounded-full mb-4"
            variants={underlineVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Growth isn’t a chance—it’s a choice. 
            We blend creativity, strategy, and data to push your brand beyond limits.
          </motion.p>
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
              className="relative group"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Card container with glass effect */}
              <div className={`relative h-full bg-gradient-to-br ${benefit.gradient} backdrop-blur-sm rounded-2xl p-6 border border-amber-200/30 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-amber-300/50 overflow-hidden`}>
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-amber-300/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-200/20 to-amber-300/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.div 
                    className="mb-4 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl p-3 w-16 h-16 mx-auto flex items-center justify-center text-amber-500 shadow-inner border border-amber-200/50 group-hover:text-amber-600 group-hover:border-amber-300/80 transition-colors duration-300"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {benefit.icon}
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center group-hover:text-amber-700 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm text-center leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 