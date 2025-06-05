import { motion } from "framer-motion"
import { Mail, Phone, Instagram } from "lucide-react"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail className="w-6 h-6 text-amber-500" />,
      title: "Email Us",
      details: "contact@starnexx.in"
    },
    {
      icon: <Phone className="w-6 h-6 text-amber-500" />,
      title: "Call Us",
      details: "+91 8317864154"
    },
    // {
    //   icon: <MapPin className="w-6 h-6 text-amber-500" />,
    //   title: "Visit Us",
    //   details: "IIT Kharagpur"
    // },
    /*
    {
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: "Business Hours",
      details: "Monday - Friday: 9am - 6pm EST"
    },
    */
    {
      icon: <Instagram className="w-6 h-6 text-amber-500" />,
      title: "Instagram",
      details: "@starnexx.in"
    },
    
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
        <p className="text-gray-600">
          Reach out to us directly through any of these channels!
        </p>
      </div>

      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shadow-sm">
              {detail.icon}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{detail.title}</h3>
              <p className="text-gray-600">{detail.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 