'use client'

import HeroSection from "@/app/(Home)/_sections/heroSection";
import NextTour from "@/app/(Home)/_sections/nextTour";
import PhotoSection from "@/app/(Home)/_sections/photoSection";
import OurLatest from "@/app/(Home)/_sections/ourLatest";
import InTheMedia from "@/app/(Home)/_sections/inTheMedia";
import OurSocials from "@/app/(Home)/_sections/ourSocials";
import {useEffect, useState} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function Home() {

    const [intro, setIntro] = useState(false);

    useEffect(() => {
        const  timer = setTimeout(() =>{
            ScrollTrigger.refresh()
        }, 100);

        return() => clearTimeout(timer);
    }, [intro]);

    return (
  <div className={`w-full ${intro ? "min-h-screen" : "h-screen"}`} >
            <HeroSection onIntroComplete={() => setIntro(true)} />
            <NextTour/>
            <PhotoSection />
            <OurLatest />
            <InTheMedia/>
            <OurSocials />
      </div>
  )
}
