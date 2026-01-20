interface Props{
    dropShadow: string;
    text: string;
    color: string;
    width: string;
    text_align?: string;
    text_size: string;
    text_sizeMobile: string;
}


const Hero = ({dropShadow, text, width, color, text_align, text_size, text_sizeMobile}: Props) => {
    return (
        <div className={`flex pt-40 items-center h-[60vh]`}>
            <h1 className={`${dropShadow} relative z-10 font-bungee ${text_size} lg:${text_sizeMobile} leading-[0.9] ${color} ${text_align} ${width}`}>{text}</h1>
        </div>
    )
}
export default Hero
