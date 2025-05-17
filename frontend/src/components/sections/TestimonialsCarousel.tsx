/* cspell:disable */
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, EffectCards } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-cards"

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
  return (
    <div className="w-full py-16 bg-gradient-to-b from-amber-50/80 to-amber-100/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What our clients say about our services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination, EffectCards]}
            effect="cards"
            cardsEffect={{
              slideShadows: false,
              perSlideOffset: 8,
              perSlideRotate: 2,
            }}
            autoplay={{ delay: 1000 }}
            pagination={{ clickable: true }}
            loop
            slidesPerView={1}
            slidesPerGroup={1}
            className="w-full h-[320px] md:h-[280px]"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index} className="w-full">
                <div className="relative bg-black rounded-lg overflow-hidden">
                  {/* Decorative outline frames */}
                  <div className="absolute top-0 left-0 w-full h-full border-2 border-white/20 rounded-lg transform rotate-1 translate-x-1 translate-y-1"></div>
                  <div className="absolute top-0 left-0 w-full h-full border-2 border-white/20 rounded-lg transform -rotate-1 -translate-x-1 -translate-y-1"></div>
                  
                  <div className="relative z-10 p-8 md:p-10">
                    <p className="text-white text-lg md:text-xl font-medium leading-relaxed mb-6">
                      "{t.quote}"
                    </p>
                    <div className="mt-auto">
                      <p className="text-amber-400 font-semibold">{t.name}</p>
                      <p className="text-amber-400/80 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
