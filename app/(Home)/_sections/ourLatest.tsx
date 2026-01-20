import Hero from "@/app/_components/hero";
import YoutubeBackground from "@/app/_components/youtubeBackground";
import Button from "@/app/_components/button";

const OurLatest = () => {
    return (
        <section className ="Banner4 flex-wrap flex-row flex relative justify-center items-center bg-[#F5EBD0] w-[100vw] h-[140vh]">
            <div className="banner4Left w-[48%] h-[70vh] flex flex-col justify-center items-start">
                <Hero height="h-[60vh]" text_size = "text-[10rem]" text_sizeMobile="text-[2rem]" dropShadow="drop-shadow-[-4px_6px_0px_rgba(100,146,136,1)]" text="Our Latest" width="w-[60vw]" color = "text-black"/>
                <h2 className ="font-paquito text-3xl text-[#649288]">Hold on to the Light</h2>
                <h2 className ="font-paquito text-2xl text-[#649288]">With Jack Johnson</h2>
            </div>
            <div className = "gap-2 banner4Right w-[48%] h-[90vh] flex flex-col justify-center items-end">
                <YoutubeBackground absolute = "relative" videoId="Pmud5up0My0" height="h-[30vh]" width="w-[30vw]" lg_width="w-[15vw]" lg_height="h-[15vh]" />
                <Button text="listen on spotify" color="bg-[#649288]" color2="bg-black" textColor="text-white" width="w-[280px]" />
                <Button text="listen on youtube" color="bg-black" color2="bg-[#649288]" textColor="text-white" width="w-[280px]" />
            </div>

        </section>
    )
}
export default OurLatest
