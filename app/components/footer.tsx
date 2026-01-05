import Hero from "@/app/components/hero";

const Footer = () => {
    return (
        <section className="Footer flex-wrap flex-row flex relative justify-end items-center bg-[#F5EBD0] w-full h-[80vh]">
            <div className="flex flex-col justify-center items-center w-full h-[30vh]">
                <Hero dropShadow="drop-shadow-[-4px_6px_0px_rgba(218,157,43,1)]" text="Hermanos Gutierrez" color="" width="w-full" text_align="text-center"/>
                <h2 className="font-paquito text-3xl">Copyright 2026</h2>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[30vh]">
                <ul className="font-paquito text-4xl flex flex-row gap-x-12">
                    <li>MUSIC</li>
                    <li>MERCH</li>
                    <li>PHOTOS</li>
                </ul>
            </div>
        </section>
    )
}
export default Footer
