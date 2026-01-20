"use client"

import Image from "next/image"

interface Props{
    imageSource:string;
    imageAlt:string;
    imageDescription:string;
    imageYear: string;
    widthText: string;
    alignText: string;
}

const AlbumBlock = ({imageSource, imageAlt, imageDescription, imageYear, widthText, alignText}: Props) => {
    return (
        <div className="w-[49%] flex flex-col justify-center items-center">
            <Image src={imageSource} alt={imageAlt} width={600} height={600} />
            <h2 className={`font-paquito text-3xl ${widthText} ${alignText} text-black`}>{imageDescription}</h2>
            <h3 className={`font-paquito text-3xl ${widthText} ${alignText} text-black`} >{imageYear}</h3>
        </div>
    )
}
export default AlbumBlock

