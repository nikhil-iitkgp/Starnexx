/* cspell:disable */
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Youtube, Instagram } from "lucide-react";
import '../../styles/client-logo-grid.css';

// Client data with details from the provided spreadsheet
const clientData = [
  {
    id: 1,
    name: "Rajeev Bhatia",
    imageUrl: "/clients/img 1-Rajeev Bhatia.jpg",
    youtubeUrl: "https://www.youtube.com/@Rajeev.BhatiaCoach",
    instagramUrl: "https://www.instagram.com/rajeev.bhatia.coach/",
    designation: "Business Coach | Entrepreneur"
  },
  {
    id: 2,
    name: "Anushkaa Singh",
    imageUrl: "/clients/img -2 - Anushkaa Singh.jpg",
    youtubeUrl: "https://www.youtube.com/@ShreeOccultChronicles",
    instagramUrl: "",
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
    name: "Zoina Shaikh",
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
    youtubeUrl: "https://www.youtube.com/@rishiireborn",
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
    name: "Halal Mix",
    imageUrl: "/clients/Img 11 halal mix.jpg",
    youtubeUrl: "",
    instagramUrl: "https://www.instagram.com/thehalalmix/",
    designation: "Halal Restaurant"
  },
  {
    id: 12,
    name: "Space Frenz",
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
    name: "Kristina",
    imageUrl: "/clients/img 14 kristina.jpg",
    youtubeUrl: "",
    instagramUrl: "https://www.instagram.com/mannerswithkristina/?hl=en",
    designation: "Etiqutte Coach"
  },
  {
    id: 15,
    name: "Rise Up Creators",
    imageUrl: "/clients/img 15 -rise up creators.jpg",
    youtubeUrl: "",
    instagramUrl: "",
    designation: "Indie Singer"
  },
  {
    id: 16,
    name: "Urvi Gohil",
    imageUrl: "/clients/img 16 - urvi gohil.jpg",
    youtubeUrl: "https://www.youtube.com/@enrichlifestylewithurvi",
    instagramUrl: "https://www.instagram.com/enrich_lifestyle_with_urvi/",
    designation: "Clinical Dietitian"
  },
  {
    id: 17,
    name: "Anil Gupta",
    imageUrl: "/clients/img 17 anil gupta.jpg", 
    youtubeUrl: "",
    instagramUrl: "https://www.instagram.com/astrologistar/",
    designation: "Astrologer | CA"
  },
  {
    id: 18,
    name: "Pooja Bhalla",
    imageUrl: "/clients/img 18 pooja bhalla.jpg",
    youtubeUrl: "https://www.youtube.com/@easyvasstu",
    instagramUrl: "https://www.instagram.com/easyvasstu9/",
    designation: "Astrologist"
  }
];

// First row: first 9 clients
const firstRowClients = clientData.slice(0, 9);
// Second row: last 9 clients
const secondRowClients = clientData.slice(9, 18);

interface ClientLogoProps {
  client: typeof clientData[0];
  index: number;
  onHover: (hovered: boolean, clientId: number) => void;
  activeClientId: number | null;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ client, onHover, activeClientId }) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isActive = activeClientId === client.id;
  const isTop = client.id <= 9;

  // Handle outside clicks for mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node) &&
          containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onHover(false, -1);
      }
    };

    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside as EventListener);
      document.addEventListener('touchstart', handleClickOutside as EventListener);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside as EventListener);
      document.removeEventListener('touchstart', handleClickOutside as EventListener);
    };
  }, [isActive, onHover]);

  return (
    <div 
      ref={containerRef}
      className={`flex-shrink-0 relative client-logo-container z-1 ${isActive ? 'z-20' : 'z-10'}`}
      onMouseEnter={() => onHover(true, client.id)}
      onMouseLeave={() => onHover(false, client.id)}
      style={{ position: 'relative' }}
    >
      {/* Tooltip with connector */}
      <div
        ref={tooltipRef}
        className={`
          absolute left-1/2 -translate-x-1/2
          ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} 
          z-[9999]
          transition-opacity duration-300 ease-in-out
          bg-white border border-amber-400 rounded-lg md:rounded-xl p-1.5 sm:p-2 md:p-4 shadow-lg text-center
          w-[140px] sm:w-[180px] md:w-max
          max-w-[calc(100vw-2rem)]
        `}
        style={{ 
          position: 'absolute', 
          bottom: isTop ? '100%' : 'auto',
          top: isTop ? 'auto' : '100%',
          marginBottom: isTop ? '8px' : '0',
          marginTop: isTop ? '0' : '8px',
        }}
      >
        {/* Invisible connector */}
        <div 
          className="absolute w-full bg-transparent"
          style={{
            height: '16px',
            bottom: isTop ? '-16px' : 'auto',
            top: isTop ? 'auto' : '-16px',
            left: '0',
          }}
        />
        <h3 className="text-[11px] sm:text-sm md:text-base font-bold text-gray-900 leading-tight">{client.name}</h3>
        {client.designation && (
          <p className="text-[9px] sm:text-xs md:text-sm text-gray-600 mt-0.5 sm:mt-1 leading-tight">{client.designation}</p>
        )}
        <div className="flex justify-center items-center gap-1 sm:gap-2 mt-1 sm:mt-1.5 md:mt-2">
          {client.youtubeUrl && (
            <a href={client.youtubeUrl} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform p-0.5 sm:p-1" title={`Visit ${client.name}'s YouTube`} aria-label={`Visit ${client.name}'s YouTube`}>
              <Youtube className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-amber-500" />
            </a>
          )}
          {client.instagramUrl && (
            <a href={client.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform p-0.5 sm:p-1" title={`Visit ${client.name}'s Instagram`} aria-label={`Visit ${client.name}'s Instagram`}>
              <Instagram className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-amber-500" />
            </a>
          )}
        </div>
      </div>
      {/* Logo */}
      <div className={`h-24 w-24 md:h-32 md:w-32 lg:h-38 lg:w-38 rounded-full bg-white shadow-md flex items-center justify-center p-2 overflow-visible border-2 ${isActive ? 'border-amber-400' : 'border-amber-100'} hover:shadow-lg hover:border-amber-300 transition-all duration-300 relative`}>
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
  speed = 3,
}: {
  clients: typeof clientData;
  direction: "left" | "right";
  speed?: number;
}) => {
  const [activeClientId, setActiveClientId] = useState<number | null>(null);
const pauseTimeout = useRef<NodeJS.Timeout | null>(null);

const handleHover = (hovered: boolean, clientId: number) => {
  if (hovered) {
    pauseTimeout.current = setTimeout(() => {
      setActiveClientId(clientId);
    }, 150); // Add a small delay before pausing
  } else {
    if (pauseTimeout.current) {
      clearTimeout(pauseTimeout.current);
    }
    setActiveClientId(null);
  }
  // const [activeClientId, setActiveClientId] = useState<number | null>(null);
  
  // const handleHover = (hovered: boolean, clientId: number) => {
  //   setActiveClientId(hovered ? clientId : null);
  };
  
  const repeatedClients = [];
  for (let i = 0; i < 10; i++) {
    repeatedClients.push(...clients);
  }
  
  const animationClass = direction === "left" ? "scroll-left" : "scroll-right";
  const duration = speed;
  
  return (
    <div className="relative w-full overflow-visible py-8" style={{ isolation: 'isolate' }}>
      <div 
        className={`flex gap-6 sm:gap-12 md:gap-16 ${animationClass} ${activeClientId !== null ? 'paused' : ''}`}
        style={{ 
          ['--animation-duration' as any]: `${duration}s`,
          position: 'relative',
          zIndex: 1,
          transition: 'animation-play-state 0.3s ease'
        }}
      >
        {repeatedClients.map((client, index) => (
          <ClientLogo 
            key={`${client.id}-${index}`} 
            client={client} 
            index={index}
            onHover={handleHover}
            activeClientId={activeClientId}
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
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#FFF8E1] via-[#FFFAF0] to-white opacity-80 z-0" />
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-amber-100 opacity-50 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-amber-200 opacity-40 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-50 opacity-60 blur-3xl" />
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-[15%] w-16 h-16 rotate-45 border-2 border-amber-200 opacity-40" />
      <div className="absolute bottom-20 left-[10%] w-12 h-12 rounded-full border-2 border-amber-300 opacity-30" />
      
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
              <div className="absolute -bottom-2 left-0 right-0 h-1 mx-auto bg-gradient-to-r from-amber-300 to-amber-500 rounded-full" />
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-lg text-gray-600"
            >
              Proud to work with amazing clients!
            </motion.p>
          </div>

          {/* First Row Container */}
          <div className="relative z-20 mt-20">
            <InfiniteLogoScroll 
              clients={firstRowClients} 
              direction="left" 
              speed={10} 
            />
          </div>

          {/* Second Row Container */}
          <div className="relative z-10 mb-42">
            <InfiniteLogoScroll 
              clients={secondRowClients} 
              direction="right" 
              speed={10} 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}