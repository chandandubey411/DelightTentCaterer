import aboutBanner from "../assets/about-banner.jpg";
import aboutImage from "../assets/about-image.jpg";

export default function About() {
  return (
    <div className="pt-20 bg-[#f8f3ea] text-gray-800">
      {/* ===== PAGE BANNER ===== */}
      <section
        className="h-[260px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${aboutBanner})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-serif mb-2">About Us</h1>
          <p className="text-sm text-gray-200">
            Home / <span className="text-[#d6a85a]">About Us</span>
          </p>
        </div>
      </section>

      {/* ===== ABOUT CONTENT ===== */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl font-serif text-[#d6a85a] mb-6">
            About Us
          </h2>

          <p className="text-sm leading-7 mb-4">
            It was 2010 and our company Delight Tent & Caterer was doing great in
            corporate events with corporates from different industries.
            We were making our own rules and making most of all
            opportunities coming our way.
          </p>

          <p className="text-sm leading-7 mb-4">
            Our motto was, if we can take what is being done and better
            it by 1% we should be able to justify our existence.
          </p>

          <p className="text-sm leading-7 mb-4">
            This core principle led us into Decor & Wedding planning.
            We are Indian to the core and knew how important a wedding
            is in any family.
          </p>

          <p className="text-sm leading-7 mb-4">
            From that day to now, we have transformed ourselves into a
            wedding planning powerhouse not only in  Indirapuram , Vaishali , Vasundhra , Noida but also
            at destinations.
          </p>

          <p className="text-sm leading-7">
            We believe every wedding has a story to tell… what will
            yours say?
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={aboutImage}
            alt="About Prasvi Events"
            className="rounded shadow-lg w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ===== OUR SERVICES ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h3 className="text-2xl font-serif text-red-600 mb-6">
          Our Services :-
        </h3>

        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-sm">
          {[
            "Wedding Planner",
            "Tours & Travels",
            "Destination Wedding",
            "Theme Decor",
            "Premium Catering",
            "Live Band",
            "Celebrity Management",
            "Corporate Events",
            "Birthday Parties",
            "Cocktail",
            "Mehndi",
          ].map((service, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-black">✦</span>
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* ===== MISSION / VALUES / QUALITY ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-8">
        {/* MISSION */}
        <div className="bg-lime-400 p-6 shadow-lg">
          <h4 className="text-xl font-serif text-red-700 mb-4">
            Our Mission
          </h4>
          <p className="text-sm leading-6">
            We strive hard and go that extra mile to bring on your
            guests a smiling and appealing taste after indulging into
            the best dishes that we offer. A successful event is what
            we always aim for.
          </p>
        </div>

        {/* VALUES */}
        <div className="bg-cyan-400 p-6 shadow-lg">
          <h4 className="text-xl font-serif text-red-700 mb-4">
            Our Values
          </h4>
          <p className="text-sm leading-6">
            Authenticity is never compromised for novelty. Our menus
            stay dynamic while remaining rooted in Indian traditions
            and flavours refined over years.
          </p>
        </div>

        {/* QUALITY */}
        <div className="bg-yellow-400 p-6 shadow-lg">
          <h4 className="text-xl font-serif text-red-700 mb-4">
            Quality Assurance
          </h4>
          <p className="text-sm leading-6">
            Established in 2010, Prasvi Events is known not only for
            variety but also for quality. We assure best hygiene,
            service and a 100% delicious experience.
          </p>
        </div>
      </section>
    </div>
  );
}
