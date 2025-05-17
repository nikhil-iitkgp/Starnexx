/* cspell:disable */
import { motion } from "framer-motion";
import { useState } from "react";
import { Youtube, Instagram } from "lucide-react";
import '../../styles/client-logo-grid.css';

// Client data with details from the provided spreadsheet
const clientData = [
  {
    id: 1,
    name: "Rajeev Bhatia",
    imageUrl: "/clients/img 1-Rajeev Bhatia.jpg",
    youtubeUrl: "https://www.youtube.com/@RajeevBhatiaCoach",
    instagramUrl: "https://www.instagram.com/rajeev.bhatia.coach/",
    designation: "Business Coach | Entrepreneur"
  },
  {
    id: 2,
    name: "Anushkaa Singh",
    imageUrl: "/clients/img -2 - Anushkaa Singh.jpg",
    youtubeUrl: "https://www.youtube.com/@shreeoocultchronicles",
    instagramUrl: "https://www.instagram.com/vastubyanushkaa/",
    designation: "Professional Vedic Astrologer"
  },
  {
    id: 3,
    name: "Prism School of Music",
    imageUrl: "/clients/img 3 -Prism-school-of-music.jpg",
    youtubeUrl: "",
    instagramUrl: "https://www.instagram.com/prismschoolofmusic",
    designation: "Music School"
  },
  {
    id: 4,
    name: "ICBA",
    imageUrl: "/clients/img 4- ICBA.jpg",
    youtubeUrl: "",
    instagramUrl: "https://www.instagram.com/icbaclub/",
    designation: "Faceless Motivational Content"
  },
  {
    id: 5,
    name: "Rajiv Lilaramani",
    imageUrl: "/clients/Img 5 Rajiv.jpg",
    youtubeUrl: "https://www.youtube.com/@rajivlilaramani/featured",
    instagramUrl: "https://www.instagram.com/rajivlilaramani/",
    designation: ""
  },
  {
    id: 6,
    name: "Rajneesh Khattar",
    imageUrl: "/clients/Img 6-Rajneesh.jpg",
    youtubeUrl: "",
    instagramUrl: "https://www.instagram.com/coachrajneeshkhattar/",
    designation: "Digital Business Coach"
  },
  {
    id: 7,
    name: "Zoina",
    imageUrl: "/clients/Img 7 - Zoina.jpg",
    youtubeUrl: "",
    instagramUrl: "https://www.instagram.com/crypto_zoina/",
    designation: "Web3 Entrepreneur"
  },
  {
    id: 8,
    name: "Ivaylo Dmitrov",
    imageUrl: "/clients/img 8 ivaylo.jpg",
    youtubeUrl: "",
    instagramUrl: "",
    designation: "Real Estate Advisor"
  },
  {
    id: 9,
    name: "Rishi Arora",
    imageUrl: "/clients/img 9 rishi arora.jpg",
    youtubeUrl: "https://www.youtube.com/channel/UCNSeoYRFsWB8zdlhZxl_XaA",
    instagramUrl: "",
    designation: "Growth and Transformation"
  },
  {
    id: 10,
    name: "Rubal Dhankar",
    imageUrl: "/clients/img 10 rubal dhankar.jpg",
    youtubeUrl: "",
    instagramUrl: "https://www.instagram.com/rubaldhankar/",
    designation: "Fitness Coach"
  },
  {
    id: 11,
    name: "halal mix",
    imageUrl: "/clients/Img 11 halal mix.jpg",
    youtubeUrl: "",
    instagramUrl: "https://www.instagram.com/thehalalmix/",
    designation: "Halal Restaurant"
  },
  {
    id: 12,
    name: "space frenz",
    imageUrl: "/clients/img 12 space frenz.jpg",
    youtubeUrl: "https://www.youtube.com/@spacefrenz",
    instagramUrl: "https://www.instagram.com/spacefrenz/",
    designation: "Faceless Content Creator"
  },
  {
    id: 13,
    name: "BigRaf",
    imageUrl: "/clients/img 13 bigraf.jpg",
    youtubeUrl: "https://www.youtube.com/@lebigraf",
    instagramUrl: "https://www.instagram.com/lebigraf/",
    designation: "Crypto Motivation"
  },
  {
    id: 14,
    name: "kristina",
    imageUrl: "/clients/img 14 kristina.jpg",
    youtubeUrl: "",
    instagramUrl: "https://www.instagram.com/mannerswithkristina/?hl=en",
    designation: "Etiqutte Coach"
  }
];

// First row: first 7 clients
const firstRowClients = clientData.slice(0, 7);
// Second row: last 7 clients
const secondRowClients = clientData.slice(7, 14);

interface ClientLogoProps {
  client: typeof clientData[0];
  index: number;
  onHover: (hovered: boolean) => void;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ client, onHover }) => {
  return (
    <div 
      className="flex-shrink-0 relative client-logo-container group z-1"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {/* Tooltip */}
      <div
        className={`
          absolute left-1/2 -translate-x-1/2
          opacity-0 pointer-events-none z-10
          group-hover:opacity-100 group-hover:pointer-events-auto group-hover:z-50
          transition-all duration-200
          bg-white border-2 border-amber-400 rounded-xl p-4 shadow-lg text-center
          ${client.id <= 7 ? 'tooltip-top' : 'tooltip-bottom'}
        `}
      >
        <h3 className="text-lg font-bold text-gray-900">{client.name}</h3>
        {client.designation && (
          <p className="text-sm text-gray-600 mt-1">{client.designation}</p>
        )}
        <div className="flex justify-center gap-2 mt-2">
          {client.youtubeUrl && (
            <a href={client.youtubeUrl} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title={`Visit ${client.name}'s YouTube`} aria-label={`Visit ${client.name}'s YouTube`}>
              <Youtube className="w-5 h-5 text-amber-500" />
            </a>
          )}
          {client.instagramUrl && (
            <a href={client.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title={`Visit ${client.name}'s Instagram`} aria-label={`Visit ${client.name}'s Instagram`}>
              <Instagram className="w-5 h-5 text-amber-500" />
            </a>
          )}
        </div>
      </div>
      {/* Logo */}
      <div className="h-28 w-28 md:h-40 md:w-40 lg:h-44 lg:w-44 rounded-full bg-white shadow-md flex items-center justify-center p-5 overflow-visible border-2 border-amber-100 hover:shadow-lg hover:border-amber-300 transition-all duration-300 relative">
        <img
          src={client.imageUrl}
          alt={client.name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
};

const InfiniteLogoScroll = ({
  clients,
  direction = "left",
  speed = 30,
}: {
  clients: typeof clientData;
  direction: "left" | "right";
  speed?: number;
}) => {
  // State to track if any logo is being hovered
  const [isPaused, setIsPaused] = useState(false);
  
  // Create a doubled set of clients to ensure we have enough for continuous scrolling
  const doubledClients = [...clients, ...clients];
  
  // Animation style class based on direction
  const animationClass = direction === "left" ? "scroll-left" : "scroll-right";
  
  return (
    <div className="relative w-full overflow-visible py-8">
      <div 
        className={`flex gap-16 ${animationClass} ${isPaused ? 'paused' : ''}`}
        style={{ ['--animation-duration' as any]: `${speed}s` }}
      >
        {doubledClients.map((client, index) => (
          <ClientLogo 
            key={`${client.id}-${index}`} 
            client={client} 
            index={index}
            onHover={setIsPaused}
          />
        ))}
      </div>
    </div>
  );
};

export default function ClientLogoGrid() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#FFF8E1] via-[#FFFAF0] to-white opacity-80 z-0"></div>
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-amber-100 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-amber-200 opacity-40 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-50 opacity-60 blur-3xl"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-[15%] w-16 h-16 rotate-45 border-2 border-amber-200 opacity-40"></div>
      <div className="absolute bottom-20 left-[10%] w-12 h-12 rounded-full border-2 border-amber-300 opacity-30"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-0"
        >
          <div className="text-center mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block"
            >
              Our Clients
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 to-amber-500 rounded-full"></div>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-lg text-gray-600"
            >
              Proud to work with amazing brands
            </motion.p>
          </div>

          {/* First Row Container */}
          <div className="relative z-20 mt-20">
            <InfiniteLogoScroll 
              clients={firstRowClients} 
              direction="left" 
              speed={60} 
            />
          </div>

          {/* Second Row Container */}
          <div className="relative z-10 mb-42">
            <InfiniteLogoScroll 
              clients={secondRowClients} 
              direction="right" 
              speed={65} 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
