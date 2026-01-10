'use client'

import gsap from "gsap";
import {useRef, useEffect} from "react";
import {useGSAP} from "@gsap/react";
import Image from "next/image";

const Cursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);

    useGSAP(() =>{
        const xTo = gsap.quickTo(cursorRef.current, "x", {duration: 0.3, ease: "power3"});
        const yTo = gsap.quickTo(cursorRef.current, "y", {duration: 0.3, ease: "power3"});

        const moveShape = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
        }

        const checkHover = (e: MouseEvent) =>{
            const target = e.target as HTMLElement;
            const isInteractive = target.closest("a, button, .hover-trigger, input");

            if(isInteractive){
                gsap.to(cursorRef.current, {
                    scale: 2.5,
                    rotation: 15,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                })
            }else{
                gsap.to(cursorRef.current, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: "power2.out",
                })
            }
        }

        window.addEventListener("mousemove", moveShape);
        window.addEventListener("mouseover", checkHover);

        return() => {
            window.removeEventListener("mouseenter", moveShape);
            window.removeEventListener("mouseover", checkHover);
        }

    }, [])


    return (
        <div ref={cursorRef} className="fixed top-0 left-0 pointer-events-none z-[9999]">
            <div className="absolute top-5 left-[-15]" style={{width: "60px", height: "60px", transform: "translate(-50%, -50%)"}}>
                <Image src="/images/head_estevan.png" alt="Custom Cursor" width={60} height={60} className="w-full h-full object-contain" style={{mixBlendMode: "difference"}}/>
            </div>
            <div className ="absolute" style={{width: "60px", height: "60px", transform: "translate(-50%, -50%)"}}>
                <Image src="/images/head_alejandro.png" alt="Custom Cursor" width={60} height={60} className="w-full h-full object-contain" style={{mixBlendMode: "difference"}}/>
            </div>
        </div>
    )
}
export default Cursor
