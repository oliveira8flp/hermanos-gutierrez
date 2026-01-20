import Image from "next/image";
import YoutubeBackground from "@/app/_components/youtubeBackground";

const PhotoSection = () => {
    return (
        <section className="Banner3 flex-wrap flex relative bg-[#F5EBD0] w-[100vw] h-[200vh] justify-center center-items">
            <YoutubeBackground absolute = "absolute top-240 left-20" videoId="LrFf71N-_KY" height="h-[50vh]" width="w-[50vw]" lg_width="w-[15vw]" lg_height="h-[15vh]" />
            <YoutubeBackground absolute = "absolute top-100 left-100" videoId="F13mQKlMcp0&list=RDF13mQKlMcp0&start_radio=1" height="h-[50vh]" width="w-[50vw]" lg_width="w-[15vw]" lg_height="h-[15vh]" />
            <YoutubeBackground absolute = "absolute top-190 left-180" videoId="IHmzK2i7VvQ&list=RDIHmzK2i7VvQ&start_radio=1" height="h-[50vh]" width="w-[50vw]" lg_width="w-[15vw]" lg_height="h-[15vh]" />
        </section>
    )
}
export default PhotoSection
