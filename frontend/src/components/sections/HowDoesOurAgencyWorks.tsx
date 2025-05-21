import { User, FileText, CheckCircle, MessageSquare } from "lucide-react";
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react";

const steps = [
  {
    icon: <FileText className="w-10 h-10 text-amber-500" />, 
    title: "Fill Our Contact Us Form",
    description: "Step 1",
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-amber-500" />, 
    title: "Our Video Experts will connect with you",
    description: "Step 2",
  },
  {
    icon: <User className="w-10 h-10 text-amber-500" />, 
    title: "Finalise Synopsis & Creator",
    description: "Step 3",
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-amber-500" />, 
    title: "Video Review/Approval",
    description: "Step 4",
  },
];

export default function HowDoesOurAgencyWorks() {
  const controls = useAnimation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };
  
  const stepVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: i * 0.2
      }
    }),
    hover: { 
      y: -10,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };
  
  const iconContainerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 10px 15px -5px rgba(251, 191, 36, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400
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
        stiffness: 300
      }
    },
    hover: {
      rotate: [0, -10, 10, -5, 5, 0],
      transition: {
        duration: 0.4
      }
    }
  };
  
  const lineVariants = {
    hidden: { width: "0%", opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5
      }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };
  
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section className="py-16 bg-amber-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Does Our Agency Work?
          </h2>
          <motion.div 
            className="h-1 bg-amber-500 w-1/3 mx-auto mb-6 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "33%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We as a top video production agency in India, position your brand superior with pocket-friendly 
            and edgy videos. Make your brand stand out in the consumer's mind with snackable creator-generated 
            content as people trust it 10X times more than text!
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 relative"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Connecting line */}
          <motion.div 
            className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-amber-200 z-0"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          ></motion.div>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={stepVariants}
                whileHover="hover"
                className="flex flex-col items-center text-center w-full md:w-1/4 mb-8 md:mb-0"
              >
                <motion.div 
                  className="bg-white rounded-xl shadow-md p-4 w-20 h-20 flex items-center justify-center mb-4"
                  variants={iconContainerVariants}
                  whileHover="hover"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {step.icon}
                  </motion.div>
                </motion.div>
                <motion.h3 
                  className="text-md font-semibold text-gray-900 mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  {step.title}
                </motion.h3>
                <motion.p 
                  className="text-amber-500 font-medium text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 