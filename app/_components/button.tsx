'use client'

import Image from "next/image";
import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";


interface Props{
    text: string;
    color: string;
    color2: string;
    textColor: string;
    width: string;
}
const Button = ({text, color,color2, textColor, width}: Props) => {
    const divButton = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Tween>(null);

         useGSAP(() =>{
            tl.current = gsap.fromTo(".wrapper", {
                yPercent: 0,

            }, {
                yPercent: -100,
                duration: 0.3,
                ease: "none",
                paused: true,
            })
        }, {scope: divButton})

        const mouseEnterButton = () =>{
            return(
                tl.current?.play()
            )
    }
        const mouseLeavesButton = () =>{
            return(
                tl.current?.reverse()
            )
        }



    return (
        <div onMouseEnter = {mouseEnterButton} onMouseLeave ={mouseLeavesButton} ref={divButton} className=" buttons h-[56px] relative flex flex-col overflow-hidden">
            <div className="cursor-pointer h-[56px] wrapper flex flex-col">
                <button className={`${color} ${textColor} flex justify-center font-paquito ${width} flex p-3 text-2xl rounded-[4px]`}><Image src="/images/black-thunderbird-shadow 1.png" alt="logo hermanos gutierrez" width ={50} height ={30}></Image>{text}</button>
                <button className={`${color2} ${textColor} flex justify-center font-paquito ${width} flex p-3 text-2xl rounded-[4px]`}><Image src="/images/black-thunderbird-shadow 1.png" alt="logo hermanos gutierrez" width ={50} height ={30}></Image>{text}</button>
            </div>
        </div>



    )
}
export default Button
