'use client'

import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import YoutubeBackground from "@/app/_components/youtubeBackground";
import Hero from "@/app/_components/hero";
import Heads from "@/app/_components/heads";
import {useRef} from "react"
import Navbar from "@/app/_components/navbar";

const HeroSection = () => {

    const mainContainer = useRef<HTMLDivElement>(null);

    useGSAP(() =>{
        gsap.fromTo(".animated-video", {
            scale: 0.2,
            autoAlpha: 1,
        }, {
            scale: 1,
            autoAlpha: 1,
            scrollTrigger:{
                trigger: ".Banner1",
                start: "top top",
                end: "+=1000",
                pin: ".animated-video",
                scrub: true,
                markers: true,
                /* once: true,  This is supposed to stop the scaling animation, but it's not working properly */
            },
        })
    }, {scope: mainContainer})
    return (
        <section ref ={mainContainer} className="Banner1 relative bg-[#F5EBD0] w-[100vw] h-[250vh]">
            <div className ="animated-video z-100 flex-wrap relative flex w-full h-screen justify-start items-start">
                <Navbar />
                <YoutubeBackground absoluteDiv="absolute" absolute = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" opacityOverlay="bg-black/80" videoId="bTiu9nfgGys" width="w-[300%]" height="h-[300%]" lg_width="lg:w-[150%]" lg_height="lg:h-[150%]"/>
                <Hero dropShadow="drop-shadow-[-4px_6px_0px_rgba(252,211,77,1)]" text="Can you hear the Sonido?" width="w-[60vw]" color = "text-white"/>
                <Heads/>
            </div>
        </section>
    )
}
export default HeroSection
