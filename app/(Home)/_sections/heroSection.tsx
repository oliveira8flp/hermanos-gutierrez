'use client'

import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import YoutubeBackground from "@/app/_components/youtubeBackground";
import Hero from "@/app/_components/hero";
import Heads from "@/app/_components/heads";
import {useRef, useState} from "react"
import Navbar from "@/app/_components/navbar";
import Image from "next/image";
import {useLenis} from "lenis/react";
import {useEffect} from "react";

interface Props{
    onIntroComplete: () => void;
}

const HeroSection = ({onIntroComplete}: Props) => {

    const mainContainer = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLDivElement>(null)
    const lenis = useLenis()


    useGSAP(() =>{

        const tl2 = gsap.timeline({paused:true});
        const tl = gsap.timeline()
        const divs = document.querySelectorAll(".divBlack");

        if(!mainContainer.current || !videoRef.current){return};

        lenis?.stop();
        lenis?.scrollTo(0, {immediate: true})

        tl.fromTo(".thunderbird", {
            autoAlpha: 0,
        }, {
            autoAlpha: 1,
            duration: 4,
        }).to(".thunderbird", {
            autoAlpha:0,
            duration:2,
        }).fromTo(divs, {
            yPercent:0,
            autoAlpha:1,
        }, {
            yPercent: "100",
            autoAlpha: 1,
            stagger: 0.1,
            delay: 0.75,
            duration: 2,
            ease: "easeInOut",
            onComplete: () =>{
                lenis?.start();
                onIntroComplete();
            }
        })

        tl2.fromTo(videoRef.current, {
            scale: 0.2,
            autoAlpha: 1,
        }, {
            scale: 1,
            autoAlpha: 1,
            ease: "none",
        })

        ScrollTrigger.create({
                trigger: mainContainer.current,
                start: "top top",
                end: "+=100%",
                pin: true,
                pinSpacing: true,
                markers: true,
                onUpdate: (self)=>{
                    if(self.progress > tl2.progress()){
                        tl2.progress(self.progress);
                    }
                }
        });

    }, {scope: mainContainer, dependencies: [lenis]})

    return (
        <div ref ={mainContainer} className="h-full w-full z-102 relative">
            <section  className="Banner1 relative bg-[#000000] w-[100vw] h-[100vh]">
                <div className="overflow-hidden absolute w-[100vw] h-[100vh] flex justify-center items-center bg-[#F5EBD0]">
                    <div className="divBlack z-100 bg-black w-[20vw] h-[100vh]"></div>
                    <div className="divBlack z-100 bg-black w-[20vw] h-[100vh]"></div>
                    <div className="divBlack z-100 bg-black w-[20vw] h-[100vh]"></div>
                    <div className="divBlack z-100 bg-black w-[20vw] h-[100vh]"></div>
                    <div className="divBlack z-100 bg-black w-[20vw] h-[100vh]"></div>
                    <Image className="absolute z-101 thunderbird" src="/images/black-thunderbird-shadow 1.png" alt="Black Thunderbird" width={100} height={100}></Image>
                </div>
                <div ref ={videoRef} className ="animated-video flex-wrap relative flex w-full h-screen justify-start items-start">
                    <Navbar />
                    <YoutubeBackground absoluteDiv="absolute" absolute = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" opacityOverlay="bg-black/80" videoId="bTiu9nfgGys" width="w-[300%]" height="h-[300%]" lg_width="lg:w-[150%]" lg_height="lg:h-[150%]"/>
                    <Hero dropShadow="drop-shadow-[-4px_6px_0px_rgba(252,211,77,1)]" text="Can you hear the Sonido?" width="w-[60vw]" color = "text-white"/>
                    <Heads/>
                </div>
            </section>
        </div>

    )
}
export default HeroSection
