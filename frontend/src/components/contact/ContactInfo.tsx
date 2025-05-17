import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Globe } from "lucide-react"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail className="w-6 h-6 text-amber-500" />,
      title: "Email Us",
      details: "contact@starnexx.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-amber-500" />,
      title: "Call Us",
      details: "+1 (555) 123-4567"
    },
    {
      icon: <MapPin className="w-6 h-6 text-amber-500" />,
      title: "Visit Us",
      details: "123 Video Street, Edit City, ST 12345"
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: "Business Hours",
      details: "Monday - Friday: 9am - 6pm EST"
    },
    {
      icon: <Globe className="w-6 h-6 text-amber-500" />,
      title: "Social Media",
      details: "@starnexx_official"
    }
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
        <p className="text-gray-600">
          Reach out to us directly through any of these channels or visit our office during business hours.
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