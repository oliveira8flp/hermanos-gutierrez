import Image from "next/image";

const Heads = () => {
    return (
        <section className="gap-2 flex z-99 w-[100%] h-[40vh] justify-center items-center">
            <div className="flex justify-end items-center w-[52%]">
                <h2 className ="text-white font-paquito">scroll down</h2>
            </div>
            <div className="flex items-center justify-end w-[48%]">
                <Image src="/images/head_alejandro.png" alt="Alejandro Gutierrez" width={90} height={60}></Image>
                <Image src="/images/head_estevan.png" alt="Alejandro Gutierrez" width={100} height={100}></Image>
            </div>
        </section>


    )
}
export default Heads
