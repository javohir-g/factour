"use client";
import { useTranslations } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";
import FactoryCard from "./FactoryCard";
import { Figtree } from "next/font/google";
import AutoScroll, {AutoScrollType} from "embla-carousel-auto-scroll";
import {useEffect, useRef} from "react";
import useScrollToSection from "@/hooks/useScrollToSection";

const figtreeBold = Figtree({ weight: "800", subsets: ["latin"] });

export default function FactoriesCarousel() {
    const t = useTranslations("factories");
    const autoScrollRef = useRef<AutoScrollType>(null);
    const containerRef = useRef<HTMLElement | null>(null);
    const { handleButtonScroll } = useScrollToSection(containerRef);
    
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            align: "start",
            loop: true,
            dragFree: true,
        },
        [AutoScroll({speed: 1, startDelay: 100})]
    );

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



    const factories = [
        { key: "arduino", image: "/factories/arduino.jpg", link: "https://www.instagram.com/stories/highlights/18047708045326696/" },
        { key: "ferrari", image: "/factories/ferrari.jpg", link: "https://www.instagram.com/stories/highlights/17961830579535721/"},
        { key: "lindt", image: "/factories/lindt.jpg", link: "https://www.instagram.com/stories/highlights/18046310861158300/" },
        { key: "aurora", image: "/factories/aurora.png", link: "https://www.instagram.com/stories/highlights/17925468521761415/" },
        { key: "guido_gobino", image: "/factories/guido-gobino.png", link: "https://www.instagram.com/stories/highlights/18016400918358407/" },
        { key: "bending_spoons", image: "/factories/bending_spoons.png", link: "https://www.instagram.com/stories/highlights/17842818336209429/" },
        { key: "cailler", image: "/factories/cailler.png", link: "https://www.instagram.com/stories/highlights/18474597892028224/" },
    ];

    return (
        <section id={"factories"} className="py-16 bg-cream">
            <div className="container mx-auto text-center mb-16">
                <h2
                    className={`${figtreeBold.className} uppercase text-4xl md:text-5xl font-bold tracking-wide text-primary mb-4`}
                >
                    {t("title")}
                </h2>
            </div>

            <div className="w-full mx-auto flex flex-col items-center gap-8">
                {/* Carousel */}
                <div className="w-full">
                    <div className="flex-1 overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {factories.map((f) => (
                                <div
                                    key={f.key}
                                    className="basis-[85%] sm:basis-[60%] md:basis-[40%] lg:basis-[30%] flex-shrink-0"
                                >
                                    <FactoryCard
                                        image={f.image}
                                        title={t(`${f.key}.title`)}
                                        desc={t(`${f.key}.desc`)}
                                        button={t(`${f.key}.button`)}
                                        link={f.link}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* CTA button */}
                <div className="flex justify-center mt-4">
                    <button
                        onClick={(e) => handleButtonScroll(e, "contact")}
                        className="px-8 py-3 bg-primary text-cream rounded-full text-sm font-semibold hover:bg-primary/70 transition">
                        {t("button")}
                    </button>
                </div>
            </div>
        </section>
    );
}
