import banner from "../assets/catering-banner.jpg";
import mainImg from "../assets/catering-main.jpg";
import img1 from "../assets/catering1.jpg";
import img2 from "../assets/catering2.jpg";
import img3 from "../assets/catering3.jpg";

export default function Catering() {
  return (
    <div className="pt-20 bg-[#f8f3ea] text-gray-800">
      {/* ===== BANNER ===== */}
      <section
        className="h-[260px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-serif mb-2">Catering Services</h1>
          <p className="text-sm text-gray-200">
            Home / <span className="text-[#d6a85a]">Catering</span>
          </p>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-serif text-[#d6a85a] mb-6">
            Premium Catering for Every Occasion
          </h2>

          <p className="text-sm leading-7 mb-4">
            Our catering services are designed to deliver exceptional
            taste, presentation and service for every type of event.
            Whether it is a wedding celebration, corporate gathering
            or a private party, we focus on creating a memorable dining
            experience for your guests.
          </p>

          <p className="text-sm leading-7 mb-4">
            From traditional Indian cuisines to modern and fusion menus,
            our team works closely with clients to curate dishes that
            perfectly match the theme and scale of the event. Quality,
            hygiene and consistency remain our top priorities.
          </p>

          <p className="text-sm leading-7">
            With experienced chefs, trained service staff and
            well-organized execution, we ensure that food service runs
            smoothly and enhances the overall celebration.
          </p>
        </div>

        {/* IMAGE */}
        <div>
          <img
            src={mainImg}
            alt="Catering Services"
            className="w-full h-full object-cover rounded shadow-lg"
          />
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h3 className="text-2xl font-serif text-red-600 mb-6">
          What We Offer :-
        </h3>

        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-sm">
          {[
            "Wedding Catering",
            "Corporate Event Catering",
            "Birthday & Private Parties",
            "Live Food Counters",
            "Traditional Indian Cuisine",
            "Multi-Cuisine Menus",
            "Customized Menu Planning",
            "Professional Service Staff",
            "Strict Hygiene Standards",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-black">✦</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ===== IMAGE GRID ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src={img1}
            alt="Catering setup"
            className="h-[240px] w-full object-cover rounded shadow"
          />
          <img
            src={img2}
            alt="Food presentation"
            className="h-[240px] w-full object-cover rounded shadow"
          />
          <img
            src={img3}
            alt="Buffet service"
            className="h-[240px] w-full object-cover rounded shadow"
          />
        </div>
      </section>
    </div>
  );
}
