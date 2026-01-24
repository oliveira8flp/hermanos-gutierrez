import Hero from "@/app/_components/hero";
import Image from "next/image";
import Button from "@/app/_components/button";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useSound} from "@/app/_context/SoundContext";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)



const NextTour = () => {
    /*const { playTrack } = useSound();

    useGSAP(() =>{
        ScrollTrigger.create({
            trigger: ".Banner2",
            start: "top center",
            end: "bottom center",
            onEnter: () => playTrack("tour"),
            onEnterBack: () => playTrack("tour"),
        })
    }); */

    return (
        <section className="Banner2 flex-wrap flex relative bg-[#F5EBD0] w-[100vw] h-[120vh] pt-48">
            <div className="banner2left w-[49%] flex flex-col justify-center items-center">
                <Image src="/images/banner2.png" alt="South America Tour 2026" width={500} height={500}></Image>
                <h2 className = "text-left w-[66%] font-paquito">art by @perryshall</h2>
            </div>
            <div className="flex flex-col banner2right w-[49%] h-[100%] items-end gap-2">
                <Hero height="h-[60vh]" text_size = "text-[10rem]" text_sizeMobile="text-[2rem]" dropShadow="drop-shadow-[-4px_6px_0px_rgba(218,78,43,1)]" text="On Our Way" width="w-[60vw]" color="text-black" text_align="text-right"/>
                <h2 className="font-paquito text-[#DA4E2B] text-3xl">South America Tour 2026</h2>
                <Button text = "buy tickets" color="bg-[#DA4E2B]" color2="bg-black" textColor="text-white" width="w-[280px]"/>
                <Button text = "other tours" color="bg-black" color2="bg-[#DA4E2B]" textColor="text-white" width="w-[280px]"/>
            </div>

        </section>
    )
}
export default NextTour
