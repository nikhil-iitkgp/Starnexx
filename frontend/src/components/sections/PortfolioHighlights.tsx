import { longformVideos } from "@/data/longformVideoData"
import { shortformVideos } from "@/data/shortformVideoData"
import { thumbnailDesigns } from "@/data/thumbnailData"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, VideoIcon, ImageIcon } from "lucide-react"
import { useRef } from "react"
import LongformVideoCard from "@/components/portfolio/LongformVideoCard"
import ShortformVideoCard from "@/components/portfolio/ShortformVideoCard"
import ThumbnailCard from "@/components/portfolio/ThumbnailCard"

// Custom heading component for consistent styling
function SectionHeading({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="text-center inline-block">
      <div className="bg-white/90 px-10 py-4 rounded-xl shadow-md border-b-2 border-amber-400">
        <div className="flex items-center justify-center gap-3">
          <div className="text-amber-500">{icon}</div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h3>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-amber-400 to-amber-500 w-3/4 mx-auto mt-1 rounded-full"></div>
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
      return "h-[650px] md:h-[650px] overflow-hidden rounded-2xl shadow-lg"
    }
    return "rounded-2xl shadow-lg overflow-hidden border-2 border-amber-100 mb-4"
  }

  // Adjust item containers based on content type
  const getItemContainerClassName = () => {
    if (label.toLowerCase() === 'shortform') {
      return "min-w-[240px] max-w-[280px] mx-auto portrait-video-container scale-90 transform-gpu origin-top mb-6"
    }
    return `min-w-[320px] max-w-[340px] mx-auto mb-6`
  }

  return (
    <section 
      ref={sectionRef}
      className={`relative flex flex-col md:flex-row gap-12 md:gap-20 min-h-[600px] ${bg} rounded-3xl shadow-lg p-6 md:p-12 mb-28 overflow-visible`}
    >
      {/* Centered Heading */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <SectionHeading title={heading} icon={icon} />
      </div>
      
      {/* Left: Description and Static Example */}
      <div className="flex-1 min-w-[320px] max-w-md md:sticky md:top-32 self-start flex flex-col justify-center">
        <div className="mb-8 mt-20 md:mt-12">
          <p className="text-gray-600 mb-6 text-lg leading-relaxed bg-white/60 p-6 rounded-xl shadow-sm">{description}</p>
        </div>
        <div className={getContainerClassName()}>
          {renderItem(featured, -1)}
        </div>
      </div>
      
      {/* Right: Content area */}
      <div className="flex-1 min-h-0 flex flex-col mt-6 md:mt-12">
        {/* Shortform videos need special handling */}
        {label.toLowerCase() === 'shortform' ? (
          <div 
            className="hidden-scrollbar h-[760px] px-2 overflow-y-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-auto pb-4">
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
        ) : (
          <div 
            className="hidden-scrollbar h-[600px] px-2 overflow-y-auto"
          >
            <div className="space-y-6">
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

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/* Main Portfolio Heading */}
        <div className="text-center mb-24">
          <h2 className="section-heading animate-fade-in-up">
            Our Portfolio
            <div className="section-heading-underline"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
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
          icon={<VideoIcon size={24} strokeWidth={2} />}
          renderItem={(video, index) => <LongformVideoCard key={index} {...video} />}
        />
        
        {/* Shortform Video Section */}
        <ScrollLockSection
          heading="Short-Form Video Editing"
          description="We create engaging short-form content for Shorts, Reels, and TikTok. Our editors can reformat your old long-form videos or create brand new verticals from scratch to help you go viral."
          featured={featuredShortform[0]}
          items={featuredShortform.slice(1)}
          bg="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-amber-200/40 via-amber-50 to-orange-100/30 border-2 border-amber-100/50"
          label="Shortform"
          icon={<VideoIcon size={24} strokeWidth={2} className="rotate-90" />}
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
          icon={<ImageIcon size={24} strokeWidth={2} />}
          renderItem={(thumbnail, index) => <ThumbnailCard key={index} {...thumbnail} />}
        />
        
        {/* View Full Portfolio Button */}
        <div className="mt-20 text-center">
          <Link to="/our-work">
            <Button
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white gap-2 px-10 py-4 rounded-full shadow-xl text-lg font-bold scale-100 hover:scale-105 active:scale-95 duration-200 border-none"
            >
              View Full Portfolio <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Add this to your global CSS file
// .hidden-scrollbar::-webkit-scrollbar { display: none; }
