interface Props {
    videoId: string;
    opacityOverlay: string;
}


const YoutubeBackground = ({videoId, opacityOverlay = "bg-black/80"}: Props) =>
{
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <iframe
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] lg:w-[150%] lg:h-[150%]"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
                allow="autoplay; encrypted-media">
            </iframe>
            <div className ={`absolute inset-0 ${opacityOverlay}`}></div>
        </div>
    )

}
export default YoutubeBackground
