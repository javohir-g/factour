"use client"

import { useRef } from "react"
import { useAnimationFrame } from "motion/react"

export default function CubeAnimation() {
    const ref = useRef<HTMLDivElement>(null)

    useAnimationFrame((t) => {
        if (!ref.current) return
        const rotate = Math.sin(t / 10000) * 200
        const y = (1 + Math.sin(t / 1000)) * -20
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
    })

    return (
        <div className="preloader">
            {/* === Centered Cube === */}
            <div className="cube-layer">
                <div className="cube" ref={ref}>
                    <div className="side front" />
                    <div className="side right" />
                    <div className="side back" />
                    <div className="side left" />
                    <div className="side top" />
                    <div className="side bottom" />
                </div>
            </div>

            {/* === Static Loading Text === */}
            <div
                className="text-layer"
                style={{
                    position: "fixed",
                    bottom: "40px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    color: "#1a1a1a",
                    letterSpacing: "1px",
                    textAlign: "center",
                    zIndex: 10000,
                }}
            >
                Loading ...
            </div>

            <style jsx>{`
                .preloader {
                    position: fixed;
                    inset: 0;
                    background: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                }

                /* Cube container */
                .cube-layer {
                    perspective: 500px;
                    width: 100px;
                    height: 100px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .cube {
                    width: 100px;
                    height: 100px;
                    position: relative;
                    transform-style: preserve-3d;
                    transform-origin: center center;
                }

                .side {
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    background-color: #1A1414;
                    border: 1px solid #F8F4EC;
                    background-size: 60%;
                    background-repeat: no-repeat;
                    background-position: center;
                }

                .front  { transform: rotateY(0deg) translateZ(50px);  background-image: url("/logoV2.png"); }
                .right  { transform: rotateY(90deg) translateZ(50px); background-image: url("/logoV2.png"); }
                .back   { transform: rotateY(180deg) translateZ(50px); background-image: url("/logoV2.png"); }
                .left   { transform: rotateY(-90deg) translateZ(50px); background-image: url("/logoV2.png"); }
                .top    { transform: rotateX(90deg) translateZ(50px);  background-image: url("/logoV2.png"); }
                .bottom { transform: rotateX(-90deg) translateZ(50px); background-image: url("/logoV2.png"); }
            `}</style>
        </div>
    )
}
