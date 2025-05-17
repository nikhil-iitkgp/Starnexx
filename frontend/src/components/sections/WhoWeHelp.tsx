import { motion } from "framer-motion"
import { Youtube, Instagram, Building2, Tv, Briefcase, Megaphone } from "lucide-react"

const clients = [
  {
    title: "Content Creators",
    icon: <Youtube className="w-8 h-8" />,
    description: "YouTubers, vloggers, and digital content creators looking to enhance their video quality.",
    features: ["YouTube Videos", "Shorts & Reels", "Tutorial Videos", "Vlogs"]
  },
  {
    title: "Social Media Brands",
    icon: <Instagram className="w-8 h-8" />,
    description: "Brands focusing on social media marketing and engagement through video content.",
    features: ["Instagram Stories", "TikTok Videos", "Social Ads", "Platform-Optimized Content"]
  },
  {
    title: "Corporate Clients",
    icon: <Building2 className="w-8 h-8" />,
    description: "Businesses needing professional video content for internal and external communications.",
    features: ["Corporate Videos", "Training Materials", "Event Coverage", "Product Demos"]
  },
  {
    title: "Media Companies",
    icon: <Tv className="w-8 h-8" />,
    description: "Media organizations requiring high-quality video editing and post-production.",
    features: ["News Segments", "Documentary Editing", "Show Reels", "Broadcast Content"]
  },
  {
    title: "Startups",
    icon: <Briefcase className="w-8 h-8" />,
    description: "Early-stage companies looking to create impactful video content on a budget.",
    features: ["Pitch Videos", "Product Launches", "Company Culture", "Investor Presentations"]
  },
  {
    title: "Marketing Agencies",
    icon: <Megaphone className="w-8 h-8" />,
    description: "Agencies needing reliable video editing support for their client projects.",
    features: ["Ad Campaigns", "Client Deliverables", "Social Content", "Brand Videos"]
  }
]

export default function WhoWeHelp() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50/60 to-amber-100/40 opacity-80 z-0" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5 z-0" />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-[#FFF8E1] via-[#FFFAF0] to-white border border-amber-200 rounded-3xl p-8 md:p-12 shadow-xl backdrop-blur-sm">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 animate-fade-in-up"
            >
              Who We Help
            </motion.h2>
            <div className="h-1.5 bg-gradient-to-r from-amber-400 to-amber-500 w-1/2 mx-auto mt-3 rounded-full mb-4 animate-fade-in-up"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up"
            >
              We empower a diverse range of creators, brands, and businesses.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {clients.map((client, idx) => (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/90 rounded-3xl shadow-xl border border-amber-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center h-full p-8 group"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-6">
                  <div className="w-12 h-12 text-amber-500 bg-gradient-to-r from-amber-50 to-white rounded-full p-2.5 flex items-center justify-center shadow-sm">
                    {client.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{client.title}</h3>
                <p className="text-gray-700 mb-6">{client.description}</p>
                <ul className="space-y-3">
                  {client.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mr-2 shadow-sm" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
