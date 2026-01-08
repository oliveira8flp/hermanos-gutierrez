"use client"

import Image from "next/image";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useRef, useState} from "react";
gsap.registerPlugin(ScrollTrigger)
import Link from "next/link";

const BlackNavBar = () => {

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

    const blackNavBar = useRef<HTMLDivElement>(null);

    useGSAP(()=>{
        const showAnim = gsap.from(blackNavBar.current, {
            yPercent: -100,
            autoAlpha:0,
            paused: true,
            duration: 0.3,
        });


    ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) =>{
            const scrollThreshold = 200;

            if(self.scroll() > scrollThreshold){
                if(self.direction === 1){
                    showAnim.reverse();
                }else{
                    showAnim.play();
                }
            }else{
                showAnim.reverse();
            }


            }
    })

        }, {scope: blackNavBar}
    )

    const [menuOpen, setMenuOpen] = useState(false);
    const tl = useRef<gsap.core.Timeline>(null);

    useGSAP(()=>{
        gsap.set(".menu-link-item-holder", {
            y:75,
            autoAlpha:0,
        })

        tl.current =gsap.timeline({paused:true});

        tl.current.to(".menu-overlay", {
            duration: 1.25,
            ease: "power4.inOut",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        }).to(".menu-link-item-holder", {
            y:0,
            autoAlpha:1,
            duration: 1,
            ease: "power4.out",
            stagger: 0.1,
            delay: -0.75,
        })

    }, {scope: blackNavBar})

    const toggleButton = () =>{
        if(menuOpen){
            tl.current?.reverse()
        }else{
            tl.current?.play()
        }
        setMenuOpen(!menuOpen);
    }

    return (
        <div ref={blackNavBar} className = "w-[100%] flex justify-center items-center fixed top-0 left-0 z-80 navbar navbar-expand-lg pt-5">
            <nav  onClick = {toggleButton} className="blackNavBar gap-2 w-[100%] flex justify-center items-center">
                <h2 className ="text-black font-paquito text-2xl">{menuOpen ? "CLOSE" : "MENU"}</h2>
                <Image src="/images/black-thunderbird-shadow 1.png" alt="logo hermanos gutierrez" width={100} height={100}></Image>
            </nav>
            <div className = "font-paquito flex flex-col justify-center items-center menu-overlay fixed top-0 left-0 w-[30vw] h-[100vh] bg-black"
                 style ={{clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%"}}>
                {menuLinks.map((link, index) =>(
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
export default BlackNavBar
