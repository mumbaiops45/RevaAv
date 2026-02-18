"use client";

import Image from "next/image";
import Link from "next/link";

export default function VisualDesignInstallPage() {
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
                Professional <span className="text-[var(--primery)]">Visual Design & Installation</span>
              </h1>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Reya AV delivers <strong className="text-white">integrated visual design and installation solutions</strong>
              tailored for hospitality and commercial environments.
              Our visual systems are designed to deliver
              <strong className="text-white"> clarity, reliability, and seamless performance</strong>
              across diverse applications.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Backed by <strong className="text-white">two decades of audio-visual industry experience</strong>,
              our solutions ensure optimal viewing angles, consistent brightness,
              and smooth integration with audio, lighting, and control systems.
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
                  src:"/services/Visual Design Install/Visual Design Install.jpg",
                  title: "Custom Visual System Design",
                  text: "Tailored visual system layouts based on space requirements and viewing conditions."
                },
                {
                   alt:"",
                  src:"/services/Visual Design Install/Display & Projection Solutions.jpg",
                  title: "Display & Projection Solutions",
                  text: "Professional displays and projection systems designed for clarity and consistent performance."
                },
                {
                   alt:"",
                  src:"/services/Visual Design Install/Video Distribution & Switching.jpg",
                  title: "Video Distribution & Switching",
                  text: "Reliable video distribution systems for smooth content delivery across multiple displays."
                },
                {
                   alt:"",
                  src:"/services/Visual Design Install/Control & Automation Integration.jpg",
                  title: "Control & Automation Integration",
                  text: "User-friendly control systems enabling seamless operation of visual environments."
                },
                {
                   alt:"",
                  src:"/services/Visual Design Install/Hospitality-Focused Visual Design.jpg",
                  title: "Hospitality-Focused Visual Design",
                  text: "Visual solutions designed to complement interior aesthetics and guest experience."
                },
                {
                   alt:"",
                  src:"/services/Visual Design Install/Precision Installation & Support.jpg",
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
              Visual Solutions for <span className="text-[var(--primery)]">Hospitality Spaces</span>
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
              Upgrade Your Space with Seamless Visual Systems
            </h2>
            <p className="text-gray-300 mb-8">
              Speak with our experts to design and install a visual solution
              that enhances engagement and operational efficiency.
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
