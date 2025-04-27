import { useRef } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function App() {
  const progressCircle = useRef<SVGSVGElement>(null)
  const progressContent = useRef<HTMLSpanElement>(null)

  const onAutoplayTimeLeft = (swiper: SwiperClass, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", `${1 - progress}`)
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
    }
  }

  const bannerImages = [
    "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]

  const bannerTexts = [
    "Reading books expands knowledge by introducing new ideas, cultures, and experiences. It strengthens our understanding of the world and sharpens critical thinking skills.",
    "Books improve emotional intelligence by allowing readers to experience different lives. This builds empathy, helping us connect better with people from diverse backgrounds and perspectives.",
    "Reading reduces stress and promotes relaxation. Immersing in a good story provides a healthy escape, easing anxiety and improving focus and mental clarity.",
    "Regular reading boosts memory, vocabulary, and creativity. It keeps the mind active, improves communication skills, and helps maintain cognitive health as we age.",
  ]

  return (
    <div className="relative w-full h-screen max-h-screen overflow-hidden">
      {/* Background Swiper - Only Images Change */}
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full h-full"
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-screen">
              <img
                src={image || "/placeholder.svg"}
                alt={`Banner slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
        <div
          className="absolute right-4 bottom-4 z-10 w-12 h-12 flex items-center justify-center font-bold text-white"
          slot="container-end"
        >
          <svg
            viewBox="0 0 48 48"
            ref={progressCircle}
            className="absolute left-0 top-0 z-10 w-full h-full stroke-white fill-none stroke-[4px] [stroke-dasharray:125.6] [stroke-dashoffset:calc(125.6*(1-var(--progress)))] -rotate-90"
          >
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      {/* Fixed Overlay - Stays in Place */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-20 flex items-center justify-center">
        <div className="max-w-3xl px-8 py-6 text-center">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed drop-shadow-lg mb-8">
            Discover the world of books and expand your knowledge through reading
          </h2>
          <button className="bg-white text-black hover:bg-gray-100 transition-colors px-6 py-3 rounded-full font-medium flex items-center mx-auto">
            <h2 className="">Explore Our Collection</h2>
          </button>
        </div>
      </div>

      {/* Custom Pagination */}
      <div className="custom-pagination absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2"></div>
    </div>
  );
}
