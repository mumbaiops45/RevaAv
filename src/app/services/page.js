"use client";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
    const services = [
        { name: "LED Wall Solutions", href: "#led-wall-solution" },
        { name: "Audio Design & Installation", href: "#audio-design-install" },
        { name: "Acoustic Design & Installation", href: "#acoustic-design-install" },
        { name: "Visual Design & Integration", href: "#visual-design-install" },
        { name: "Lighting Design & Installation", href: "#lighting-design-install" },
        { name: "Annual Maintenance Contracts (AMC)", href: "#annual-amc" },
    ];

    return (
        <div>
            <div className="px-4 md:px-10 lg:px-30 pt-10 md:pt-15 relative overflow-hidden
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

                    {/* Heading */}
                    <h1 className="text-center text-4xl font-bold mb-16">
                        Our <span className="text-[var(--primery)]">Services</span>
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* LEFT CONTENT */}
                        <div>
                            <h2 className="text-center text-4xl font-bold mb-6">
                                Take What{" "}
                                <span className="text-[var(--primery)]">You Need</span>
                            </h2>
                            <div className="grid grid-cols-1 gap-6 text-center  ">
                                {services.map((service, i) => (
                                    <a
                                        key={i}
                                        href={service.href}
                                        className="
        bg-white/10 backdrop-blur-lg
        border border-white/20
        px-8 py-6 rounded-xl
        hover:border-[var(--primery)]
        transition-all duration-300 ease-out
        hover:-translate-y-1
        block
      "
                                    >
                                        <p className="text-lg font-medium">
                                            {service.name}
                                        </p>
                                    </a>
                                ))}
                            </div>




                        </div>

                        {/* RIGHT text */}
                        <div className="my-auto md:mt-13">
                            <p className="text-gray-300 leading-[2.5] max-w-md mb-8">
                                Reya AV is a leading audio-visual system integration company based in Bangalore, established in 2017 by Mr. Akash Gupta, who brings over 20 years of experience in the audio and events industry. Originating from Auto Entertainment Inc. (2005), the company has grown into a trusted partner for hospitality and commercial AV solutions.

                                We specialize in LED Wall Solutions, Audio Design & Installation, Acoustic Design, Visual Integration, Lighting Design, and Annual Maintenance Contracts (AMC) — delivering reliable, high-quality systems that enhance ambience, performance, and customer experience across pubs, restaurants, gyms, corporate spaces, and event venues.

                                At Reya AV, we focus on innovation, quality, and seamless integration to create immersive audio-visual environments.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
            <div id="led-wall-solution" className="intro px-4 md:px-10 lg:px-30 pt-10 md:pt-15 relative overflow-hidden
  before:content-[''] before:absolute before:inset-0
  before:bg-gradient-to-br
  before:from-[var(--primery)]/20
  before:via-[#0b1220]
  before:to-transparent
  before:z-[-1]

  after:content-[''] after:absolute after:-top-32 after:-left-32
  after:w-[400px] after:h-[400px]
  after:bg-[var(--secondary)]
  after:opacity-15
  after:blur-[120px]
  after:rounded-full
  after:z-[-1]

  
  text-white scroll-fade"
            >
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">

                    {/* TEXT SECTION */}
                    <div className="flex flex-col items-start gap-5 md:w-3/5">

                        <h2
                            className="relative pb-3 text-white text-2xl md:text-3xl font-semibold
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:w-1/3 after:h-[3px] after:bg-[var(--primery)]"
                        >
                            <span className="text-[var(--primery)]">
                                LED Wall Solutions
                            </span>{" "}
                            for Events, Corporate & Commercial Spaces
                        </h2>

                        <p className="text-gray-200">
                            <strong>Reya AV</strong> provides professional
                            <strong> LED wall solutions in Bangalore</strong> delivering
                            high-resolution visual displays for events, corporate offices,
                            retail spaces, hospitality venues, and commercial environments.
                            Our LED video walls ensure vibrant visuals, seamless
                            integration, and reliable performance along with installation,
                            consultation, and AMC support.
                        </p>

                        {/* FIXED LINK BUTTON */}
                        <Link className='btn-primary' href="/services/led-wall-solution">
                            <button type="button">
                                KNOW MORE
                            </button>
                        </Link>
                    </div>

                    {/* IMAGE SECTION */}
                    <div className="md:w-2/5">
                        <Image
                            src="/led-wall-solutions-service.webp"
                            alt="LED wall display solution Bangalore"
                            width={600}
                            height={400}
                            className="rounded-xl w-full h-auto"
                        />
                    </div>

                </div>
            </div>
            <div id="audio-design-install" className="intro px-4 md:px-10 lg:px-30 pt-10 md:pt-15 relative overflow-hidden
  before:content-[''] before:absolute before:inset-0
  before:bg-gradient-to-br
  before:from-[var(--primery)]/20
  before:via-[#0b1220]
  before:to-transparent
  before:z-[-1]

  after:content-[''] after:absolute after:-top-32 after:-right-32
  after:w-[400px] after:h-[400px]
  after:bg-[var(--secondary)]
  after:opacity-15
  after:blur-[120px]
  after:rounded-full
  after:z-[-1]

  
  text-white scroll-fade"
            >
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 relative z-10">

                    {/* TEXT SECTION */}
                    <div className="flex flex-col items-start gap-5 md:w-3/5">

                        <h2 className="relative pb-3 text-white text-2xl md:text-3xl font-semibold
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:w-1/3 after:h-[3px] after:bg-[var(--primery)]"
                        >
                            <span className="text-[var(--primery)]">
                                Audio Design & Installation
                            </span>{" "}
                            for Clear & Powerful Sound Systems
                        </h2>

                        <p className="text-gray-200">
                            <strong>Reya AV</strong> delivers professional
                            <strong> audio design and installation solutions in Bangalore </strong>
                             for hospitality venues, corporate offices, auditoriums, retail
                            environments, and events. We provide complete sound system
                            planning, installation, calibration, and AMC support to ensure
                            crystal-clear audio quality and reliable performance.
                        </p>

                        <Link href="/services/audio-design-installation" className="btn-primary">
                            KNOW MORE
                        </Link>

                    </div>

                    {/* IMAGE SECTION */}
                    <div className="md:w-2/5">
                        <Image
                            src="/audio-design-install-service.jpg"
                            alt="Audio design installation systems"
                            width={600}
                            height={400}
                            className="rounded-xl w-full h-auto"
                        />
                    </div>

                </div>
            </div>
            <div id="acoustic-design-install" className="intro px-4 md:px-10 lg:px-30 pt-10 md:pt-15 relative overflow-hidden
  before:content-[''] before:absolute before:inset-0
  before:bg-gradient-to-br
  before:from-[var(--primery)]/20
  before:via-[#0b1220]
  before:to-transparent
  before:z-[-1]

  after:content-[''] after:absolute after:-top-32 after:-left-32
  after:w-[400px] after:h-[400px]
  after:bg-[var(--secondary)]
  after:opacity-15
  after:blur-[120px]
  after:rounded-full
  after:z-[-1]

  
  text-white scroll-fade"
            >
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">

                    {/* TEXT SECTION */}
                    <div className="flex flex-col items-start gap-5 md:w-3/5">

                        <h2 className="relative pb-3 text-white text-2xl md:text-3xl font-semibold
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:w-1/3 after:h-[3px] after:bg-[var(--primery)]"
                        >
                            <span className="text-[var(--primery)]">
                                Acoustic Design & Installation
                            </span>{" "}
                            for Perfect Sound Clarity
                        </h2>

                        <p className="text-gray-200">
                            <strong>Reya AV</strong> offers expert
                            <strong> acoustic design and installation solutions in Bangalore </strong>
                            to enhance sound clarity and reduce unwanted noise in hospitality
                            venues, corporate offices, auditoriums, studios, and commercial
                            environments. Our acoustic treatments ensure optimal sound quality,
                            improved ambience, and professional performance with complete
                            consultation, installation, and AMC support.
                        </p>

                        <Link href="/services/acoustic-design-installation" className="btn-primary">
                            KNOW MORE
                        </Link>

                    </div>

                    {/* IMAGE SECTION */}
                    <div className="md:w-2/5">
                        <Image
                            src="/acoustic-design-install-service.jpg"
                            alt="Acoustic design installation solutions"
                            width={600}
                            height={400}
                            className="rounded-xl w-full h-auto"
                        />
                    </div>

                </div>
            </div>
            <div id="visual-design-install" className="intro px-4 md:px-10 lg:px-30 pt-10 md:pt-15 relative overflow-hidden
  before:content-[''] before:absolute before:inset-0
  before:bg-gradient-to-br
  before:from-[var(--primery)]/20
  before:via-[#0b1220]
  before:to-transparent
  before:z-[-1]

  after:content-[''] after:absolute after:-top-32 after:-right-32
  after:w-[400px] after:h-[400px]
  after:bg-[var(--secondary)]
  after:opacity-15
  after:blur-[120px]
  after:rounded-full
  after:z-[-1]

  
  text-white scroll-fade"
            >
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 relative z-10">

                    {/* TEXT SECTION */}
                    <div className="flex flex-col items-start gap-5 md:w-3/5">

                        <h2 className="relative pb-3 text-white text-2xl md:text-3xl font-semibold
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:w-1/3 after:h-[3px] after:bg-[var(--primery)]"
                        >
                            <span className="text-[var(--primery)]">
                                Visual Design & Integration
                            </span>{" "}
                            for Immersive Display Experiences
                        </h2>

                        <p className="text-gray-200">
                            <strong>Reya AV</strong> specializes in professional
                            <strong> visual design and AV system integration in Bangalore</strong>,
                            delivering seamless display solutions for hospitality spaces,
                            corporate environments, retail outlets, and event venues.
                            From video walls and projection systems to digital signage,
                            we ensure high-quality visuals, smart integration, and
                            reliable performance with complete installation and AMC support.
                        </p>

                        <Link href="/services/visual-design-integration" className="btn-primary">
                            KNOW MORE
                        </Link>

                    </div>

                    {/* IMAGE SECTION */}
                    <div className="md:w-2/5">
                        <Image
                            src="/visual-design-install-service.jpg"
                            alt="Visual design and AV integration"
                            width={600}
                            height={400}
                            className="rounded-xl w-full h-auto"
                        />
                    </div>

                </div>
            </div>
            <div id="lighting-design-install" className="intro px-4 md:px-10 lg:px-30 pt-10 md:pt-15 relative overflow-hidden
  before:content-[''] before:absolute before:inset-0
  before:bg-gradient-to-br
  before:from-[var(--primery)]/20
  before:via-[#0b1220]
  before:to-transparent
  before:z-[-1]

  after:content-[''] after:absolute after:-top-32 after:-left-32
  after:w-[400px] after:h-[400px]
  after:bg-[var(--secondary)]
  after:opacity-15
  after:blur-[120px]
  after:rounded-full
  after:z-[-1]

  
  text-white scroll-fade"
            >
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">

                    {/* TEXT SECTION */}
                    <div className="flex flex-col items-start gap-5 md:w-3/5">

                        <h2 className="relative pb-3 text-white text-2xl md:text-3xl font-semibold
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:w-1/3 after:h-[3px] after:bg-[var(--primery)]"
                        >
                            <span className="text-[var(--primery)]">
                                Lighting Design & Installation
                            </span>{" "}
                            for Stunning Visual Ambience
                        </h2>

                        <p className="text-gray-200">
                            <strong>Reya AV</strong> offers professional
                            <strong> lighting design and installation solutions in Bangalore</strong>
                            for hospitality venues, corporate spaces, retail environments,
                            auditoriums, and event setups. Our expert lighting solutions
                            enhance ambience, improve visibility, and create impactful
                            visual experiences with seamless integration, installation,
                            and ongoing AMC support.
                        </p>

                        <Link href="/services/lighting-design-installation" className="btn-primary">
                            KNOW MORE
                        </Link>

                    </div>

                    {/* IMAGE SECTION */}
                    <div className="md:w-2/5">
                        <Image
                            src="/lighting-design-install-service.jpg"
                            alt="Lighting design installation solutions"
                            width={600}
                            height={400}
                            className="rounded-xl w-full h-auto"
                        />
                    </div>

                </div>
            </div>
            <div id="annual-amc" className="intro px-4 md:px-10 lg:px-30 pt-10 md:pt-15 relative overflow-hidden
  before:content-[''] before:absolute before:inset-0
  before:bg-gradient-to-br
  before:from-[var(--primery)]/20
  before:via-[#0b1220]
  before:to-transparent
  before:z-[-1]

  after:content-[''] after:absolute after:-top-32 after:-right-32
  after:w-[400px] after:h-[400px]
  after:bg-[var(--secondary)]
  after:opacity-15
  after:blur-[120px]
  after:rounded-full
  after:z-[-1]

  
  text-white scroll-fade"
            >
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 relative z-10">

                    {/* TEXT SECTION */}
                    <div className="flex flex-col items-start gap-5 md:w-3/5">

                        <h2 className="relative pb-3 text-white text-2xl md:text-3xl font-semibold
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:w-1/3 after:h-[3px] after:bg-[var(--primery)]"
                        >
                            <span className="text-[var(--primery)]">
                                Annual Maintenance Contracts (AMC)
                            </span>{" "}
                            for Reliable AV System Performance
                        </h2>

                        <p className="text-gray-200">
                            <strong>Reya AV</strong> provides comprehensive
                            <strong> Annual Maintenance Contracts (AMC) in Bangalore</strong>
                            to ensure your audio-visual, LED, acoustic, and lighting systems
                            perform at their best. Our AMC services include regular system
                            checks, preventive maintenance, quick troubleshooting, and
                            technical support to minimize downtime and ensure seamless
                            performance throughout the year.
                        </p>

                        <Link href="/services/amc-services" className="btn-primary">
                            KNOW MORE
                        </Link>

                    </div>

                    {/* IMAGE SECTION */}
                    <div className="md:w-2/5">
                        <Image
                            src="/annual-amc-service.avif"
                            alt="Annual maintenance contract AV systems"
                            width={600}
                            height={400}
                            className="rounded-xl w-full h-auto"
                        />
                    </div>

                </div>
            </div>
        </div>


    );
}
