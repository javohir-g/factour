'use client'

import { useCallback } from 'react';

const useScrollToSection = (containerRef?: React.RefObject<HTMLElement | null>) => {
    const scrollToSection = useCallback((sectionId: string, offset: number = 80) => {
        const element = document.getElementById(sectionId.toLowerCase());
        if (!element) return;

        if (containerRef?.current) {
            // Scroll custom container
            const container = containerRef.current;
            const elementPosition = element.offsetTop;
            const offsetPosition = elementPosition - offset;

            container.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        } else {
            // Fallback to window scroll
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }, [containerRef]);

    const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        scrollToSection(sectionId);
    }, [scrollToSection]);

    const handleButtonScroll = useCallback((e: React.MouseEvent<HTMLButtonElement>, sectionId: string) => {
        e.preventDefault();
        scrollToSection(sectionId);
    }, [scrollToSection]);

    return { scrollToSection, handleSmoothScroll, handleButtonScroll };
};

export default useScrollToSection;