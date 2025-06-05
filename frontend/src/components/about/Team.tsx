import { motion } from "framer-motion"
import { Facebook, Linkedin, Instagram } from "lucide-react"

const team = [
  {
    name: "Piyush Agarwal",
    role: "Video Editing | Design | Client Management",
    img: "/Team/Piyush.jpg",
    bio: "Expert in video production with an eye for detail and creativity.",
    social: {
      facebook: "https://facebook.com/piyushagarwal",
      instagram: "https://www.instagram.com/piyushagarwal3320/#",
      linkedin: "https://www.linkedin.com/in/piyush-agarwal-225099248/"
    }
  },
  {
    name: "Sayantan Saha",
    role: "Marketing | Ads | Social Media Management",
    img: "/Team/Sayantan.jpg",
    bio: "Strategist focused on building brand presence and engagement.",
    social: {
      facebook: "https://facebook.com/sayantansaha",
      instagram: "https://www.instagram.com/sayantan13158/#",
      linkedin: "https://www.linkedin.com/in/sayantan-saha-9b04aa252/"
    }
  },
  {
    name: "Nikhil Gupta",
    role: "Full-Stack Developer | Data Analyst | Project Manager",
    img: "/Team/Nikhil.jpg",
    bio: "Tech expert with a passion for creating innovative solutions.",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100008601150648",
      instagram: "https://www.instagram.com/nikhil_gupta_raj/",
      linkedin: "https://www.linkedin.com/in/nikhil-gupta-359742256/"
    }
  },
]

export default function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  }
  
  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { scale: 1.2, rotate: 5 }
  }
  
  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        duration: 0.7
      }
    }
  }

  return (
    <section className="w-full py-16 bg-gradient-to-b from-amber-50/80 to-amber-100/40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Meet the Minds Behind Starnexx</h2>
          <motion.div 
            className="w-1/2 h-1 bg-gradient-to-r from-amber-400 to-amber-200 mx-auto mb-6 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "50%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A passionate team of experts driving your brand’s growth with creativity, precision, and unwavering dedication.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 relative"
        >
          {/* Background decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.1)_0%,transparent_70%)] blur-3xl pointer-events-none"></div>
          
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Card container with glass effect */}
              <div className="relative bg-gradient-to-br from-white via-amber-50/80 to-amber-100/60 rounded-2xl p-8 pt-12 border border-amber-200/50 shadow-[0_8px_16px_-6px_rgba(251,191,36,0.2)] transition-all duration-300 group-hover:shadow-[0_20px_40px_-12px_rgba(251,191,36,0.3)] overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 via-transparent to-amber-50/30 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-amber-300/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-200/20 to-amber-300/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Profile Image Container */}
                  <div className="relative mb-8 group/image mx-auto w-32 h-32">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200 to-amber-400/50 blur-xl opacity-70 group-hover/image:opacity-100 transition-opacity duration-300 scale-110"></div>
                    <motion.img
                      src={member.img}
                      alt={member.name}
                      className="relative w-32 h-32 rounded-full border-[3px] border-amber-200/80 object-cover shadow-inner group-hover/image:border-amber-300/80 transition-all duration-300"
                      style={{ boxShadow: "inset 0 0 20px rgba(251,191,36,0.2)" }}
                      whileHover={{ scale: 1.05 }}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    />
                    <motion.div 
                      className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-400 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 150, delay: 0.5 + idx * 0.1 }}
                    >
                      {idx === 0 ? "Founder" : idx === 1 ? "Founder" : "Web-Head"}
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <div className="text-center">
                    <motion.h3 
                      className="text-2xl font-bold text-gray-800 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    >
                      {member.name}
                    </motion.h3>
                    <motion.div
                      className="relative mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    >
                      <p className="text-amber-600 font-medium text-md px-2">
                        {member.role}
                      </p>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400/80 to-amber-200/60 rounded-full mx-auto mt-3"></div>
                    </motion.div>
                    <motion.p 
                      className="text-gray-600 text-center mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                    >
                      {member.bio}
                    </motion.p>
                    
                    {/* Social Icons */}
                    <div className="flex justify-center space-x-4">
                      {Object.entries(member.social).map(([platform, url], sIdx) => (
                        <motion.a
                          key={platform}
                          href={url}
                          target="_blank" 
                          rel="noopener noreferrer" 
                          aria-label={`Visit ${member.name}'s ${platform} profile`}
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-50 to-amber-100/80 shadow-sm flex items-center justify-center text-amber-500 hover:text-amber-600 border border-amber-200/50 hover:border-amber-300/80 hover:shadow-md transition-all duration-200"
                          variants={socialIconVariants}
                          initial="hidden"
                          animate="visible"
                          whileHover="hover"
                          transition={{ delay: 0.7 + idx * 0.1 + sIdx * 0.1 }}
                        >
                          {platform === "facebook" ? <Facebook size={18} className="text-amber-500 relative z-10" /> : 
                           platform === "instagram" ? <Instagram size={18} className="text-amber-500 relative z-10" /> : 
                           <Linkedin size={18} className="text-amber-500 relative z-10" />}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}