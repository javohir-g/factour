'use client'
import {useRef, useEffect} from "react";
import {MotionValue, useScroll, useTransform, motion} from "framer-motion";

const AboutParagraph = ({value} : {value: string}) => {

    const element = useRef(null);
    const containerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        containerRef.current = document.querySelector('.custom-scroll');
    }, []);

    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.7', 'end 0.3'],
        container: containerRef
    })

    const words = value.split(" ");

    return(
        <p
            ref={element}
            className={"flex flex-wrap justify-evenly  md:justify-center md:p-3 py-3"}
        >
            {words.map( (word, i) => {
                const start = i / words.length;
                const end = start + (2 / words.length)
                return(
                    <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
                )
            } )}
        </p>
    )
}
export default AboutParagraph

const Word = ({children, range, progress}: {
    children: string;
    range: number[];
    progress: MotionValue<number>;
}) => {
    const opacity = useTransform(progress, range, [0, 1])
    const backgroundColor = useTransform(
        progress,
        [range[0], range[0] + 0.01, range[1] - 0.01, range[1]],
        ['rgba(26,20,20,0)', 'rgba(26,20,20,1)', 'rgba(26,20,20,1)', 'rgba(26,20,20,0)']
    )
    const color = useTransform(
        opacity,
        [0, 0.01, 0.99, 1],
        ['#1A1414', '#F8F4EC', '#F8F4EC', '#1A1414']
    )

    return(
        <span className={'relative mr-2 mt-2 inline-block'}>
            <motion.span
                style={{color, backgroundColor}}
                className={"text-xl md:text-2xl"}
            >
                {children}
            </motion.span>
        </span>
    )
}