import HeroSection from "@/app/sections/heroSection";
import NextTour from "@/app/sections/nextTour";
import PhotoSection from "@/app/sections/photoSection";
import OurLatest from "@/app/sections/ourLatest";
import InTheMedia from "@/app/sections/inTheMedia";
import OurSocials from "@/app/sections/ourSocials";

export default function Home() {

    return (
      <>
            <HeroSection />
            <NextTour/>
            <PhotoSection />
            <OurLatest />
            <InTheMedia/>
            <OurSocials />
      </>
  )
}
