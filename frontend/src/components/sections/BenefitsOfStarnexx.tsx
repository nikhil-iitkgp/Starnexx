import { motion, useAnimation, useInView } from "framer-motion"
import { Award, Repeat, Clock, Music, BadgeDollarSign } from "lucide-react"
import { useEffect, useRef } from "react"

const benefits = [
  {
    title: "Professional Teams",
    description:
      "Work with expert designers and editors with proven experience alongside top YouTubers, creators, and brands.",
    icon: <Award className="w-8 h-8 text-amber-500" />,
    color: "from-amber-400 to-amber-600",
  },
  {
    title: "Consistent Style",
    description:
      "All your tasks are completed by the same video editor and designer for consistent style and branding.",
    icon: <Repeat className="w-8 h-8 text-amber-500" />,
    color: "from-amber-500 to-orange-400",
  },
  {
    title: "First Draft in 1-2 Business Days",
    description:
      "Keep your projects moving forward and reliably hit deadlines.",
    icon: <Clock className="w-8 h-8 text-amber-500" />,
    color: "from-amber-400 to-yellow-500",
  },
  {
    title: "Licensed Music & Stock Footage",
    description:
      "Forget about copyright claims or sourcing the right music, SFX, and stock.",
    icon: <Music className="w-8 h-8 text-amber-500" />,
    color: "from-amber-500 to-amber-600",
  },
  {
    title: "Transparent Pricing",
    description:
      "Stay on budget with our transparent pricing and cost-effective solutions—quality without compromise.",
    icon: <BadgeDollarSign className="w-8 h-8 text-amber-500" />,
    color: "from-yellow-400 to-amber-500",
  },
];

export default function BenefitsOfStarnexx() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
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
    hidden: { y: 50, opacity: 0 },
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
      y: -12,
      scale: 1.05,
      boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.25)",
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 15 
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
      rotate: [0, -10, 10, -10, 0],
      transition: { 
        type: "spring", 
        stiffness: 400,
        duration: 0.6
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

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: [0, 0.5, 0.3],
      scale: 1.2,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Add dynamic CSS for enhanced visuals
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      .benefit-card:nth-child(odd) {
        animation: float 6s ease-in-out infinite;
      }
      
      .benefit-card:nth-child(even) {
        animation: float 7s ease-in-out infinite 1s;
      }
      
      .benefit-card::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      
      .benefit-card:hover::before {
        opacity: 0.07;
        background: radial-gradient(circle at center, rgba(251, 191, 36, 0.7), transparent 70%);
      }
      
      .parallax-bg {
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
    `;
    document.head.appendChild(styleEl);

    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-amber-50 via-amber-50/80 to-white overflow-hidden">
      {/* Enhanced decorative backgrounds */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5 z-0 parallax-bg" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="hidden lg:block absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full blur-3xl z-0"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden lg:block absolute -bottom-40 -right-20 w-[30rem] h-[30rem] bg-gradient-to-tr from-amber-300 to-yellow-200 rounded-full blur-3xl z-0"
      />
      
      {/* New floating elements */}
      <div className="absolute top-20 left-[15%] w-6 h-6 rounded-full bg-amber-300 opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-[20%] w-4 h-4 rounded-full bg-amber-500 opacity-20 animate-ping"></div>
      <div className="absolute top-1/2 left-[5%] w-3 h-3 rounded-full bg-yellow-400 opacity-20 animate-pulse"></div>
      <div className="absolute top-1/4 right-[10%] w-5 h-5 rounded-full bg-amber-400 opacity-20 animate-ping"></div>
      
      <div ref={ref} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={glowVariants}
            className="absolute inset-x-0 -top-10 mx-auto w-40 h-40 bg-amber-300 rounded-full blur-3xl opacity-20 z-0"
          />
          
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500"
          >
            Benefits of Starnexx
          </motion.h2>
          <motion.div 
            className="h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 w-1/2 mx-auto mt-3 rounded-full mb-6"
            variants={underlineVariants}
            initial="hidden"
            animate="visible"
          ></motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              className="benefit-card bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center h-full p-6 group relative z-10 border border-amber-100/50"
              variants={itemVariants}
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              style={{ willChange: "transform" }}
            >
              <motion.div 
                className={`mb-5 bg-gradient-to-br ${benefit.color} rounded-full p-4 flex items-center justify-center shadow-md relative overflow-hidden`}
                variants={iconVariants}
                whileHover="hover"
              >
                <div className="absolute inset-0 bg-white opacity-90"></div>
                <div className="relative">{benefit.icon}</div>
                <motion.div 
                  className="absolute inset-0 bg-amber-200 rounded-full opacity-0 group-hover:opacity-20"
                  animate={{ 
                    scale: [1, 1.2, 1],  
                    opacity: [0, 0.2, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatDelay: 0.5
                  }}
                />
              </motion.div>
              <motion.div 
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500 mb-3 group-hover:text-amber-600 transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
              >
                {benefit.title}
              </motion.div>
              <motion.p 
                className="text-gray-600 text-sm leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                {benefit.description}
              </motion.p>
              
              {/* Card highlight effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-amber-200 to-yellow-200 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 