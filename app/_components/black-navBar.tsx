"use client"

import Image from "next/image";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useRef} from "react";
gsap.registerPlugin(ScrollTrigger)

const BlackNavBar = () => {
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

    return (
        <nav ref={blackNavBar} className="blackNavBar gap-2 w-[100%] flex justify-center items-center fixed top-0 left-0 z-80 navbar navbar-expand-lg pt-5">
            <h2 className ="text-black font-paquito text-2xl">MENU</h2>
            <Image src="/images/black-thunderbird-shadow 1.png" alt="logo hermanos gutierrez" width={100} height={100}></Image>
        </nav>
    )
}
export default BlackNavBar
