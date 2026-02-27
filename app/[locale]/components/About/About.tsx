import {Figtree} from "next/font/google";
import {useTranslations} from "next-intl";
import TiltImage from "@/app/[locale]/components/About/TiltImage";

const figtreeLigt = Figtree({weight: '300', subsets:["latin"]})
const figtreeBold = Figtree({weight: '800', subsets:["latin"]})

const About = () => {
    const t = useTranslations("about")
    return(
        <div id={"about"} className={"w-full bg-cream"}>
            <div className={"container max-w-7xl py-16 md:py-20 mx-auto"}>
                <div className={"flex flex-col lg:flex-row items-center justify-between gap-4 px-6 md:px-10"}>
                    <div className={`lg:w-2/1 px-4 flex flex-col`}>
                        <h1 className={`${figtreeBold.className} font-bold uppercase text-center tracking-wide text-primary text-4xl md:text-5xl ld:text-6xl`}>{t("title")}</h1>
                        <div className={`${figtreeLigt.className} mt-6 text-primary`}>
                            <p className={"text-xl md:text-2xl text-justify md:text-center"}>
                                <span className={"font-bold"}>{t("prefix")}</span>
                                {t("text")}
                            </p>
                        </div>
                    </div>
                    <div className={"flex justify-center lg:justify-start lg:w-2/1"}>
                        <TiltImage
                            src="/about.JPG"
                            alt="about"
                            width={600}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About