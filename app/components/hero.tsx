interface Props{
    dropShadow: string;
    text: string;
}


const Hero = ({dropShadow, text}: Props) => {
    return (
        <div className="flex pt-40 items-center h-[70vh]">
            <h1 className={`${dropShadow} relative z-10 font-bungee text-9xl w-[60%] text-white`}>{text}</h1>
        </div>
    )
}
export default Hero
