'use client'

import {useTranslations} from "next-intl";
import Link from "next/link";
import Image from "next/image";
import {Poppins} from "next/font/google";
import {useLocale} from "use-intl";
import {usePathname, useRouter} from "next/navigation";
import {useState, useRef, useEffect} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import useScrollToSection from "@/hooks/useScrollToSection";

const poppinsBold = Poppins({weight: '500', subsets:["latin"]})

const Navbar = () => {
    const t = useTranslations("navbar")
    const links = t.raw("links") as string[]
    const locale = useLocale();
    const router = useRouter()
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const containerRef = useRef<HTMLElement | null>(null);
    const { handleSmoothScroll, handleButtonScroll } = useScrollToSection(containerRef);

    useEffect(() => {
        containerRef.current = document.querySelector('.custom-scroll');
    }, []);

    const { scrollYProgress } = useScroll({
        container: containerRef
    });

    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.1],
        ['rgba(26,20,20,0)', 'rgba(26,20,20,1)']
    );

    const toggleLanguage = () => {
        const newLocale = locale === 'en' ? 'ru' : 'en';
        const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPath);
    }

    const getSectionId = (label: string): string => {
        const sectionMap: Record<string, string> = {
            'Home': 'home',
            'About': 'about',
            'Factories': 'factories',
            'Gallery': 'gallery',
            'Contact': 'contact',
            'Главная': 'home',
            'О нас': 'about',
            'Фабрики': 'factories',
            'Галерея': 'gallery',
            'Контакты': 'contact'
        };

        return sectionMap[label] || label.toLowerCase();
    }

    return(
        <motion.nav
            style={{backgroundColor: isMenuOpen? 'rgba(26,20,20,1)': backgroundColor}}
            className={`fixed w-full lg:w-[calc(100%-13px)] max-h-full py-3 z-50`}
        >
            <div className={"container max-w-7xl mx-auto px-4"}>
                <div className={"flex items-center justify-between"}>
                    <div className={"hidden lg:block"}>
                        <button
                            onClick={(e) => handleButtonScroll(e, "home")}
                            className="bg-transparent border-none p-0 cursor-pointer"
                        >
                            <Image src={"/logoV2.png"} alt={"Logo of the Factour"} width={70} height={70}/>
                        </button>
                    </div>
                    <div className={"lg:hidden"}>
                        <Link href={"/"}>
                            <Image src={"/logoV2.png"} alt={"Logo of the Factour"} width={50} height={50}/>
                        </Link>
                    </div>
                    <div className={`${poppinsBold.className} hidden lg:flex items-center space-x-10 uppercase font-bold`}>
                        {links.map((label, idx) => (
                            <a
                                href={`#${getSectionId(label)}`}
                                className={"hover:text-cream font-bold select-none cursor-pointer text-cream/80"}
                                onClick={(e) => handleSmoothScroll(e, getSectionId(label))}
                                key={idx}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                    <div className={"hidden lg:flex items-center gap-8"}>
                        <button
                            className={`${poppinsBold.className} text-cream bg-[#BFA760] py-1 px-3 rounded-full`}
                        >
                            <a className={"uppercase"} href={"https://t.me/factour_official"} target={"_blank"}>
                                {t("book")}
                            </a>
                        </button>
                        <div className={"cursor-pointer text-cream select-none"} onClick={toggleLanguage}>
                            <span className={locale === 'en'? 'font-bold' : ''}>EN</span> / <span className={locale === 'ru' ? 'font-bold' : ''} >RU</span>
                        </div>
                    </div>
                    <div className={"lg:hidden flex items-center gap-2"}>
                        <h1 className={"text-cream"}>{t("menu")}</h1>
                        <button
                            className={"flex flex-col gap-1 p-2 text-cream"}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className={`block w-6 h-0.5 bg-cream transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-cream ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-cream transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                        </button>
                    </div>
                </div>
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className={"flex flex-col space-y-4 pb-4 pt-2"}>
                        <div className={"py-4 flex flex-col text-center text-2xl gap-4"}>
                            {links.map((label, idx) => (
                                <a
                                    href={`#${getSectionId(label)}`}
                                    className={"hover:text-cream font-bold select-none cursor-pointer text-cream/80"}
                                    onClick={(e) => {
                                        handleSmoothScroll(e, getSectionId(label));
                                        setIsMenuOpen(false);
                                    }}
                                    key={idx}
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                        <div className={"flex items-center justify-between px-4"}>
                            <div className={"text-lg text-cream cursor-pointer"} onClick={toggleLanguage}>
                                <span className={locale === 'en'? 'font-bold' : ''}>EN</span> / <span className={locale === 'ru' ? 'font-bold' : ''} >RU</span>
                            </div>
                            <button
                                className={"py-1 px-3 text-lg text-cream bg-[#BFA760] rounded-full"}>
                                <a className={"uppercase"} href={"https://t.me/factour_official"} target={"_blank"}>
                                    {t("book")}
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}
export default Navbar