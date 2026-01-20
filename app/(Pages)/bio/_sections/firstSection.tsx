import Image from "next/image";
import Hero from "@/app/_components/hero";

const FirstSection = () => {
    return (
        <section className="h-[100vh] w-[100vw] bg-[#F5EBD0] flex justify-center text-center">
            <div className="left w-[45vw] h-[100vh] flex justify-end items-center pr-25">
                <Image src="/images/Brothers.png" alt="" width ={400} height={400} />
            </div>
            <div className="right w-[52vw] h-[100vh] flex-wrap flex justify-start items-start pt-10">
                <Hero height="h-[0vh]" text_size = "text-[4rem]" text_sizeMobile="text-[1rem]" dropShadow="drop-shadow-[-4px_6px_0px_rgba(218,78,43,1)]" text="Born Swiss, Raised Latin" width="w-[40vw]" color="text-black" text_align="text-left"/>
                <h3 className=" w-[50vw] mt-[-100] text-left font-paquito text-2xl">Alejandro and Estevan Gutiérrez, two of four siblings, were raised by an Ecuadorian mother and a Swiss father in Switzerland, and often visited family in Playas, Ecuador. Around age nine, Estevan learned to play classical guitar in Latin styles such as milonga and salsa, and as a surfer was later inspired by surf rocker Jack Johnson.Alejandro, who is eight years younger, taught himself guitar by watching tutorial videos on YouTube. The Hermanos Gutiérrez band traces its origins to a jam session in Alejandro's apartment in Zürich during a visit from Estevan in 2015.</h3>
            </div>
        </section>
    )
}
export default FirstSection
