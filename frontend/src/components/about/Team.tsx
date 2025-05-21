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
    role: "Marketing | Ads | Social Media",
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
    <section className="w-full py-16 bg-amber-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Team</h2>
          <motion.div 
            className="w-1/2 h-1 bg-amber-500 mx-auto mb-6 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "50%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the talented professionals behind our success. Expertise, creativity, and dedication drive everything we do.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                transition: { duration: 0.3 },
                boxShadow: "0 10px 25px -5px rgba(251, 191, 36, 0.2)"
              }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-center"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div className="relative mb-6 group">
                <motion.div 
                  className="absolute inset-0 bg-amber-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                ></motion.div>
                <motion.img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 rounded-full border-2 border-amber-200 object-cover transition-transform duration-300 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                />
                <motion.div 
                  className="absolute -bottom-4 left-1/2 text-center transform -translate-x-1/2 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 150, delay: 0.5 + idx * 0.1 }}
                >
                  {idx === 0 ? "Founder" : idx === 1 ? "Co-Founder" : "Lead"}
                </motion.div>
              </div>
              <motion.h3 
                className="text-2xl font-bold text-gray-800 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              >
                {member.name}
              </motion.h3>
              <motion.p 
                className="text-amber-600 font-medium text-md text-center mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
              >
                {member.role}
              </motion.p>
              <motion.p 
                className="text-gray-500 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
              >
                {member.bio}
              </motion.p>
              
              <div className="mt-5 flex space-x-3">
                {Object.entries(member.social).map(([platform, url], sIdx) => (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`Visit ${member.name}'s ${platform} profile`}
                    className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-white"
                    variants={socialIconVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    transition={{ delay: 0.7 + idx * 0.1 + sIdx * 0.1 }}
                  >
                    {platform === "facebook" ? <Facebook size={16} /> : 
                     platform === "instagram" ? <Instagram size={16} /> : 
                     <Linkedin size={16} />}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}