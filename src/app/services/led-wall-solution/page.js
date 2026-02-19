"use client";

import Image from "next/image";
import Link from "next/link";

export default function LedWallSolutionPage() {
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
        {/* HERO SECTION */}


        {/* INTRO / WHAT WE DELIVER */}
        <section
          className=""
        >
          <div className="flex flex-col justify-center items-center relative z-10 max-w-5xl mx-auto text-white space-y-6">
            <div className="relative z-10 max-w-6xl mx-auto px-10 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                High-Impact <span className="text-[var(--primery)]">LED Wall Solutions</span>
              </h1>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Reya AV delivers <strong className="text-white">professional LED wall solutions</strong>
              designed specifically for hospitality and commercial environments.
              From concept and system design to installation and commissioning,
              our LED walls are engineered for <strong className="text-white">clarity,
                brightness, and seamless performance</strong>.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Backed by <strong className="text-white">two decades of audio-visual
                industry experience</strong>, we focus on solutions that enhance
              ambience, engagement, and long-term operational reliability.
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
                  src:"/services/LED Wall Solution/Outdoor-LED-Walls.jpg",
                  title: "Indoor & Outdoor LED Walls",
                  text: "Custom-engineered LED wall solutions suitable for both indoor and outdoor hospitality environments."
                },
                { 
                  alt:"",
                  src:"/services/LED Wall Solution/Optimized-Pixel-Pitch-Selection.jpg",
                  title: "Optimized Pixel Pitch Selection",
                  text: "Carefully selected pixel pitch configurations to ensure sharp visuals at optimal viewing distances."
                },
                { 
                  alt:"",
                  src:"/services/LED Wall Solution/Seamless-Panel-Integration.jpg",
                  title: "Seamless Panel Integration",
                  text: "Precision installation ensuring uniform brightness, alignment, and a seamless viewing experience."
                },
                { 
                  alt:"",
                  src:"/services/LED Wall Solution/Content-&-Control-Systems.jpg",
                  title: "Content & Control Systems",
                  text: "Reliable control systems for smooth content playback, scheduling, and system management."
                },
                { 
                  alt:"",
                  src:"/services/LED Wall Solution/Hospitality-Focused-Design.jpg",
                  title: "Hospitality-Focused Design",
                  text: "LED walls designed to complement ambience, lighting, and overall interior aesthetics."
                },
                { 
                  alt:"",
                  src:"/services/LED Wall Solution/Long-Term-Reliability-&-Support..webp",
                  title: "Long-Term Reliability & Support",
                  text: "Solutions built for durability, backed by ongoing technical support and maintenance."
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
                                    alt={item.alt}
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
              LED Walls for <span className="text-[var(--primery)]">Hospitality Spaces</span>
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
              <li>• Hotels & Banquet Halls</li>
              <li>• Pubs & Breweries</li>
              <li>• Restaurants & Cafés</li>
              <li>• Corporate & Conference Spaces</li>
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
              Looking to Elevate Your Space with an LED Wall?
            </h2>
            <p className="text-gray-300 mb-8">
              Speak with our experts to design a reliable, high-impact LED wall
              solution tailored to your venue.
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
