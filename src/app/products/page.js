"use client";
import Link from "next/link";
import Image from "next/image";
import GlowSplitSection from "@/components/productPageCArd";

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
  after:z-[-1]

  "
            >
                <div className="relative z-10 max-w-7xl mx-auto text-white">

                    {/* Heading */}
                    <h1 className="text-center text-4xl font-bold mb-16">
                        Our <span className="text-[var(--primery)]">Products</span>
                    </h1>
                    <div className="flex justify-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">

                        <a href="#wharfedale-pro" className="relative group w-60 flex-grow transition-all duration-500 hover:w-full">
                            <div className="">

                                <h2 className="absolute top-7 left-7 z-10 text-white">Audio</h2>

                                <div className="flex justify-center items-center"><Image fill
                                    className=" w-full object-cover object-center"
                                    src="/wharfedale-pro.png"
                                    alt="Wharfedale Pro"
                                /></div>


                                <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <h1 className="text-3xl">Wharfedale Pro</h1>
                                </div>

                            </div>
                        </a>

                        <a href="#wharfedale" className="relative group w-60 flex-grow transition-all duration-500 hover:w-full">
                            <div className="">

                                <h2 className="absolute top-7 left-7 z-10 text-white">Audio</h2>

                                <div className="flex justify-center items-center"><Image fill
                                    className=" w-full object-cover object-center"
                                    src="/wharfedale.jpg"
                                    alt="Wharfedale Pro"
                                /></div>


                                <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <h1 className="text-3xl">Wharfedale Pro</h1>
                                </div>

                            </div>
                        </a>

                        <a href="#DAS" className="relative group w-60 flex-grow transition-all duration-500 hover:w-full">
                            <div className="">

                                <h2 className="absolute top-7 left-7 z-10 text-white">Audio</h2>

                                <div className="flex justify-center items-center"><Image fill
                                    className="w-full object-cover object-center"
                                    src="/DAS.png"
                                    alt="DAS Audio"
                                /></div>


                                <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <h1 className="text-3xl">DAS Audio</h1>
                                </div>

                            </div>
                        </a>

                    </div>

                </div>
            </div>

            <GlowSplitSection
            id="wharfedale-pro"
                highlight="Wharfedale Pro"
                heading=" Professional Audio Solutions"
                subtitle="Premium AV Integrator"
                description="Reya AV is a leading audio-visual company based in Bangalore that specializes in delivering high-quality sound solutions. The company works with well-known global brands like Wharfedale Pro to provide reliable and powerful audio systems.

Reya AV was established in 2017 by Mr. Akash Gupta, who has been working in the audio industry since 2005. With more than 20 years of experience, the team has successfully installed sound systems for pubs, breweries, restaurants, cafés, gyms, and large hospitality projects.

Their focus is on providing clear, powerful sound, smooth system integration, and long-lasting performance tailored specifically for commercial spaces.."
                image="/wharfedale-pro.png"
            />


            <GlowSplitSection
            id="wharfedale"
                highlight="Wharfedale Audio Systems"
                heading=" for Hospitality & Commercial Spaces"
                subtitle="Premium AV Integrator"
                description="Reya AV provides high-quality Wharfedale audio solutions for pubs, breweries, restaurants, cafés, gyms, and large hospitality projects. Founded by Mr. Akash Gupta, who has over two decades of experience in the audio industry, the company specializes in permanent entertainment system installations for commercial spaces.

Reya AV focuses on delivering affordable, high-performance sound systems with clear audio, smooth coverage, and long-lasting reliability without compromising on quality."
                image="/wharfedale.jpg"
                slideDirection="right"
                rowReverse={true}
            />
            <GlowSplitSection
            id="DAS"
                highlight="DAS Audio Systems"
                heading=" for High-Performance Sound Experiences"
                subtitle="Premium AV Integrator"
                description="Reya AV provides premium DAS Audio solutions for hospitality venues, large events, pubs, breweries, restaurants, gyms, and other commercial spaces. Led by Mr. Akash Gupta, who has over 20 years of industry experience, the company delivers powerful sound systems designed for clear audio, wide coverage, and strong impact.

Whether for large-scale events or permanent installations, Reya AV ensures high-quality sound performance with long-lasting reliability."
                image="/DAS.png"
                slideDirection="left"
                rowReverse={false}
            />



        </div>


    );
}
