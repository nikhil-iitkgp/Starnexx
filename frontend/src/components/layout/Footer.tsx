import { Link } from "react-router-dom"
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import logo from "../../assets/StarnexLogo.png"

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gradient-to-b from-amber-50 via-[#FFFAF0] to-white border-t border-amber-100 pt-16 pb-8 relative overflow-hidden shadow-[0_-4px_24px_0_rgba(245,158,11,0.08)]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-100 rounded-full opacity-20 blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-200 rounded-full opacity-20 blur-3xl translate-y-1/2"></div>
      <div className="absolute top-1/2 left-3/4 w-20 h-20 border-2 border-amber-300 opacity-10 rotate-45"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full border-2 border-amber-200 opacity-20"></div>
      
      {/* Main content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {/* Column 1: About */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:pr-8"
          >
            <div className="mb-6">
              <img src={logo} alt="Starnexx Logo" className="h-10 mb-4" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 relative inline-block">
              About Starnexx
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full"></div>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Starnex, we help creators and brands elevate their content with expert video editing and strategic digital marketing. From seamless edits to viral growth strategies, we make your content stand out. Let’s create, captivate, and grow together!
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61576180358590" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center group border border-amber-100 hover:border-amber-300 transition-all duration-300 hover:bg-amber-50">
                <Facebook className="h-4 w-4 text-amber-500 group-hover:text-amber-600 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.instagram.com/starnexx.in/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center group border border-amber-100 hover:border-amber-300 transition-all duration-300 hover:bg-amber-50">
                <Instagram className="h-4 w-4 text-amber-500 group-hover:text-amber-600 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.youtube.com/@starnexx-edits" target="_blank" rel="noopener noreferrer" aria-label="Visit our YouTube channel" className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center group border border-amber-100 hover:border-amber-300 transition-all duration-300 hover:bg-amber-50">
                <Youtube className="h-4 w-4 text-amber-500 group-hover:text-amber-600 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/company/starnexx/" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn profile" className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center group border border-amber-100 hover:border-amber-300 transition-all duration-300 hover:bg-amber-50">
                <Linkedin className="h-4 w-4 text-amber-500 group-hover:text-amber-600 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:px-4"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="group flex items-center">
                  <ChevronRight className="h-4 w-4 text-amber-400 mr-2 group-hover:translate-x-1 transition-transform" />
                  <span className="text-gray-700 group-hover:text-amber-600 transition-colors">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => window.scrollTo(0, 0)} className="group flex items-center">
                  <ChevronRight className="h-4 w-4 text-amber-400 mr-2 group-hover:translate-x-1 transition-transform" />
                  <span className="text-gray-700 group-hover:text-amber-600 transition-colors">Services</span>
                </Link>
              </li>
              <li>
                <Link to="/our-work" onClick={() => window.scrollTo(0, 0)} className="group flex items-center">
                  <ChevronRight className="h-4 w-4 text-amber-400 mr-2 group-hover:translate-x-1 transition-transform" />
                  <span className="text-gray-700 group-hover:text-amber-600 transition-colors">Our Work</span> 
                </Link>
              </li>
              <li>
                <Link to="/our-clients" onClick={() => window.scrollTo(0, 0)} className="group flex items-center">
                  <ChevronRight className="h-4 w-4 text-amber-400 mr-2 group-hover:translate-x-1 transition-transform" />
                  <span className="text-gray-700 group-hover:text-amber-600 transition-colors">Our Clients</span> 
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="group flex items-center">
                  <ChevronRight className="h-4 w-4 text-amber-400 mr-2 group-hover:translate-x-1 transition-transform" />
                  <span className="text-gray-700 group-hover:text-amber-600 transition-colors">About Us</span> 
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="group flex items-center">
                  <ChevronRight className="h-4 w-4 text-amber-400 mr-2 group-hover:translate-x-1 transition-transform" />
                  <span className="text-gray-700 group-hover:text-amber-600 transition-colors">Contact</span> 
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 relative inline-block">
              Contact Us
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full"></div>
            </h3>
            <ul className="space-y-5">
              <li className="group flex items-start transform transition-transform hover:translate-x-1">
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-amber-100 transition-colors">
                  <Mail className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-sm text-amber-500 font-medium mb-1">Email</p>
                  <a href="mailto:contact@starnexx.com" className="text-gray-700 hover:text-amber-600 transition-colors">
                    contact@starnexx.in
                  </a>
                </div>
              </li>
              <li className="group flex items-start transform transition-transform hover:translate-x-1">
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-amber-100 transition-colors">
                  <Phone className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-sm text-amber-500 font-medium mb-1">Phone</p>
                  <a href="tel:+15551234567" className="text-gray-700 hover:text-amber-600 transition-colors">
                    +91 8317864154
                  </a>
                </div>
              </li>
              {/* <li className="group flex items-start transform transition-transform hover:translate-x-1">
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-amber-100 transition-colors">
                  <MapPin className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-sm text-amber-500 font-medium mb-1">Address</p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 transition-colors">
                    IIT Kharagpur
                  </a>
                </div>
              </li> */}
            </ul>
          </motion.div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-amber-100 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © {currentYear} <Link to="/" className="text-amber-600 font-semibold hover:text-amber-500 transition-colors">Starnexx</Link>. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
                Privacy Policy
              </Link>
              <div className="h-4 w-0.5 bg-amber-100 rounded-full"></div>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
