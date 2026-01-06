'use client'

import React from 'react'
import Image from "next/image";
import gsap from "gsap";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)



const Navbar = () => {
    const navRef = useRef<HTMLDivElement>(null);
    useGSAP(()=>{
        const showAnim = gsap.from(navRef.current, {
            yPercent: -100,
            paused: true,
            duration: 0.3,
        }).progress(1);

        ScrollTrigger.create({
            start: "top top",
            end:"max",
            onUpdate: (self) => {
                if(self.direction === 1){
                    showAnim.reverse();
                } else{
                    showAnim.play();
                }
            }
        })

    }, {scope: navRef});



    return (
        <nav ref={navRef} className="Navbar gap-2 w-[100%] flex justify-center items-center fixed z-101 navbar navbar-expand-lg pt-5">
                <h2 className ="text-white font-paquito text-2xl">MENU</h2>
                <Image src="/images/white-thunderbird.png" alt="logo hermanos gutierrez" width={100} height={100}></Image>
        </nav>
    )
}
export default Navbar
