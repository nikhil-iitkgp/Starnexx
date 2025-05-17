import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="w-full py-20 bg-gradient-to-b from-amber-50/70 to-orange-50/40 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Team</h2>
          <div className="w-1/2 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the talented professionals behind our success. Expertise, creativity, and dedication drive everything we do.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-10"
        >
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-100 p-8 flex flex-col items-center"
            >
              <div className="relative mb-6 group">
                <div className="absolute inset-0 bg-amber-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-36 h-36 rounded-full shadow-lg border-2 border-amber-200 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute -bottom-4 left-1/2 text-center transform -translate-x-1/2 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {idx === 0 ? "Founder" : idx === 1 ? "Co-Founder" : "Lead"}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-amber-600 font-medium text-md text-center mb-3">{member.role}</p>
              <p className="text-gray-500 text-center">{member.bio}</p>
              
              <div className="mt-6 flex space-x-4">
                <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${member.name}'s Facebook profile`} className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center hover:bg-amber-200 hover:text-white transition-colors duration-300 text-amber-300">
                  <Facebook size={18} />
                </a>
                <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${member.name}'s Instagram profile`} className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center hover:bg-amber-200 hover:text-white transition-colors duration-300 text-amber-500">
                  <Instagram size={18} />
                </a>
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${member.name}'s LinkedIn profile`} className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center hover:bg-amber-200 hover:text-white transition-colors duration-300 text-amber-500">
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button
            className="bg-amber-500 hover:bg-amber-600 text-white gap-2 px-8 py-3 rounded-full shadow-md text-lg font-semibold"
          >
            Join Our Team
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
