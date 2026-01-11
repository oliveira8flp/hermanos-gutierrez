'use client'

import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger"
import Lenis from "lenis";
import {useEffect} from "react";

const SmoothScrolling = () => {
    useEffect(() => {
        const lenis = new Lenis({duration: 4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true})
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
        return() => {
            lenis.destroy();
            gsap.ticker.remove((time) => lenis.raf(time * 1000));
        }
    }, []);

    return null
}
export default SmoothScrolling

