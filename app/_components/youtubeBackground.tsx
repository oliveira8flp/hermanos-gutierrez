interface Props {
    videoId: string;
    opacityOverlay?: string;
    width: string;
    height: string;
    lg_width: string;
    lg_height: string;
    absolute?: string;
    absoluteDiv?: string;
}


const YoutubeBackground = ({videoId, opacityOverlay, width, height, lg_width, lg_height, absolute, absoluteDiv}: Props) =>
{
    return (
        <div className={`${absoluteDiv} inset-0 z-0 overflow-hidden pointer-events-none`}>
            <iframe
                className={`${absolute} ${height} ${width} ${lg_width} ${lg_height}`}
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
                allow="autoplay; encrypted-media">
            </iframe>
            <div className ={`absolute inset-0 ${opacityOverlay}`}></div>
        </div>
    )

}
export default YoutubeBackground
