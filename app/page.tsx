'use client'

import HeroSection from "@/app/(Home)/_sections/heroSection";
import NextTour from "@/app/(Home)/_sections/nextTour";
import PhotoSection from "@/app/(Home)/_sections/photoSection";
import OurLatest from "@/app/(Home)/_sections/ourLatest";
import InTheMedia from "@/app/(Home)/_sections/inTheMedia";
import OurSocials from "@/app/(Home)/_sections/ourSocials";
import {useState} from "react";

export default function Home() {

    const [intro, setIntro] = useState(false);
    return (
      <div className={`w-full ${intro ? "min-h-screen" : "h-screen"}`}>
            <HeroSection />
            <NextTour/>
            <PhotoSection />
            <OurLatest />
            <InTheMedia/>
            <OurSocials />
      </div>
  )
}
