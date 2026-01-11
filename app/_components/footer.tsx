'use client'

import Hero from "@/app/_components/hero";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/SplitText";
import {useRef} from "react";

gsap.registerPlugin(SplitText);


const Footer = () => {

    const music = new SplitText(".music", {type: "chars"});
    const merch = new SplitText(".merch", {type: "chars"});
    const photos = new SplitText(".photos", {type: "chars"});
    const tl = useRef<gsap.core.Tween>(null);
    const ulAnimations = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        tl.current = gsap.fromTo(".wrapped", {
            yPercent:0
        }, {
            yPercent: 60,
            duration: 0.3,
            ease: "none"
        })

    }, {scope:ulAnimations});

    const mouseEnterWrapper = () => {
        tl.current?.play()
    }

    const mouseLeavesWrapper = () => {
        tl.current?.reverse()
    }

    return (
        <section className="Footer flex-wrap flex-row flex relative justify-end items-center bg-[#F5EBD0] w-full h-[80vh]">
            <div className="flex flex-col justify-center items-center w-full h-[30vh]">
                <Hero dropShadow="drop-shadow-[-4px_6px_0px_rgba(218,157,43,1)]" text="Hermanos Gutierrez" color="" width="w-full" text_align="text-center"/>
                <h2 className="font-paquito text-3xl">Copyright 2026</h2>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[30vh]">
                <ul ref={ulAnimations} className="font-paquito text-4xl flex flex-row gap-x-12">
                    <li><div onMouseEnter={mouseEnterWrapper} onMouseLeave={mouseLeavesWrapper} className="wrapper overflow-hidden h-[40px]"><h2 className="music wrapped">MUSIC</h2><h2 className="music">MUSIC</h2></div></li>
                    <li><div onMouseEnter={mouseEnterWrapper} onMouseLeave={mouseLeavesWrapper} className="wrapper overflow-hidden h-[40px]"><h2 className="merch wrapped"> MERCH</h2><h2 className="merch"> MERCH</h2></div></li>
                    <li><div onMouseEnter={mouseEnterWrapper} onMouseLeave={mouseLeavesWrapper} className="wrapper overflow-hidden h-[40px]"><h2 className="photos wrapped">PHOTOS</h2><h2 className="photos">PHOTOS</h2></div></li>
                </ul>
            </div>
        </section>
    )
}
export default Footer
