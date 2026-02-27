'use client'

import {useTranslations} from "next-intl";
import {Figtree} from "next/font/google";
import ZoomParallax from "@/app/[locale]/components/Gallery/ZoomParallax";
import GalleryCarousel from "@/app/[locale]/components/Gallery/GalleryCarousel";

const figtreeBold = Figtree({ weight: "800", subsets: ["latin"] });

const Gallery = () => {
    const t = useTranslations("gallery")

    return(
        <div className={"w-full bg-cream"} id={'gallery'}>
            <div className="container mx-auto text-center py-16">
                <h2
                    className={`${figtreeBold.className} uppercase text-4xl md:text-5xl font-bold tracking-wide text-primary mb-4`}
                >
                    {t("title")}
                </h2>
            </div>
            <GalleryCarousel/>
        </div>
    )
}
export default Gallery