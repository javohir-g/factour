"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import CubeAnimation from "./CubeAnimation"

export default function PreloaderWrapper({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Disable scroll while loading
        document.body.style.overflow = 'hidden'

        const timer = setTimeout(() => {
            setLoading(false)
            document.body.style.overflow = 'unset' // Re-enable scroll
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <AnimatePresence>
                {loading && (
                    <motion.div
                        key="preloader"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-white"
                    >
                        <CubeAnimation />
                    </motion.div>
                )}
            </AnimatePresence>

            <main className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}>
                {children}
            </main>
        </>
    )
}
