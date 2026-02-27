import Image from "next/image";
import {useTranslations} from "next-intl";
import {Figtree} from "next/font/google";
import Link from "next/link";
import {FaFacebook, FaInstagram, FaLinkedin, FaTelegram} from "react-icons/fa";

const figtree = Figtree({weight: '500', subsets:["latin"]})

const Footer = () => {
    const t = useTranslations("footer")
    return(
        <footer className={"w-full bg-primary"}>
            <div className={"container w-[90%] mx-auto flex flex-col"}>
                <div className={"menu flex py-8 justify-end"}>
                    <button
                        className={`${figtree.className} mx-3 lg:mx-20 py-1 uppercase px-4 rounded-full bg-cream text-primary`}>
                        <a href={"https://t.me/factour_official"} target={"_blank"}>
                            {t("button")}
                        </a>
                    </button>
                </div>
                <div className={"w-full h-[1px] bg-cream"}/>
                <div className={"md:mx-10 lg:mx-20 flex items-center md:items-start flex-col sm:flex-row justify-between my-20 md:my-32 gap-5"}>
                    <div className={""}>
                        <h1 className={`${figtree.className} text-[#BFA760] text-[12px] uppercase font-bold md:text-2xl  lg:text-4xl tracking-wide`}>{t("slogan")}</h1>
                        <h1 className={`${figtree.className} text-cream/80 text-[12px] self-end uppercase font-bold text-sm tracking-wide`}>{t("rights")}</h1>
                    </div>
                    <div className={"flex flex-col items-center"}>
                        <h1 className={`${figtree.className} text-cream text-[12px] md:text-2xl tracking-wide`}>{t("getInTouch")}</h1>
                        <Link href={"mailto:factour.official@gmail.com"} target={"_blank"} className={`${figtree.className} text-cream text-[12px] md:text-xl tracking-wide mb-2`}>{t("email")}</Link>
                        <div className={"flex gap-2"}>
                            {/*<Link href={"/"} target={"_blank"} className={"cursor-pointer"}><FaFacebook className={"text-cream md:w-6 md:h-6"} /></Link>*/}
                            <Link href={"https://www.instagram.com/factour.official?igsh=YnQ0cHR5aDJ4a3Y0"} target={"_blank"} className={"cursor-pointer"}><FaInstagram className={"text-cream md:w-6 md:h-6"} /></Link>
                            <Link href={"https://t.me/factour_official"} target={"_blank"} className={"cursor-pointer"}><FaTelegram  className={"text-cream md:w-6 md:h-6"} /></Link>
                            <Link href={"https://www.linkedin.com/company/factourofficial/"} target={"_blank"} className={"cursor-pointer"}><FaLinkedin  className={"text-cream md:w-6 md:h-6"} /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"relative w-full h-[70px]  md:h-[200px] lg:h-[250px] opacity-15"}>
                <Image src={"/factour_text_white.png"} alt={"Factour"} fill/>
            </div>
        </footer>
    )
}
export default Footer