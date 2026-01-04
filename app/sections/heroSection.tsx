'use client'

import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import YoutubeBackground from "@/app/components/youtubeBackground";
import Hero from "@/app/components/hero";
import Heads from "@/app/components/heads";
import {useRef} from "react";

const HeroSection = () => {

    const mainContainer = useRef<HTMLDivElement>(null);

    useGSAP(() =>{
        gsap.fromTo(".animated-video", {
            scale: 0.2,
            autoAlpha: 0.2,
        }, {
            scale: 1,
            autoAlpha: 1,
            scrollTrigger:{
                trigger: ".Banner1",
                start: "top top",
                end: "+=1000",
                pin: ".animated-video",
                scrub:1,
                markers: true,
                pinSpacing: true,
            }
        })
    }, {scope: mainContainer})
    return (
        <section ref ={mainContainer} className="Banner1 relative bg-amber-50 w-[100vw] h-[250vh]">
            <div className ="animated-video z-100 flex-wrap relative flex w-full h-screen justify-center items-center">
                <YoutubeBackground videoId="bTiu9nfgGys"/>
                <Hero dropShadow="drop-shadow-[-4px_6px_0px_rgba(252,211,77,1)]" text="Can you hear the Sonido?"/>
                <Heads/>
            </div>
        </section>
    )
}
export default HeroSection
