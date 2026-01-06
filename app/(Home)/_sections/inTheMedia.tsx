import Hero from "@/app/_components/hero";
import Image from "next/image";
import Button from "@/app/_components/button";

const InTheMedia = () => {
    return (
        <section className ="Banner5 flex-wrap flex items-center justify-center relative bg-[#F5EBD0] w-full h-[120vh] pb-92">
            <div className = "flex justify-end w-full h-[50vh] items-end ">
                <Hero dropShadow="drop-shadow-[-4px_6px_0px_rgba(138,157,73,1)]" text="In the Midia" color="text-black" width="w-[80%]" text_align="text-right" />
            </div>
            <div className="flex flex-row h-[60vh] w-[80%] justify-center items-center">
                <div className="flex flex-col justify-center items-start w-[49%]">
                    <Image src="/images/video-on-midia1.png" alt="Interview with Jimmy Kimmel" width ={500} height = {500}></Image>
                    <h2 className="font-paquito text-3xl w-[60%]">Hermanos Gutierrez in Jimmy Kimmel Live!</h2>
                    <Button text="watch" color="bg-[#8A9D49]" textColor="text-white" width="w-[140px]" />
                </div>
                <div className="flex flex-col justify-center items-start w-[49%]">
                    <Image src="/images/video-on-midia2.png" alt="Interview with Jimmy Kimmel" width ={520} height = {550}></Image>
                    <h2 className="font-paquito text-3xl w-[60%]">Hermanos Gutierrez in SoCal Sound!</h2>
                    <Button text="watch" color="bg-[#8A9D49]" textColor="text-white" width="w-[140px]"/>
                </div>
            </div>
        </section>
    )
}
export default InTheMedia
