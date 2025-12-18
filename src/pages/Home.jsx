import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'

const slides = [
  {
    image: slide1,
    title: "Luxury Wedding & Event Management",
    subtitle: "Creating unforgettable moments",
  },
  {
    image: slide2,
    title: "Wedding Decoration & Catering",
    subtitle: "Elegant • Premium • Royal",
  },
  {
    image: slide3,
    title: "Corporate & Private Events",
    subtitle: "Perfect planning & execution",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* IMAGE */}
          <img
            src={slide.image}
            alt=""
            className="h-full w-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />

          {/* TEXT */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="text-[#d6a85a]">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-sm md:text-lg mb-6 text-gray-200">
                {slide.subtitle}
              </p>

              <div className="flex justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-[#d6a85a] text-black px-6 py-3 rounded hover:bg-yellow-500 transition"
                >
                  Book Now
                </a>
                <a
                  href="tel:08062429891"
                  className="border border-[#d6a85a] px-6 py-3 rounded hover:bg-[#d6a85a] hover:text-black transition"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full text-[#d6a85a] hover:bg-black"
      >
        <ChevronLeft size={28} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full text-[#d6a85a] hover:bg-black"
      >
        <ChevronRight size={28} />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === current ? "bg-[#d6a85a] w-6" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
