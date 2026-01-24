import Hero from "@/app/_components/hero";
import Image from "next/image";

const OurSocials = () => {
    return (
        <section className="Banner6 flex-wrap flex-row flex relative justify-end items-center bg-[#F5EBD0] w-full h-[90vh] pt-30">
            <div className="banner6 flex justify-center items-center w-full h-[30vh]">
                <Hero height="h-[60vh]" text_size = "text-[10rem]" text_sizeMobile="text-[2rem]" dropShadow="drop-shadow-[-4px_6px_0px_rgba(73,130,157,1)]" text="Our Socials" color="" width="w-[95%]" text_align="text-center" />
            </div>
            <div className="flex justify-center items-center w-full">
                <Image src="/svg/linkedin.svg" alt="LinkedIn" width ={50} height = {50}/>
                <Image src="/svg/instagram.svg" alt="Instagram" width ={50} height = {50}/>
                <Image src="/svg/youtube.svg" alt="YouTube" width ={50} height = {50}/>
                <Image src="/svg/facebook.svg" alt="Facebook" width ={50} height = {50}/>
                <Image src="/svg/spotify.svg" alt="Spotify" width ={50} height = {50}/>
            </div>

        </section>
    )
}
export default OurSocials
