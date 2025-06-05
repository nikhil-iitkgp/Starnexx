/* cspell:disable */
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, EffectCards } from "swiper/modules"
import { useState } from "react"
import type { Swiper as SwiperType } from 'swiper'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-cards"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote: "I was skeptical about outsourcing edits, but Starnexx proved me wrong. The first video itself made it to 500K views organically.",
    name: "Rajiv Lilaramani",
    role: "Content Creator"
  },
  {
    quote: "I needed someone who understood content and performance. Starnexx helped me create hooks and edit my shorts in a way that made people stop scrolling.",
    name: "Anushkaa Singh",
    role: "Influencer"
  },
  {
    quote: "Starnexx isn't just an editing team—they're growth partners. Their strategies, thumbnails, and hooks helped our brand go viral on Instagram.",
    name: "Marketing Manager",
    role: "Fashion Brand"
  },
  {
    quote: "I've tried a few editors before, but none matched Starnexx's creativity and speed. They just get what performs online. My reels now get 10x more reach.",
    name: "Rajeev Bhatia",
    role: "YouTuber"
  },
  {
    quote: "I gave them a bunch of long podcast clips. They turned them into 20+ shorts, and 3 of them hit over 1 million views. Absolutely recommend!",
    name: "Rajiv Lilaramani",
    role: "Podcast Host"
  },
  {
    quote: "I run a daily Shorts channel and needed a team who could keep up. Starnexx delivers clean, timely edits with great energy every single day.",
    name: "SpaceFrenz",
    role: "YouTube Channel"
  },
  {
    quote: "From perfect captions to zooms and sound syncs — their short-form editing is built for retention. My follower count doubled in 45 days.",
    name: "Social Media Coach",
    role: "Instagram"
  },
  {
    quote: "I send raw clips. They send back bangers. Every time. My Shorts consistently cross 100K views now, thanks to their sharp edits and perfect pacing.",
    name: "Content Creator",
    role: "TikTok & YouTube"
  },
  // Add duplicate slides to fix loop warning
  {
    quote: "I was skeptical about outsourcing edits, but Starnexx proved me wrong. The first video itself made it to 500K views organically.",
    name: "Rajiv Lilaramani",
    role: "Content Creator"
  },
  {
    quote: "I needed someone who understood content and performance. Starnexx helped me create hooks and edit my shorts in a way that made people stop scrolling.",
    name: "Anushkaa Singh",
    role: "Influencer"
  }
]

export default function TestimonialsCarousel() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  
  return (
    <div className="w-full py-16 bg-gradient-to-b from-amber-50/80 to-amber-100/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <div className="h-1 bg-gradient-to-r from-amber-400 to-amber-500 w-1/4 mx-auto mt-2 rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What our clients say about our services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <Swiper
            modules={[Autoplay, Pagination, EffectCards]}
            effect="cards"
            cardsEffect={{
              slideShadows: true,
              perSlideOffset: 8,
              perSlideRotate: 2,
            }}
            onSwiper={setSwiper}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            slidesPerView={1}
            slidesPerGroup={1}
            className="w-full h-[320px] md:h-[280px]"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index} className="w-full">
                <div className="relative bg-gradient-to-br from-white via-amber-50 to-amber-100 rounded-xl overflow-hidden shadow-xl border border-amber-200">
                  {/* Gold accent corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500 transform rotate-45 translate-x-8 -translate-y-8"></div>
                  
                  <div className="relative z-10 px-8 py-8 md:px-16 md:py-10">
                    {/* Five stars */}
                    <div className="flex mb-4 text-amber-500">
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                    
                    <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed mb-6">
                      "{t.quote}"
                    </p>
                    <div className="mt-auto border-t border-amber-200 pt-4">
                      <p className="text-amber-600 font-semibold">{t.name}</p>
                      <p className="text-amber-600/80 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons in a separate layer above everything */}
          <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none" style={{ zIndex: 40 }}>
            <button 
              onClick={() => swiper?.slidePrev()}
              className="pointer-events-auto absolute left-1 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-16 h-16 text-amber-600 hover:text-amber-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-14 h-14 stroke-[3]" strokeLinecap="round" strokeLinejoin="round" />
            </button>
            
            <button 
              onClick={() => swiper?.slideNext()}
              className="pointer-events-auto absolute right-1 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-16 h-16 text-amber-600 hover:text-amber-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-14 h-14 stroke-[3]" strokeLinecap="round" strokeLinejoin="round" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
