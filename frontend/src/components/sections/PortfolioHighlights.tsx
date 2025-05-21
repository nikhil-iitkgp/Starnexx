import { longformVideos } from "@/data/longformVideoData"
import { shortformVideos } from "@/data/shortformVideoData"
import { thumbnailDesigns } from "@/data/thumbnailData"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, VideoIcon, ImageIcon } from "lucide-react"
import { useRef, useEffect } from "react"
import LongformVideoCard from "@/components/portfolio/LongformVideoCard"
import ShortformVideoCard from "@/components/portfolio/ShortformVideoCard"
import ThumbnailCard from "@/components/portfolio/ThumbnailCard"

// Custom heading component for consistent styling
function SectionHeading({ title, icon }: { title: string; icon: React.ReactNode }) {
  // Split title into two parts for controlled line breaks on mobile
  const formatTitleForMobile = (title: string) => {
    if (title.includes("Long-Form")) {
      return (
        <>
          <span className="sm:hidden whitespace-nowrap">
            Long-Form<br /> Video Editing
          </span>
          <span className="hidden sm:inline">{title}</span>
        </>
      );
    } else if (title.includes("Short-Form")) {
      return (
        <>
          <span className="sm:hidden whitespace-nowrap">
            Short-Form<br /> Video Editing
          </span>
          <span className="hidden sm:inline">{title}</span>
        </>
      );
    } else if (title.includes("Thumbnail")) {
      // For Thumbnail Designs, keep thumbnail on first line
      return (
        <>
          <span className="sm:hidden whitespace-nowrap">
            Thumbnail<br />Designs
          </span>
          <span className="hidden sm:inline">{title}</span>
        </>
      );
    }
    
    return title;
  };

  // Determine if we should show special icon styling for mobile
  const isVideoIcon = title.includes("Video");

  return (
    <div className="text-center inline-block service-title-card min-w-[140px] sm:min-w-0">
      <div className="bg-white shadow-md rounded-xl px-2 sm:px-5 md:px-8 pt-2 pb-3 sm:pt-3 sm:pb-5 relative overflow-hidden">
        <div className="flex items-center justify-center gap-1 sm:gap-3">
          <div className={`text-amber-500 ${isVideoIcon ? 'hidden sm:block' : 'scale-75 sm:scale-100'}`}>
            {icon}
          </div>
          {isVideoIcon && (
            <div className="text-amber-500 sm:hidden">
              <VideoIcon size={16} strokeWidth={2.5} className={title.includes("Short") ? "rotate-90" : ""} />
            </div>
          )}
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
            {formatTitleForMobile(title)}
          </h3>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-500"></div>
      </div>
    </div>
  )
}

// Generic Section component that handles different content types
function ScrollLockSection<T>({
  heading,
  description,
  featured,
  items,
  bg,
  label,
  renderItem,
  icon
}: {
  heading: string
  description: string
  featured: T
  items: T[]
  bg: string
  label: string
  renderItem: (item: T, index: number) => React.ReactNode
  icon: React.ReactNode
}) {
  const sectionRef = useRef<HTMLDivElement>(null)
  
  // Calculate appropriate container dimensions based on content type
  const getContainerClassName = () => {
    if (label.toLowerCase() === 'shortform') {
      // For shortform videos (Instagram reels), use portrait orientation
      return "h-auto overflow-hidden" 
    }
    return "rounded-2xl shadow-lg overflow-hidden border-2 border-amber-100 mb-4"
  }

  // Adjust item containers based on content type
  const getItemContainerClassName = () => {
    if (label.toLowerCase() === 'shortform') {
      return ""
    }
    return `min-w-[250px] sm:min-w-[280px] md:min-w-[320px] max-w-[340px] mx-auto mb-4 sm:mb-6`
  }

  return (
    <section
      ref={sectionRef}
      className={`relative flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 min-h-[500px] sm:min-h-[600px] ${label.toLowerCase() === 'shortform' ? 'shortform-section' : bg} rounded-3xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-12 mb-16 sm:mb-20 md:mb-28 overflow-visible`}
    >
      {/* Centered Heading */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[40%] sm:-translate-y-1/2 z-10 w-auto max-w-[85%] sm:max-w-none">
        <SectionHeading title={heading} icon={icon} />
      </div>
      
      {/* Left: Description and Static Example */}
      <div className="flex-1 min-w-[250px] md:max-w-md md:sticky md:top-32 self-start flex flex-col justify-center">
        <div className="mb-6 mt-16 sm:mt-20 md:mt-12">
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 leading-relaxed bg-amber-50 p-4 sm:p-6 rounded-xl shadow-sm">{description}</p>
        </div>
        <div className={getContainerClassName()}>
          {renderItem(featured, -1)}
        </div>
      </div>
      
      {/* Right: Content area */}
      <div className="flex-1 min-h-0 flex flex-col mt-4 md:mt-12">
        {/* Shortform videos need special handling */}
        {label.toLowerCase() === 'shortform' ? (
          <div 
            className="hidden-scrollbar h-[500px] sm:h-[600px] md:h-[760px] px-1 sm:px-2 overflow-y-auto"
            style={{ background: 'transparent', boxShadow: 'none', border: 'none' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 h-auto pb-4" 
                 style={{ background: 'transparent', boxShadow: 'none', border: 'none' }}>
              {items.map((item, idx) => (
                <div 
                  key={idx} 
                  className={getItemContainerClassName()}
                  style={{ background: 'transparent', boxShadow: 'none', border: 'none' }}
                >
                  {renderItem(item, idx)}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div 
            className="hidden-scrollbar h-[400px] sm:h-[500px] md:h-[600px] px-1 sm:px-2 overflow-y-auto"
          >
            <div className="space-y-4 sm:space-y-6">
              {items.map((item, idx) => (
                <div 
                  key={idx} 
                  className={getItemContainerClassName()}
                >
                  {renderItem(item, idx)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default function PortfolioHighlights() {
  // Select items for each section
  const featuredLongform = longformVideos.slice(0, 6)
  const featuredShortform = shortformVideos.slice(0, 6)
  const featuredThumbnails = thumbnailDesigns.slice(0, 6)

  // Add CSS styles directly
  useEffect(() => {
    // Create a style element
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      /* Hide scrollbar for Chrome, Safari and Opera */
      .hidden-scrollbar::-webkit-scrollbar {
        display: none;
      }
      
      /* Hide scrollbar for IE, Edge and Firefox */
      .hidden-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
      
      /* For portrait aspect ratio videos */
      .portrait-aspect {
        aspect-ratio: 9/16;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      
      .portrait-video-container {
        aspect-ratio: 9/16;
        height: auto;
      }
      
      /* Special styling for shortform section */
      .shortform-section *:not(.service-title-card):not(.service-title-card *) {
        background-color: transparent !important;
        box-shadow: none !important;
        border: none !important;
      }
      
      .shortform-section {
        background: rgba(254, 243, 199, 0.2) !important;
        border: 2px solid rgba(252, 211, 77, 0.3) !important;
      }
      
      /* Service title cards */
      @media (max-width: 480px) {
        .service-title-card {
          transform: scale(0.9);
          transform-origin: center top;
          width: auto;
        }
        
        .service-title-card h3 {
          line-height: 1.2;
          font-size: 1.1rem;
        }
      }
      
      @media (max-width: 360px) {
        .service-title-card {
          transform: scale(0.8);
        }
      }
    `;
    document.head.appendChild(styleEl);

    // Cleanup
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/* Main Portfolio Heading */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            Preview Our Work
            <div className="h-1 bg-gradient-to-r from-amber-400 to-amber-500 w-1/2 mx-auto mt-2 rounded-full"></div>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mt-4 sm:mt-6 font-medium">
            Discover our exceptional work that showcases our expertise in various video editing formats and thumbnail design.
          </p>
        </div>

        {/* Longform Video Section */}
        <ScrollLockSection
          heading="Long-Form Video Editing"
          description="Get motion graphics, audio and color correction, copyright-free music, stock footage, custom text, VFX, and more for your long-form videos. Our professional editors and personal video managers guarantee excellence and consistency on every single video."
          featured={featuredLongform[0]}
          items={featuredLongform.slice(1)}
          bg="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-100 via-amber-50 to-orange-50 border-2 border-amber-100/50"
          label="Longform"
          icon={<VideoIcon size={24} strokeWidth={2} className="text-amber-500" />}
          renderItem={(video, index) => <LongformVideoCard key={index} {...video} />}
        />
        
        {/* Shortform Video Section */}
        <ScrollLockSection
          heading="Short-Form Video Editing"
          description="We create engaging short-form content for Shorts, Reels, and TikTok. Our editors can reformat your old long-form videos or create brand new verticals from scratch to help you go viral."
          featured={featuredShortform[0]}
          items={featuredShortform.slice(1)}
          bg="bg-transparent border-2 border-amber-100/50"
          label="Shortform"
          icon={<VideoIcon size={24} strokeWidth={2} className="rotate-90 text-amber-500" />}
          renderItem={(video, index) => <ShortformVideoCard key={index} {...video} />}
        />
        
        {/* Thumbnail Section */}
        <ScrollLockSection
          heading="Thumbnail Designs"
          description="Our professional thumbnail artists create high performing thumbnails from scratch to boost your click-through rates and make your channel stand out."
          featured={featuredThumbnails[0]}
          items={featuredThumbnails.slice(1)}
          bg="bg-gradient-to-tr from-amber-100/80 via-amber-50 to-orange-200/30 border-2 border-amber-100/50 backdrop-blur-[1px]"
          label="Thumbnail"
          icon={<ImageIcon size={24} strokeWidth={2} className="text-amber-500" />}
          renderItem={(thumbnail, index) => <ThumbnailCard key={index} {...thumbnail} />}
        />
        
        {/* View Full Portfolio Button */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <Link to="/our-work">
            <Button
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white gap-2 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-xl text-base sm:text-lg font-bold scale-100 hover:scale-105 active:scale-95 duration-200 border-none"
            >
              View Full Portfolio <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}