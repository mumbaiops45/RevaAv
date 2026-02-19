"use client";

import Image from "next/image";
import Link from "next/link";

export default function LightingDesignInstallPage() {
  return (
    <>
      <div className="px-4 md:px-10 lg:px-25 pt-10 md:pt-15 relative overflow-hidden
  before:content-[''] before:absolute before:inset-0
  before:bg-gradient-to-br
  before:from-[var(--primery)]/20
  before:via-[#0b1220]
  before:to-transparent
  before:z-[-1]

  after:content-[''] after:absolute after:-top-0
  after:w-full after:h-full
  after:bg-[var(--primery)]
  after:opacity-20
  after:blur-[120px]
  after:rounded-full
  after:z-[-1]">
        {/* INTRO / WHAT WE DELIVER */}
        <section
          className=""
        >
          <div className="flex flex-col justify-center items-center relative z-10 max-w-5xl mx-auto text-white space-y-6">
            <div className="relative z-10 max-w-6xl mx-auto px-10 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional{" "}
                <span className="text-[var(--primery)]">
                  Lighting Design & Installation
                </span>
              </h1>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Reya AV delivers{" "}
              <strong className="text-white">
                professionally engineered lighting design and installation
              </strong>{" "}
              solutions tailored for hospitality and commercial environments.
              Our lighting systems are planned to create the perfect balance
              between <strong className="text-white">aesthetics, comfort,
                and operational efficiency</strong>.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Backed by{" "}
              <strong className="text-white">
                two decades of audio-visual industry experience
              </strong>,
              our lighting solutions seamlessly integrate with audio,
              visual, and control systems to deliver immersive environments.
            </p>
          </div>
        </section>

        {/* SPECIALITY CARDS */}
        <section
          className="pt-15"
        >
          <div className="relative z-10 max-w-6xl mx-auto text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
                { 
                   alt:"",
                  src:"/services/Lighting Design Install/Custom Lighting Design.jpg",
                  title: "Custom Lighting Design",
                  text: "Lighting layouts designed to suit the space, ambience, and functional requirements."
                },
                { 
                   alt:"",
                  src:"/services/Lighting Design Install/Architectural & Ambient Lighting.jpg",
                  title: "Architectural & Ambient Lighting",
                  text: "Lighting solutions that enhance interiors, mood, and visual appeal."
                },
                { 
                   alt:"",
                  src:"/services/Lighting Design Install/Dynamic & Mood Lighting.jpg",
                  title: "Dynamic & Mood Lighting",
                  text: "Flexible lighting systems that adapt to different times, events, and experiences."
                },
                { 
                   alt:"",
                  src:"/services/Lighting Design Install/Control & Automation Systems.jpg",
                  title: "Control & Automation Systems",
                  text: "Intuitive lighting controls for effortless operation and scene management."
                },
                { 
                   alt:"",
                  src:"/services/Lighting Design Install/Hospitality-Focused Lighting Solutions.jpg",
                  title: "Hospitality-Focused Lighting Solutions",
                  text: "Lighting designed to elevate guest comfort and overall hospitality experience."
                },
                { 
                   alt:"",
                  src:"/services/Lighting Design Install/Precision Installation & Support.jpg",
                  title: "Precision Installation & Support",
                  text: "Expert installation backed by long-term technical support and maintenance."
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center
                                               
                                             "
                >
                  <div class="px-4 py-4 flex flex-col justify-center items-center bg-white/10 backdrop-blur-lg
                                               border border-white/20
                                               rounded-xl shadow-lg
                                               hover:border-[var(--primery)]
                                               transition-all duration-300 ease-out bg-neutral-primary-soft block rounded-xl shadow-xs">
                    <Image
                      src={item.src}
                      alt={item.src}
                      width={500}
                      height={200}
                      className="rounded-xl w-full h-40 object-cover"
                    />

                    <div>
                      <h5 class="text-[var(--primery)] mt-6 mb-2">{item.title}</h5>
                      <p class="mb-6">{item.text}</p>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section
          className="pt-15"
        >
          <div className="relative z-10 max-w-5xl mx-auto text-white">
            <h2 className="relative pb-3 text-lg md:text-xl lg:text-2xl
        after:content-[''] after:absolute
        after:bg-[var(--primery)]
        after:h-1 after:w-1/3 after:left-0 after:bottom-0 text-3xl font-bold mb-8">
              Lighting Solutions for{" "}
              <span className="text-[var(--primery)]">
                Hospitality Spaces
              </span>
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
              <li>• Hotels & Banquet Halls</li>
              <li>• Pubs & Breweries</li>
              <li>• Restaurants & Cafés</li>
              <li>• Gyms & Wellness Spaces</li>
              <li>• Event & Entertainment Venues</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section
          className="pt-15"
        >
          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Transform Your Space with Intelligent Lighting
            </h2>
            <p className="text-gray-300 mb-8">
              Speak with our experts to design and install a lighting
              solution that enhances ambience, efficiency, and experience.
            </p>

            <Link href="/contact" className="btn-primary inline-block">
              <button type="button">
                Discuss Your Requirement
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
