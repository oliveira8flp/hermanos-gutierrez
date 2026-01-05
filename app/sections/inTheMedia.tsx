import Hero from "@/app/components/hero";
import Image from "next/image";
import Button from "@/app/components/button";

const InTheMedia = () => {
    return (
        <section className ="Banner5 flex-wrap flex-row flex relative bg-[#F5EBD0] w-[100vw] h-[100vh]">
            <div className = "flex justify-center w-[100vw] h-[30vh]">
                <Hero dropShadow="drop-shadow-[-4px_6px_0px_rgba(138,157,73,1)]" text="In the Midia" color="text-black" width="w-[20%]" />
            </div>
            <div className="flex flex-row h-[70vh] w-[100%] justify-center items-center">
                <div className="flex flex-col justify-center items-center w-[49%]]">
                    <Image src="/images/video-on-midia1.png" alt="Interview with Jimmy Kimmel" width ={500} height = {500}></Image>
                    <Button text="watch" color="bg-[#8A9D49]" textColor="text-white"/>
                </div>
                <div className="flex flex-col justify-center items-center w-[49%]">
                    <Image src="/images/video-on-midia2.png" alt="Interview with Jimmy Kimmel" width ={500} height = {500}></Image>
                    <Button text="watch" color="bg-[#8A9D49]" textColor="text-white"/>
                </div>
            </div>
        </section>
    )
}
export default InTheMedia
