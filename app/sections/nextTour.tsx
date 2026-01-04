import Hero from "@/app/components/hero";

const NextTour = () => {
    return (
        <section className="Banner2 flex-wrap flex relative bg-amber-50 w-[100vw] h-[100vh]">
            <div className="banner2left w-[49%]">

            </div>
            <div className="flex flex-col banner2right w-[49%] items-end">
                <Hero dropShadow="drop-shadow-[-4px_6px_0px_rgba(218,78,43,1)]" text="On Our Way" width="w-[60vw]" color="text-black" text_align="text-right"/>
                <h2 className="font-paquito text-red-700 text-4xl">South America Tour 2026</h2>
            </div>

        </section>
    )
}
export default NextTour
