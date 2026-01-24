import Image from "next/image"

interface Props{
    imageSource:string;
    imageAlt:string;
    imageDescription:string;
    widthText: string;
    alignText: string;
    widthPhoto: string;
}

const PhotoBlock = ({imageSource, imageAlt, imageDescription, imageYear, widthText, alignText, widthPhoto}: Props) => {
    return (
        <div className={`${widthPhoto} flex flex-col justify-center items-center`}>
            <div className="overflow-hidden h-[40vh] flex justify-center items-center">
                <Image src={imageSource} alt={imageAlt} width={600} height={600} />
            </div>
            <h2 className={`font-paquito text-2xl ${widthText} ${alignText} text-black`}>{imageDescription}</h2>
        </div>
    )
}
export default PhotoBlock

