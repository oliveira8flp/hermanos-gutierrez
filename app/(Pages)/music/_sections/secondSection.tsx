import AlbumBlock from "@/app/_components/albumBlock";

const SecondSection = () => {
    return (
        <section className="h-[200vh] w-[100vw] flex flex-wrap bg-[#F5EBD0] flex justify-center text-center">
            <AlbumBlock widthText="w-[39vw]" alignText="text-left" imageSource="/images/hoy-como-acer.png" imageAlt="hoy como acer album 2019" imageDescription="Hoy como Ayer" imageYear="2019"/>
            <AlbumBlock widthText="w-[39vw]" alignText="text-right" imageSource="/images/hijos-del-sol.png" imageAlt="hijos del sol 2020" imageDescription="Hijos del Sol" imageYear="2020"/>
            <AlbumBlock widthText="w-[39vw]" alignText="text-left" imageSource="/images/el-bueno-y-el-malo.png" imageAlt="el bueno y el malo 2022" imageDescription="El Bueno y El Malo" imageYear="2022"/>
            <AlbumBlock widthText="w-[39vw]" alignText="text-right" imageSource="/images/sonido-cosmico.png" imageAlt="sonido cosmico 2024" imageDescription="Sonido Cosmico" imageYear="2024"/>
        </section>
    )
}
export default SecondSection
