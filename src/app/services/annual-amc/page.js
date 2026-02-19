"use client";

import Image from "next/image";
import Link from "next/link";

export default function AnnualAMCPage() {
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
                Reliable{" "}
                <span className="text-[var(--primery)]">
                  Annual Maintenance Contracts (AMC)
                </span>
              </h1>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Reya AV offers{" "}
              <strong className="text-white">
                comprehensive Annual Maintenance Contracts (AMC)
              </strong>{" "}
              designed to keep your audio, visual, LED, acoustic, and lighting
              systems operating at peak performance.
              Our AMC services focus on{" "}
              <strong className="text-white">
                preventive maintenance, quick response, and system reliability
              </strong>.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Backed by{" "}
              <strong className="text-white">
                two decades of industry experience
              </strong>,
              our maintenance approach minimizes downtime, extends equipment life,
              and ensures uninterrupted guest experiences across hospitality and
              commercial spaces.
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
                  src:"/services/Annual AMC/Preventive Maintenance.jpg",
                  title: "Preventive Maintenance",
                  text: "Scheduled system checks to identify and resolve issues before they impact performance."
                },
                {
                   alt:"",
                  src:"/services/Annual AMC/Quick Response & Support.jpg",
                  title: "Quick Response & Support",
                  text: "Prompt technical assistance to minimize downtime and operational disruption."
                },
                {
                   alt:"",
                  src:"/services/Annual AMC/System Health Monitoring.jpg",
                  title: "System Health Monitoring",
                  text: "Continuous evaluation of system performance for long-term reliability."
                },
                {
                   alt:"",
                  src:"/\services/Annual AMC/Firmware & Configuration Updates.jpg",
                  title: "Firmware & Configuration Updates",
                  text: "Regular updates to keep systems optimized, secure, and compatible."
                },
                {
                   alt:"",
                  src:"/services/Annual AMC/buying_car_spare_parts_1__1.png",
                  title: "Spare Parts & Repairs",
                  text: "Efficient handling of repairs and replacement components as per AMC scope."
                },
                {
                   alt:"",
                  src:"/services/Annual AMC/Expert Technical Assistance.jpg",
                  title: "Expert Technical Assistance",
                  text: "Support from trained professionals with deep understanding of AV systems."
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
              AMC Coverage for{" "}
              <span className="text-[var(--primery)]">
                Hospitality & Commercial Spaces
              </span>
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
              <li>• Hotels & Banquet Halls</li>
              <li>• Pubs & Breweries</li>
              <li>• Restaurants & Cafés</li>
              <li>• Gyms & Wellness Spaces</li>
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
              Keep Your Systems Performing at Their Best
            </h2>
            <p className="text-gray-300 mb-8">
              Speak with our experts to customize an AMC plan that ensures
              reliability, longevity, and peace of mind for your AV systems.
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
