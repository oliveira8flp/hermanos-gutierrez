'use client'

import React from 'react'
import Image from "next/image";
import gsap from "gsap";
import {useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
import Link from "next/link";

const menuLinks = [
    {path: "/", label: "Home"},
    {path: "music", label: "Music"},
    {path: "merch", label: "Merch"},
    {path: "photos", label: "Photos"},
    {path: "news", label: "News"},
    {path: "tour", label: "Tour"},
    {path: "bio", label: "Bio"},
    {path: "contact", label: "Contact"},
]


const Navbar = () => {

    const navRef = useRef<HTMLDivElement>(null);
    useGSAP(()=>{
        const showAnim = gsap.from(navRef.current, {
            yPercent: -100,
            autoAlpha:0,
            paused: true,
            duration: 0.3,
        });

        ScrollTrigger.create({
            start: "top top",
            end:"max",
            onUpdate: (self) => {
                const scrollThreshold = 200;

                if(self.scroll() > scrollThreshold){
                    if(self.direction === 1){
                        showAnim.reverse();
                    } else{
                        showAnim.play();
                    }
                } else{
                    showAnim.reverse();
                }
            }
        })

    }, {scope: navRef});

    const [isMenuOpen, setMenuOpen] = useState(false);
    const tl = useRef<gsap.core.Timeline>(null);

    useGSAP(()=>{
        gsap.set(".menu-link-item-holder", {
            y:75,
            autoAlpha:0,
        })

        tl.current = gsap.timeline({paused:true});

        tl.current.to(".menu-overlay", {
            duration: 1.25,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power4.inOut"
        }).to(".menu-link-item-holder", {
            y:0,
            autoAlpha:1,
            duration:1,
            stagger: 0.1,
            ease: "power4.out",
            delay: "-0.75"
        });
    }, {scope: navRef})

    const toggleButton = () => {
        if(isMenuOpen){
            tl.current?.reverse()
        }else{
            tl.current?.play()
        }
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full justify-center center-items Navbar  fixed top-0 left-0 z-101 pt-5" ref={navRef}>
            <nav onClick ={toggleButton} className="w-[100%] gap-2 flex justify-center items-center navbar navbar-expand-lg">
                <h2 className ="text-white font-paquito text-2xl cursor-pointer">{isMenuOpen ? "CLOSE" : "MENU"}</h2>
                <Image src="/images/white-thunderbird.png" alt="logo hermanos gutierrez" width={100} height={100}></Image>
            </nav>
            <div className="font-paquito menu-overlay fixed top-0 left-0 w-[30vw] h-[100vh] bg-black z-[150] flex flex-col justify-center items-center"
            style={{clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%"}}>
                {menuLinks.map((link, index)=>(
                    <div key={index} className="menu-link-item-holder relative text-white text-3xl">
                        <Link href={link.path} >
                            {link.label}
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    )
}
export default Navbar
