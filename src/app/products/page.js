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
            <div className="relative px-10 py-16
      before:content-[''] before:absolute before:inset-0
      before:bg-[url('/service.webp')] before:bg-cover before:bg-center
      after:content-[''] after:absolute after:inset-0
      after:bg-black/80"
            >
                <div className="relative z-10 max-w-7xl mx-auto text-white">

                    {/* Heading */}
                    <h1 className="text-center text-4xl font-bold mb-16">
                        Our <span className="text-[var(--primery)]">Products</span>
                    </h1>
                    <div className="flex justify-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">

                        <a href="#wharfedale-pro" className="">
                            <div className="relative group w-56 flex-grow h-[400px] transition-all duration-500 hover:w-full">

                                <h2 className="absolute top-7 left-7 z-10 text-white">Audio</h2>

                                <img
                                    className="h-full w-full object-cover object-center"
                                    src="/wharfedale-pro.png"
                                    alt="Wharfedale Pro"
                                />

                                <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <h1 className="text-3xl">Wharfedale Pro</h1>
                                </div>

                            </div>
                        </a>

                        <a href="#wharfedale" className="">
                            <div className="relative group w-56 flex-grow h-[400px] transition-all duration-500 hover:w-full">

                                <h2 className="absolute top-7 left-7 z-10 text-white">Audio</h2>

                                <img
                                    className="h-full w-full object-cover object-center"
                                    src="/wharfedale.jpg"
                                    alt="Wharfedale Pro"
                                />

                                <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <h1 className="text-3xl">Wharfedale Pro</h1>
                                </div>

                            </div>
                        </a>

                        <a href="#DAS" className="">
                            <div className="relative group w-56 flex-grow h-[400px] transition-all duration-500 hover:w-full">

                                <h2 className="absolute top-7 left-7 z-10 text-white">Audio</h2>

                                <img
                                    className="h-full w-full object-cover object-center"
                                    src="/DAS.png"
                                    alt="DAS Audio"
                                />

                                <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <h1 className="text-3xl">DAS Audio</h1>
                                </div>

                            </div>
                        </a>

                    </div>

                </div>
            </div>
            <div id="wharfedale-pro" className="intro px-10 pt-30 relative
  before:content-[''] before:absolute before:inset-0
  before:bg-[url('/service.webp')] before:bg-cover before:bg-center before:-z-10
  after:content-[''] after:absolute after:inset-0
  after:bg-black/80 after:-z-10 scroll-fade"
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
                                Wharfedale Pro
                            </span>{" "}
                            Professional Audio Solutions
                        </h2>

                        <p className="text-gray-200">
                            <strong>Reya AV</strong>, a leading audio-visual integrator based in Bangalore,
                            brings decades of expertise in delivering premium sound solutions powered by
                            globally renowned brands like <strong>Wharfedale Pro</strong>. Established in 2017
                            by Mr. Akash Gupta, whose journey in the audio industry began in 2005,
                            Reya AV has consistently delivered high-performance sound systems for pubs,
                            breweries, restaurants, cafés, gyms, and large-scale hospitality projects.
                            With over two decades of experience in the audio industry, our team ensures
                            powerful sound clarity, seamless integration, and long-term reliability
                            tailored to commercial environments.
                        </p>

                    </div>

                    {/* IMAGE SECTION */}
                    <div className="md:w-2/5">
                        <Image
                            src="/wharfedale-pro.png"
                            alt="Wharfedale Pro professional audio systems"
                            width={600}
                            height={400}
                            className="rounded-xl w-full h-auto"
                        />
                    </div>

                </div>
            </div>

            <div id="wharfedale" className="intro px-10 pt-30 relative
  before:content-[''] before:absolute before:inset-0
  before:bg-[url('/service.webp')] before:bg-cover before:bg-center before:-z-10
  after:content-[''] after:absolute after:inset-0
  after:bg-black/80 after:-z-10 scroll-fade"
            >
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 relative z-10">

                    {/* TEXT SECTION */}
                    <div className="flex flex-col items-start gap-5 md:w-3/5">

                        <h2 className="relative pb-3 text-white text-2xl md:text-3xl font-semibold
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:w-1/3 after:h-[3px] after:bg-[var(--primery)]"
                        >
                            <span className="text-[var(--primery)]">
                                Wharfedale Audio Systems
                            </span>{" "}
                            for Hospitality & Commercial Spaces
                        </h2>

                        <p className="text-gray-200">
                            <strong>Reya AV</strong> integrates premium <strong>Wharfedale audio solutions</strong>
                            across pubs, breweries, restaurants, cafés, gyms, and large hospitality projects.
                            With over two decades of experience in the audio industry, founded by
                            Mr. Akash Gupta, Reya AV has pioneered permanent entertainment system
                            installations that provide restaurateurs and commercial spaces with
                            affordable yet high-performance sound solutions. Our expertise ensures
                            powerful sound clarity, seamless acoustic coverage, and long-term
                            reliability without compromising on quality.
                        </p>

                    </div>

                    {/* IMAGE SECTION */}
                    <div className="md:w-2/5">
                        <Image
                            src="/wharfedale.jpg"
                            alt="Wharfedale professional sound system installation"
                            width={600}
                            height={400}
                            className="rounded-xl w-full h-60"
                        />
                    </div>

                </div>
            </div>

            <div id="DAS" className="intro px-10 pt-30 relative
  before:content-[''] before:absolute before:inset-0
  before:bg-[url('/service.webp')] before:bg-cover before:bg-center before:-z-10
  after:content-[''] after:absolute after:inset-0
  after:bg-black/80 after:-z-10 scroll-fade"
            >
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">

                    {/* TEXT SECTION */}
                    <div className="flex flex-col items-start gap-5 md:w-3/5">

                        <h2 className="relative pb-3 text-white text-2xl md:text-3xl font-semibold
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:w-1/3 after:h-[3px] after:bg-[var(--primery)]"
                        >
                            <span className="text-[var(--primery)]">
                                DAS Audio Systems
                            </span>{" "}
                            for High-Performance Sound Experiences
                        </h2>

                        <p className="text-gray-200">
                            <strong>Reya AV</strong> integrates premium <strong>DAS Audio solutions</strong>
                            for hospitality venues, large audience events, pubs, breweries, restaurants,
                            gyms, and commercial environments. Backed by over two decades of industry
                            experience led by Mr. Akash Gupta, Reya AV delivers powerful sound systems
                            engineered for clarity, coverage, and impact. From large-scale event
                            executions to permanent entertainment installations, our DAS solutions
                            ensure exceptional audio performance with uncompromised quality and
                            long-term reliability.
                        </p>

                    </div>

                    {/* IMAGE SECTION */}
                    <div className="md:w-2/5">
                        <Image
                            src="/DAS.png"
                            alt="DAS professional audio system installation"
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
