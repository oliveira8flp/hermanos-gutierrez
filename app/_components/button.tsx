import Image from "next/image";

interface Props{
    text: string;
    color: string;
    textColor: string;
    width: string;
}
const Button = ({text, color, textColor, width}: Props) => {
    return (
        <button className={`${color} ${textColor} flex justify-center font-paquito ${width} flex p-3 text-2xl rounded-[4px]`}><Image src="/images/black-thunderbird-shadow 1.png" alt="logo hermanos gutierrez" width ={50} height ={30}></Image>{text}</button>
    )
}
export default Button
