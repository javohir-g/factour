'use client'

import styles from "./zoom_parallax.module.scss"
import Image from "next/image";
import {useScroll, useTransform, motion} from "framer-motion";
import {useEffect, useRef} from "react";

const ZoomParallax = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        scrollContainerRef.current = document.querySelector('.custom-scroll');
    }, []);

    const {scrollYProgress} = useScroll({
        container: scrollContainerRef,
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

    const pictures = [
        {
            src: "/gallery/img_6.JPG",
            scale: scale4
        },
        {
            src: "/gallery/img_3.JPG",
            scale: scale5
        },
        {
            src: "/gallery/img_9.jpg",
            scale: scale6
        },
        {
            src: "/gallery/img_7.JPG",
            scale: scale5
        },
        {
            src: "/gallery/img_2.JPG",
            scale: scale6
        },
        {
            src: "/gallery/img_5.JPG",
            scale: scale8
        },
        {
            src: "/gallery/img_4.JPG",
            scale: scale9
        },
    ]

    return(
        <div ref={containerRef} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map(({src, scale}, i) => {
                        return(
                            <motion.div style={{scale: scale}} className={styles.el} key={i}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={src}
                                        alt={"image"}
                                        fill
                                    />
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ZoomParallax