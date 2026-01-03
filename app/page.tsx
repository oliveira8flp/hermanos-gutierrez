import Hero from "@/app/components/hero";
import YoutubeBackground from "@/app/components/youtubeBackground";
import Heads from "@/app/components/heads";

export default function Home() {
  return (
      <>
          <section className="relative bg-amber-50 w-[100vw] h-[100vh]">
              <div className="z-99 absolute w-full h-full">
                  <h2>abc</h2>
              </div>
              <div className ="z-100 flex-wrap absolute flex w-full h-screen justify-center items-center">
                  <YoutubeBackground videoId="bTiu9nfgGys"/>
                  <Hero dropShadow="drop-shadow-[-4px_6px_0px_rgba(252,211,77,1)]" text="Can you hear the Sonido?"/>
                  <Heads/>
              </div>
          </section>
      </>
  )
}
