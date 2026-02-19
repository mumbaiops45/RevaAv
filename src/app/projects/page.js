"use client";
import Link from "next/link";
import Image from "next/image";


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
      className="px-4 md:px-10 lg:px-30 pt-10 md:pt-15 relative overflow-hidden
  before:content-[''] before:absolute before:inset-0
  before:bg-gradient-to-br
  before:from-[var(--primery)]/20
  before:via-[#0b1220]
  before:to-transparent
  before:z-[-1]

  after:content-[''] after:absolute after:-top-0
  after:w-full after:h-[400px]
  after:bg-[var(--primery)]
  after:opacity-20
  after:blur-[120px]
  after:rounded-full
  after:z-[-1]"
    >
      <div className="relative z-10 max-w-7xl mx-auto text-white">

        <h1 className="text-center text-3xl font-bold mb-6">
          Our <span className="text-[var(--primery)]">Projects</span>
        </h1>

        <p className="text-center max-w-3xl mx-auto text-gray-300 mb-12">
          Take a look at some of our successfully executed projects, where technology meets design to create immersive and high-performance AV environments.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 pb-50">

          {projects.map((project, i) => (
            <div
              key={i}
            >
              <div className="group w-full max-w-70 h-75 mx-auto [perspective:1000px] cursor-pointer relative">
                <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                  {/* Front Side */}
                  <div className="text-[15px] bg-white/10 backdrop-blur-lg border border-white/20
    shadow-lg rounded-xl p-6
    hover:border-[var(--primery)]
    transition duration-300 ease flex flex-col gap-5 text-center absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-md bg-[var(--primery)]/50 after:content-[''] 
after:absolute 
after:bottom-0 
after:left-0 
after:w-full 
after:h-[5px] 
after:bg-[var(--primery)]/70  ">
      {project}
                    
                  </div>

                  {/* Back Side */}
                  <div className=" bg-white/10 backdrop-blur-lg border border-white/20
    shadow-lg rounded-xl p-6
    hover:border-[var(--primery)]
    transition duration-300 ease flex flex-col gap-5 text-center absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-md bg-[var(--primery)]/50 text-white [transform:rotateY(180deg)] after:content-[''] 
after:absolute 
after:top-0
after:left-0 
after:w-full 
after:h-[5px] 
after:bg-[var(--primery)]/70 ">
                    <h3>Your brand could be the next name featured in our success stories.</h3>
                    <Link href="/contact" className="btn-primary ">
                      Contact Us
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
