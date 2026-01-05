import Image from "next/image";

const PhotoSection = () => {
    return (
        <section className="Banner3 flex-wrap flex relative bg-[#F5EBD0] w-[100vw] h-[100vh]">
            <Image className = "z-3 top-70 left-0 absolute w-[40%] h-[50%]" src="/images/banner3-1.png" alt="Hermanos Gutierrez on Horses" width = {800} height = {100}></Image>
            <Image className = "z-1 top-20 left-50 absolute w-[50%] h-[50%]" src="/images/banner3-2.png" alt="Hermanos Gutierrez chico-like" width = {800} height = {100}></Image>
            <Image className = "z-2 top-50 left-225 absolute w-[42%] h-[50%]" src="/images/banner3-3.png" alt="Hermanos Gutierrez with Leon Bridges" width = {800} height = {100}></Image>
        </section>
    )
}
export default PhotoSection
