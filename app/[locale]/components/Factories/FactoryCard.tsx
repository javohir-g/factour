"use client"

import Image from "next/image";
import {Figtree} from "next/font/google";

const figtreeLigt = Figtree({ weight: "400", subsets: ["latin"] });

interface FactoryCardProps {
    image: string;
    title: string;
    desc: string;
    button: string;
    link: string;
}

export default function FactoryCard({ image, title, desc, button, link }: FactoryCardProps) {
    return (
        <div className={"bg-primary text-cream rounded-lg flex flex-col items-center w-[300px] min-w-[300px] shadow-lg select-none p-7 mr-8"}>
            <div className={"relative w-full h-[180px]"}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className={"object-cover opacity-90 hover:scale-105 transition-transform duration-500"}
                />
            </div>
            <div className={`${figtreeLigt.className} pt-6 flex flex-col gap-3`}>
                <h3 className="text-lg font-bold tracking-wider text-[#BFA760] uppercase">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-300 h-[110px] line-clamp-3 overflow-hidden">{desc}</p>
                <button
                    className="mt-2 px-5 py-2 bg-white text-black rounded-full text-xs font-semibold hover:bg-gray-200 transition"
                    onClick={() => window.open(link, '_blank')}
                >
                    {button}
                </button>
            </div>
        </div>
    );
}
