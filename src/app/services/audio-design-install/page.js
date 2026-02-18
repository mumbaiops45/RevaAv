"use client";

import Image from "next/image";
import Link from "next/link";

export default function AudioDesignInstallPage() {
  return (
    <>
      <div className="px-4 md:px-10 lg:px-30 pt-10 md:pt-15 relative overflow-hidden
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
                Professional <span className="text-[var(--primery)]">Audio Design & Installation</span>
              </h1>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Reya AV delivers <strong className="text-white">custom audio design and installation solutions</strong>
              tailored for hospitality and commercial environments.
              Every system is engineered with a deep understanding of
              <strong className="text-white"> acoustics, space dynamics, and audience experience</strong>.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Backed by <strong className="text-white">two decades of experience</strong>
              in professional audio and live entertainment, our solutions ensure
              balanced sound coverage, operational reliability, and long-term performance.
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
                   alt:"Custom-Audio-System-Design",
                  src:"/services/Audio Design Install/Custom-Audio-System-Design.jpg",
                  title: "Custom Audio System Design",
                  text: "Tailored sound system designs based on space layout, acoustics, and intended usage."
                },
                {
                   alt:"High-Quality-Speaker-Selection",
                  src:"/services/Audio Design Install/High-Quality-Speaker-Selection.jpeg",
                  title: "High-Quality Speaker Selection",
                  text: "Carefully selected professional loudspeakers to ensure clarity, coverage, and tonal balance."
                },
                {
                   alt:"Amplification-&-Signal-Processing",
                  src:"/services/Audio Design Install/Amplification-&-Signal-Processing.jpeg",
                  title: "Amplification & Signal Processing",
                  text: "Reliable amplifiers and DSP configuration for consistent performance and system protection."
                },
                {
                   alt:"Zoned-Audio-Distribution",
                  src:"/services/Audio Design Install/Zoned-Audio-Distribution.jpg",
                  title: "Zoned Audio Distribution",
                  text: "Multi-zone audio solutions allowing independent control across different areas."
                },
                {
                   alt:"",
                  src:"/services/Audio Design Install/Seamless-System-Integration.jpg",
                  title: "Seamless System Integration",
                  text: "Audio systems integrated smoothly with visuals, lighting, and control platforms."
                },
                {
                   alt:"",
                  src:"/services/Audio Design Install/Long-Term-Reliability-&-Support.webp",
                  title: "Long-Term Reliability & Support",
                  text: "Built for durability and backed by ongoing technical support and maintenance."
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
                                    className="rounded-xl w-full h-35 object-cover"
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
              Audio Solutions for <span className="text-[var(--primery)]">Hospitality Spaces</span>
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
              <li>• Hotels & Banquet Halls</li>
              <li>• Pubs & Breweries</li>
              <li>• Restaurants & Cafés</li>
              <li>• Gyms & Fitness Studios</li>
              <li>• Corporate & Event Venues</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section
          className="pt-15"
        >
          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Need a Professionally Engineered Audio System?
            </h2>
            <p className="text-gray-300 mb-8">
              Consult our experts to design and install an audio solution
              perfectly suited to your space and audience.
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
