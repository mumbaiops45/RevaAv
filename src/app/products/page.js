"use client";
import Link from "next/link";
import Image from "next/image";
import GlowSplitSection from "@/components/productPageCArd";

export default function ServicesPage() {


    return (
        <div>
            <div className="px-4 md:px-10 lg:px-30 pt-10 md:py-15 relative overflow-hidden
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
                    <div className="flex flex-col md:flex-row justify-center gap-6 max-w-6xl mx-auto mt-10">

                        {/* Card 1 */}
                        <Link href="#wharfedale-pro" className="group w-full h-64 mx-auto [perspective:1000px] cursor-pointer">
                            <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                                {/* Front Side */}
                                <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-md bg-white border border-gray-200">
                                    <div className="md:w-2/5 w-full">
                                        <Image
                                            src={"/wharfedale-pro.png"}
                                            alt=""
                                            width={600}
                                            height={400}
                                            className=" w-full h-auto"
                                        />
                                    </div>
                                </div>

                                {/* Back Side */}
                                <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-md [transform:rotateY(180deg)]">
                                    <div
                                        className="flex flex-col justify-center gap-3
    group w-full   h-[260px] relative overflow-hidden
    transition-all duration-500
    bg-white/10 backdrop-blur-lg border border-white/20
    shadow-lg rounded-xl p-6
    hover:border-[var(--primery)]
    transition duration-300 ease hover:translate-y-1 scroll-fade"
                                    >

                                        {/* Top Circle */}
                                        <div className="w-30 h-15 bg-[var(--primery)] rounded-2xl absolute -right-2 -top-2">
                                            <p className="absolute bottom-3 left-5 text-2xl font-bold opacity-100">
                                                Audio
                                            </p>
                                        </div>

                                        {/* Icon */}
                                        <div className="w-12 fill-[var(--primery)]">
                                            {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z" />
              </svg> */}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-semibold text-white">
                                            Wharfedale Pro
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-gray-400 leading-6">
                                            Wharfedale Pro delivers powerful, reliable professional loudspeakers designed for live events, installations, and commercial audio systems with clear and impactful sound.
                                        </p>

                                    </div>
                                </div>

                            </div>
                        </Link>





                        {/* Card 2 */}
                        <Link href="#wharfedale" className="group w-full h-64 mx-auto [perspective:1000px] cursor-pointer">
                            <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                                {/* Front Side */}
                                <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-md bg-white border border-gray-200">
                                    <div className="md:w-2/5 w-full">
                                        <Image
                                            src={"/wharfedale.jpg"}
                                            alt=""
                                            width={600}
                                            height={400}
                                            className=" w-full h-auto"
                                        />
                                    </div>
                                </div>

                                {/* Back Side */}
                                <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-md [transform:rotateY(180deg)]">
                                    <div
                                        className="flex flex-col justify-center gap-3
    group w-full   h-[260px] relative overflow-hidden
    transition-all duration-500
    bg-white/10 backdrop-blur-lg border border-white/20
    shadow-lg rounded-xl p-6
    hover:border-[var(--primery)]
    transition duration-300 ease hover:translate-y-1 scroll-fade"
                                    >

                                        {/* Top Circle */}
                                        <div className="w-30 h-15 bg-[var(--primery)] rounded-2xl absolute -right-2 -top-2">
                                            <p className="absolute bottom-3 left-5 text-2xl font-bold opacity-100">
                                                Audio
                                            </p>
                                        </div>

                                        {/* Icon */}
                                        <div className="w-12 fill-[var(--primery)]">
                                            {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z" />
              </svg> */}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-semibold text-white">
                                            Wharfedale
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-gray-400 leading-6">
                                            Wharfedale, Britain’s most renowned loudspeaker brand, combines heritage engineering with superior acoustic performance, making it an ideal choice for premium hospitality and commercial sound installations.
                                        </p>

                                    </div>
                                </div>

                            </div>
                        </Link>


                        {/* Card 3 */}
                        <Link href="#DAS" className="group w-full h-64 mx-auto [perspective:1000px] cursor-pointer">
                            <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                                {/* Front Side */}
                                <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-md bg-white border border-gray-200">
                                    <div className="md:w-2/5 w-full">
                                        <Image
                                            src={"/DAS.png"}
                                            alt=""
                                            width={600}
                                            height={400}
                                            className="rounded-xl w-full h-auto"
                                        />
                                    </div>
                                </div>

                                {/* Back Side */}
                                <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-md [transform:rotateY(180deg)]">
                                    <div
                                        className="flex flex-col justify-center gap-3
    group w-full   h-[260px] relative overflow-hidden
    transition-all duration-500
    bg-white/10 backdrop-blur-lg border border-white/20
    shadow-lg rounded-xl p-6
    hover:border-[var(--primery)]
    transition duration-300 ease hover:translate-y-1 scroll-fade"
                                    >

                                        {/* Top Circle */}
                                        <div className="w-30 h-15 bg-[var(--primery)] rounded-2xl absolute -right-2 -top-2">
                                            <p className="absolute bottom-3 left-5 text-2xl font-bold opacity-100">
                                                Audio
                                            </p>
                                        </div>

                                        {/* Icon */}
                                        <div className="w-12 fill-[var(--primery)]">
                                            {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z" />
              </svg> */}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-semibold text-white">
                                            D.A.S
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-gray-400 leading-6">
                                            D.A.S. Audio, Made in Spain, delivers high-performance professional sound systems engineered with precision, passion, and powerful acoustic impact for live events and commercial installations.
                                        </p>

                                    </div>
                                </div>

                            </div>
                        </Link>

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
