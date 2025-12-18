import { useParams } from "react-router-dom";
import { useState } from "react";
import galleryData from "../data/gallery.json";

export default function Gallery() {
  const { category } = useParams();
  const data = galleryData[category];

  const [activeIndex, setActiveIndex] = useState(null);

  if (!data) {
    return (
      <div className="pt-24 text-center text-xl text-gray-600">
        Gallery not found
      </div>
    );
  }

  return (
    <div className="pt-20 bg-[#f8f3ea] min-h-screen">
      {/* ===== BANNER ===== */}
      <div className="bg-black text-white py-16 text-center">
        <h1 className="text-4xl font-serif mb-2">{data.title}</h1>
        <p className="text-sm text-gray-300">
          Home / <span className="text-[#d6a85a]">{data.title}</span>
        </p>
      </div>

      {/* ===== GRID ===== */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.images.map((img, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="relative cursor-pointer group"
            >
              <img
                src={img}
                alt=""
                className="w-full h-[260px] object-cover rounded shadow"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-[#d6a85a] text-3xl">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== LIGHTBOX ===== */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center">
          {/* Close */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={() =>
              setActiveIndex(
                activeIndex === 0
                  ? data.images.length - 1
                  : activeIndex - 1
              )
            }
            className="absolute left-6 text-white text-4xl"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={data.images[activeIndex]}
            alt=""
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />

          {/* Next */}
          <button
            onClick={() =>
              setActiveIndex(
                activeIndex === data.images.length - 1
                  ? 0
                  : activeIndex + 1
              )
            }
            className="absolute right-6 text-white text-4xl"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
