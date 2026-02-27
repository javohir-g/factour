"use client";

import { useTranslations } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Figtree } from "next/font/google";
import AutoScroll, {AutoScrollType} from "embla-carousel-auto-scroll";
import {useEffect, useRef} from "react";
import useScrollToSection from "@/hooks/useScrollToSection";

const figtree = Figtree({ weight: "500", subsets: ["latin"] });

export default function GalleryCarousel() {
    const t = useTranslations("gallery");
    const autoScrollRef = useRef<AutoScrollType>(null);
    const containerRef = useRef<HTMLElement | null>(null);
    const { handleButtonScroll } = useScrollToSection(containerRef);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        loop: true,
        dragFree: true,
        containScroll: "trimSnaps",
    },[AutoScroll({speed: 1, startDelay: 100})]);

    useEffect(() => {
        containerRef.current = document.querySelector('.custom-scroll');
        if (!emblaApi) return;

        // Store reference to autoScroll plugin
        const plugins = emblaApi.plugins();
        autoScrollRef.current = plugins.autoScroll;

        // Resume scrolling after interaction ends
        const onPointerUp = () => {
            setTimeout(() => {
                autoScrollRef.current?.play();
            }, 3000);
        };

        emblaApi.on('pointerUp', onPointerUp);

        return () => {
            emblaApi.off('pointerUp', onPointerUp);
        };
    }, [emblaApi]);

    return (
        <section className=" bg-cream">
            <div className="w-full mx-auto flex flex-col items-center gap-8 select-none">
                {/* Carousel */}
                <div className="w-full overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-6 sm:gap-8 px-6 sm:px-10">
                        {/* 1️⃣ Single image column */}
                        <div className="basis-[80%] sm:basis-[45%] md:basis-[30%] lg:basis-[25%] flex-shrink-0">
                            <div className="relative w-full h-[524px] rounded-md overflow-hidden">
                                <Image
                                    src="/gallery/img_9.jpg"
                                    alt="Gallery 1"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* 2️⃣ Double stacked column */}
                        <div className="basis-[80%] sm:basis-[45%] md:basis-[30%] lg:basis-[25%] flex-shrink-0 grid grid-rows-2 gap-6">
                            <div className="relative w-full h-[250px] rounded-md overflow-hidden">
                                <Image
                                    src="/gallery/img_6.JPG"
                                    alt="Gallery 2"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative w-full h-[250px] rounded-md overflow-hidden">
                                <Image
                                    src="/gallery/img_4.JPG"
                                    alt="Gallery 3"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* 3️⃣ Single image */}
                        <div className="basis-[80%] sm:basis-[45%] md:basis-[30%] lg:basis-[25%] flex-shrink-0">
                            <div className="relative w-full h-[524px] rounded-md overflow-hidden">
                                <Image
                                    src="/gallery/img_2.JPG"
                                    alt="Gallery 4"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* 4️⃣ Double stacked */}
                        <div className="basis-[80%] sm:basis-[45%] md:basis-[30%] lg:basis-[25%] flex-shrink-0 grid grid-rows-2 gap-6">
                            <div className="relative w-full h-[250px] rounded-md overflow-hidden">
                                <Image
                                    src="/gallery/img_1.JPG"
                                    alt="Gallery 5"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative w-full h-[250px] rounded-md overflow-hidden">
                                <Image
                                    src="/gallery/img_3.JPG"
                                    alt="Gallery 6"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* 5️⃣ Single image */}
                        <div className="basis-[80%] sm:basis-[45%] md:basis-[30%] lg:basis-[25%] flex-shrink-0">
                            <div className="relative w-full h-[524px] rounded-md overflow-hidden">
                                <Image
                                    src="/gallery/img_7.JPG"
                                    alt="Gallery 7"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* 6️⃣ Double stacked */}
                        <div className="basis-[80%] sm:basis-[45%] md:basis-[30%] lg:basis-[25%] flex-shrink-0 grid grid-rows-2 gap-6">
                            <div className="relative w-full h-[250px] rounded-md overflow-hidden">
                                <Image
                                    src="/gallery/img_10.png"
                                    alt="Gallery 10"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative w-full h-[250px] rounded-md overflow-hidden">
                                <Image
                                    src="/gallery/img_11.png"
                                    alt="Gallery 11"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA button */}
                <div className="flex justify-center mt-8 mb-16">
                    <button
                        onClick={(e) => handleButtonScroll(e, "contact")}
                        className={`${figtree.className} uppercase px-8 py-3 tracking-wide bg-primary text-cream rounded-full text-sm font-semibold hover:bg-primary/70 transition`}>
                        {t("button")}
                    </button>
                </div>
            </div>
        </section>
    );
}