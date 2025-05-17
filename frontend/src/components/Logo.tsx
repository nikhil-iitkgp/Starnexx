import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
      >
        <img
          src="/logo.png"
          alt="Starnexx Logo"
          className="h-12 w-auto"
        />
      </motion.div>
    </Link>
  )
} 