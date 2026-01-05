import Image from "next/image";

interface Props{
    text: string;
    color: string;
    textColor: string;
}
const Button = ({text, color, textColor}: Props) => {
    return (
        <button className={`${color} ${textColor} flex justify-center font-paquito w-[240px] flex p-4 text-2xl rounded-[4px]`}><Image src="/images/black-thunderbird.png" alt="logo hermanos gutierrez" width ={50} height ={30}></Image>{text}</button>
    )
}
export default Button
