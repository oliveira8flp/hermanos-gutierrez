import HeroSection from "@/app/(Home)/_sections/heroSection";
import NextTour from "@/app/(Home)/_sections/nextTour";
import PhotoSection from "@/app/(Home)/_sections/photoSection";
import OurLatest from "@/app/(Home)/_sections/ourLatest";
import InTheMedia from "@/app/(Home)/_sections/inTheMedia";
import OurSocials from "@/app/(Home)/_sections/ourSocials";

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
