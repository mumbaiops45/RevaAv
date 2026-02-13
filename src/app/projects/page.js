"use client";

export default function ProjectsPage() {

  const projects = [
    "The Biere Club : First Micro Brewery, Bangalore (2011)",
    "Farzi Cafe : UB City, Lavelle Road",
    "BBQ : UB City",
    "City Bar (New) : MG Road",
    "Glass House : Lavelle Road",
    "Bootleggers : Lavelle Road",
    "The Local : Kamanahalli",
    "The Indian Kitchen : Orion Mall",
    "Chef Bakers : Chain of Pastry Shops",
    "Bootleggers : Indiranagar",
    "Liquid Street : Koramangala",
    "Forage : 6th Main, Indiranagar",
    "Shift Bar : Above House of Commons, HSR",
    "TBC (To Be Continued) : HSR",
    "Gravity Rooftop Pub : Nagavara",
    "Torque 92 : Kodihalli",
    "MugShot : Chennai",
    "The Loop : Chennai",
    "Aurum Luxury Gym : Indiranagar",
    "Milano : Whitefield",
    "Motherhood Hospital : Sarjapur",
    "Ultraviolette EV : Domlur",
  ];

  return (
    <div
      className="relative px-6 md:px-10 lg:px-30 pt-16 pb-20
      before:content-[''] before:absolute before:inset-0
      before:bg-[url('/service.webp')] before:bg-cover before:bg-center before:z-[-1]
      after:content-[''] after:absolute after:inset-0
      after:bg-black/80 after:z-[-1]"
    >
      <div className="relative z-10 max-w-7xl mx-auto text-white">

        <h1 className="text-center text-3xl font-bold mb-6">
          Our <span className="text-[var(--primery)]">Projects</span>
        </h1>

        <p className="text-center max-w-3xl mx-auto text-gray-300 mb-12">
          Professional audio-visual, LED, acoustic and lighting solutions
          across hospitality, corporate, healthcare and entertainment.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {projects.map((project, i) => (
            <div
              key={i}
              className={`
                scroll-slide
                relative bg-white/10 backdrop-blur-lg
                border border-white/20 rounded-xl p-6
                shadow-lg hover:border-[var(--primery)]
                transition duration-300

                ${i % 2 === 0 ? "lg:slide-left" : "lg:slide-right"}

                after:content-['']
                after:absolute after:left-0 after:bottom-0
                after:w-full after:h-[3px]
                after:bg-[var(--primery)]
              `}
            >
              <p className="text-gray-200">{project}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
