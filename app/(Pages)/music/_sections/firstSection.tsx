import Hero from "@/app/_components/hero";

const FirstSection = () => {
    return (
        <section className="h-[100vh] w-[100vw] bg-[#F5EBD0] flex justify-center text-center">
            <Hero text_size="text-[14rem]" text_sizeMobile="text-[2rem]" dropShadow="drop-shadow-[-4px_6px_0px_rgba(218,78,43,1)]" text="Our Albums" width="w-[60vw]" color = "text-black" />
        </section>
    )
}
export default FirstSection
