import banner from "../assets/about-banner.jpg";

import mehndi from "../assets/mehndi.jpg";
import destination from "../assets/destination-wedding.jpg";
import cocktail from "../assets/cocktail.jpg";
import tours from "../assets/tours.jpg";
import corporate from "../assets/corporate.jpg";
import planner from "../assets/wedding-planner.jpg";
import decor from "../assets/theme-decor.jpg";
import catering from "../assets/catering.jpg";
import band from "../assets/live-band.jpg";
import celebrity from "../assets/celebrity.jpg";
import birthday from "../assets/birthday.jpg";

const ServiceBlock = ({ title, text, image, reverse }) => (
  <div
    className={`grid md:grid-cols-2 gap-10 items-start mb-20 ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
  >
    <div className={`${reverse ? "md:order-2" : ""}`}>
      <h2 className="text-3xl font-serif text-[#d6a85a] mb-4">
        {title}
      </h2>
      <p className="text-lg leading-7 text-gray-700">{text}</p>
    </div>

    <div className={`${reverse ? "md:order-1" : ""}`}>
      <img
        src={image}
        alt={title}
        className="w-full h-[260px] object-cover rounded shadow"
      />
    </div>
  </div>
);

export default function Services() {
  return (
    <div className="pt-20 bg-[#f8f3ea]">
      {/* ===== BANNER ===== */}
      <section
        className="h-[260px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-serif mb-1">Services</h1>
          <p className="text-sm">
            Home / <span className="text-[#d6a85a]">Services</span>
          </p>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <ServiceBlock
          title="Mehndi Event"
          image={mehndi}
          text="Our mehndi events are thoughtfully planned to celebrate tradition, color and togetherness. From vibrant seating arrangements and floral décor to smooth coordination of artists, music and guest flow, we ensure that the event remains joyful and stress-free. Every detail is curated to give families ample time to enjoy rituals, laughter and memorable moments."
        />

        <ServiceBlock
          title="Destination Wedding"
          image={destination}
          reverse
          text="We specialize in planning destination weddings at breathtaking locations such as beaches, palaces, resorts and hill destinations. From venue selection and guest hospitality to décor, logistics and on-ground coordination, our team manages every aspect with precision. You can relax and enjoy your celebrations while we handle the planning and execution seamlessly."
        />

        <ServiceBlock
          title="Cocktail Party"
          image={cocktail}
          text="Our cocktail party setups are designed to create a classy and lively atmosphere. We manage stylish bar counters, ambient lighting, elegant seating, music and service coordination. Whether it is a pre-wedding celebration or a corporate gathering, we focus on creating an energetic yet sophisticated experience for your guests."
        />

        <ServiceBlock
          title="Tours & Travels"
          image={tours}
          reverse
          text="We provide reliable tour and travel services for weddings, corporate events and group gatherings. From transportation planning and hotel coordination to guest pickups and drops, our team ensures smooth travel arrangements. Comfort, punctuality and convenience remain our top priorities throughout the journey."
        />

        <ServiceBlock
          title="Corporate Events"
          image={corporate}
          text="Our corporate event services include conferences, product launches, annual meets and brand promotions. We focus on professional execution with attention to branding, seating layouts, audio-visual arrangements and catering. Our structured planning ensures that events are executed smoothly while maintaining a strong brand presence."

        />

        <ServiceBlock
          title="Wedding Planner"
          image={planner}
          reverse
          text="As full-service wedding planners, we handle every stage of your wedding journey. From concept creation and décor design to vendor coordination, timelines and execution, we ensure a seamless experience. Our goal is to turn your vision into reality while allowing you and your family to enjoy every moment stress-free."

        />

        <ServiceBlock
          title="Theme Decor"
          image={decor}
          text="Our theme décor services are tailored to reflect your personal style and celebration vision. Using creative lighting, floral arrangements, props and color palettes, we transform venues into stunning spaces. Each design is customized to suit the occasion, creating a visually memorable experience."

        />

        <ServiceBlock
          title="Premium Catering"
          image={catering}
          reverse
          text="Our premium catering services offer a diverse range of cuisines prepared with the highest standards of quality and hygiene. From traditional Indian flavors to contemporary menus, we focus on taste, presentation and service. Menus are customized to suit the event type and guest preferences."

        />

        <ServiceBlock
          title="Live Band"
          image={band}
          text="We arrange professional live bands and musical performances to enhance the energy of your celebration. From soulful melodies to high-energy performances, our artists create an engaging atmosphere that keeps guests entertained and makes the event truly memorable."

        />

        <ServiceBlock
          title="Celebrity Management"
          image={celebrity}
          reverse
          text="Our celebrity management services include artist bookings, coordination and on-ground management. We ensure smooth communication, privacy, security and professional handling throughout the event. Whether it’s a performance or appearance, every detail is managed with care."

        />

        <ServiceBlock
          title="Birthday Parties"
          image={birthday}
          text="We plan exciting birthday parties for all age groups with themed décor, entertainment, activities and catering. From kids’ parties to milestone celebrations, we focus on creativity, fun and smooth execution to ensure joyful memories for both hosts and guests."

        />
      </section>
    </div>
  );
}
