'use client'

import Hero from "@/app/_components/hero";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/SplitText";
import {useRef} from "react";

gsap.registerPlugin(SplitText);

const MenuLink = ({ text }: { text: string }) => {

    const tl = useRef<gsap.core.Tween>(null);
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const split = new SplitText(".wrapped", {type: "chars", scope: container.current!});

        tl.current = gsap.to(split.chars, {
            yPercent: -100,
            duration: 0.3,
            ease: "power2.inOut",
            stagger: 0.03,
        })

        return() => split.revert()

    }, {scope:container});

    return(
        <div onMouseEnter={() => tl.current?.play()} onMouseLeave={() => tl.current?.reverse()} ref={container}>
            <h2 className ="wrapped cursor-pointer">{text}</h2>
            <h2 className ="wrapped cursor-pointer">{text}</h2>
        </div>
    )
}


const Footer = () => {

    return (
        <section className="Footer flex-wrap flex-row flex relative justify-end items-center bg-[#F5EBD0] w-full h-[90vh]">
            <div className="flex flex-col justify-center items-center w-full h-[30vh]">
                <Hero text_size = "text-[10rem]" text_sizeMobile="text-[2rem]" dropShadow="drop-shadow-[-4px_6px_0px_rgba(218,157,43,1)]" text="Hermanos Gutierrez" color="" width="w-full" text_align="text-center"/>
                <h2 className="font-paquito text-3xl">Copyright 2026</h2>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[30vh]">
                <ul className="font-paquito text-4xl flex flex-row gap-x-12">
                    <li><div className="wrapper overflow-hidden h-[40px]"><MenuLink text="MUSIC"/></div></li>
                    <li><div className="wrapper overflow-hidden h-[40px]"><MenuLink text="MERCH"/></div></li>
                    <li><div className="wrapper overflow-hidden h-[40px]"><MenuLink text="PHOTOS"/></div></li>
                </ul>
            </div>
        </section>
    )
}
export default Footer
