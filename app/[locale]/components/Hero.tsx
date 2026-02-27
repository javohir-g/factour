"use client"
import {useTranslations} from "next-intl";
import {Figtree} from "next/font/google";
import { IoIosArrowDropdown } from "react-icons/io";
import useScrollToSection from "@/hooks/useScrollToSection";
import { useRef, useEffect } from "react";

const figtreeLigt = Figtree({weight: '300', subsets:["latin"]})
const figtreeBold = Figtree({weight: '800', subsets:["latin"]})

const Hero = () => {
    const t = useTranslations("hero")
    const containerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        containerRef.current = document.querySelector('.custom-scroll');
    }, []);

    const { handleButtonScroll } = useScrollToSection(containerRef);

    return(
        <div id={"home"} className={""}>
            <div className={"w-full h-screen bg-cover bg-center bg-no-repeat bg-[linear-gradient(rgba(26,20,20,0.4),rgba(26,20,20,1)),url('/heroBack.jpg')]"}>
                <div className={"flex flex-col items-center justify-center h-screen"}>
                    <div className={`flex flex-col gap-4 lg:gap-8`}>
                        <h1 className={`${figtreeLigt.className} text-center text-cream text-x md:text-2xl lg:text-4xl uppercase tracking-wide`}>
                            {t("welcome")}
                        </h1>
                        <h1 className={`${figtreeBold.className} text-center text-cream text-2xl md:text-4xl lg:text-6xl font-bold uppercase tracking-wide`}>
                            {t("subtitle")}
                        </h1>
                        <button
                            className={"self-center bg-transparent border-none p-0 cursor-pointer"}
                            onClick={(e) => handleButtonScroll(e, "about")}
                        >
                            <IoIosArrowDropdown className={" text-cream self-center w-14 h-14"}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Hero