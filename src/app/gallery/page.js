"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GallerySection() {
    const [loaded, setLoaded] = useState(false);
    const [gridArea, setGridArea] = useState("");

    useEffect(() => {
        setLoaded(true);

        const updateGrid = () => {
            const width = window.innerWidth;

            if (width >= 1024) {
                // DESKTOP
                setGridArea(`
          "a a b b c c"
          "a a d e e e"
          "f f d g g g"
          "h i i g g g"
          "h j j j k k"
        `);
            } else if (width >= 768) {
                // TABLET
                setGridArea(`
          "a a b"
          "c d d"
          "e e f"
          "g h i"
          "j k k"
        `);
            } else {
                // MOBILE
                setGridArea(`
          "a"
          "b"
          "c"
          "d"
          "e"
          "f"
          "g"
          "h"
          "i"
          "j"
          "k"
        `);
            }
        };

        updateGrid();
        window.addEventListener("resize", updateGrid);

        return () => window.removeEventListener("resize", updateGrid);
    }, []);

    const images = [
        { area: "a", src: "/g1.webp" },
        { area: "b", src: "/g2.jpg" },
        { area: "c", src: "/g3.webp" },
        { area: "d", src: "/g4.png" },
        { area: "e", src: "/g5.avif" },
        { area: "f", src: "/g6.png" },
        { area: "g", src: "/g7.jpg" },
        { area: "h", src: "/g8.webp" },
        { area: "i", src: "/g9.jpg" },
        { area: "j", src: "/g1.webp" },
        { area: "k", src: "/g11.avif" },
    ];

    return (
        <section
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
  after:z-[-1]
"
        >
            <div className="relative z-10 max-w-7xl mx-auto">

                {/* HEADER */}
                <h1 className="text-center text-2xl md:text-3xl font-bold mb-10 text-white">
                    Our <span className="text-[var(--primery)]">Gallery</span>
                </h1>

                {/* RESPONSIVE GRID */}
                <div className="flex items-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">
                    <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                        <img className="h-full w-full object-cover object-center"
                            src="/LedWall.jpg"
                            alt="LED Wall Solution" />
                        <div
                            className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h1 className="hidden  md:block text-3xl">LED Wall Solutions</h1>
                            <p className="hidden md:block text-sm">
                                High-performance LED display systems for corporate events, auditoriums, and large-scale productions.
                            </p>
                        </div>
                    </div>

                    <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                        <img className="h-full w-full object-cover object-right"
                            src="/SoundSystem.jpg"
                            alt="Audio Design Install" />
                        <div
                            className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h1 className="hidden  md:block text-3xl">Professional Audio Systems</h1>
                            <p className="hidden md:block text-sm">
                                Expert audio design and installation delivering crystal-clear sound for conference rooms and event spaces.
                            </p>
                        </div>
                    </div>

                    <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                        <img className="h-full w-full object-cover object-center"
                            src="/visual.jpg"
                            alt="Lighting & Visual Design" />
                        <div
                            className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h1 className="hidden  md:block text-3xl">Lighting & Visual Integration</h1>
                            <p className="hidden md:block text-sm">
                                Advanced lighting and visual solutions that enhance atmosphere and elevate audience experience.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto mt-10">

                    {/* CARD 1 */}
                    <div className="relative group h-40 hover:h-120 transition-all duration-500 overflow-hidden rounded-xl">
                        <img
                            className="h-full w-full object-cover"
                            src="/visual2.webp"
                            alt="AVInstallation"
                        />

                        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                            <h1 className="text-2xl font-semibold">Audio | Lighting | Acoustic Design</h1>
                            <p className="text-sm">
                                Integrated AV solutions designed to elevate sound, enhance atmosphere, and optimize acoustic performance.
                            </p>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="relative group h-40 hover:h-120 transition-all duration-500 overflow-hidden rounded-xl">
                        <img
                            className="h-full w-full object-cover"
                            src="/LEDKiosk.webp"
                            alt="LEDKiosk"
                        />

                        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                            <h1 className="text-2xl font-semibold">Interactive Digital Signage & LED Kiosks</h1>
                            <p className="text-sm">
                                Premium LED kiosks delivering impactful visuals and seamless communication.
                            </p>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="relative group h-40 hover:h-120 transition-all duration-500 overflow-hidden rounded-xl">
                        <img
                            className="h-full w-full object-cover"
                            src="/led-display2.webp"
                            alt="OutdoorLED"
                        />

                        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                            <h1 className="text-2xl font-semibold">
                               High-Impact Outdoor LED Walls
                            </h1>
                            <p className="text-sm">
                                Bright, high-resolution outdoor LED walls built for maximum visibility and bold brand impact.
                            </p>
                        </div>
                    </div>

                </div>


                <div
                    className="
            grid gap-6 mt-10
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-6
            auto-rows-[180px] md:auto-rows-[200px]
          "
                    style={{ gridTemplateAreas: gridArea }}
                >
                    {images.map((img, i) => (
                        <GalleryItem
                            key={i}
                            area={img.area}
                            src={img.src}
                            loaded={loaded}
                            delay={i * 80}
                        />
                    ))}
                </div>

                {/* CTA SECTION */}
                <div className="text-center mt-20 text-white">
                    <h2 className="text-xl md:text-2xl font-semibold">
                        Ready to Transform Your Space?
                    </h2>

                    <p className="text-gray-300 mt-3">
                        Contact our experts for professional AV, LED, and lighting solutions.
                    </p>

                    <Link href="/contact" className="btn-primary mt-6 inline-block">
                        CONTACT US
                    </Link>
                </div>
            </div>
        </section>
    );
}

function GalleryItem({ area, src, loaded, delay }) {
    return (
        <div
            style={{
                gridArea: area,
                transitionDelay: `${delay}ms`,
            }}
            className={`
        relative min-h-[180px] md:min-h-[200px]
        overflow-hidden rounded-xl
        bg-white/10 backdrop-blur-lg border border-white/20
        shadow-lg hover:border-[var(--primery)]
        transition-all duration-[800ms] ease-out
        ${loaded ? "scale-100 opacity-100" : "scale-50 opacity-0"}
      `}
        >
            <Image
                src={src}
                alt="Reya AV project gallery"
                fill
                sizes="(max-width:768px) 100vw,
               (max-width:1200px) 50vw,
               33vw"
                className="object-cover hover:scale-110 transition duration-500"
            />
        </div>
    );
}
