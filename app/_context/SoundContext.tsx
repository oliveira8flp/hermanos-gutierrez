"use client"
import {createContext, useContext, useState, useEffect, useRef} from "react";
import { Howl } from "howler";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

type SoundContextType = {
    playTrack: (trackName: string) => void,
    stopAll: () => void
};

const SoundContext = createContext<SoundContextType | null>(null);



const SoundProvider = ({children} : {children: React.ReactNode}) => {
    const[unlocked, setUnlocked] = useState(false);
    const currentTrack = useRef<Howl | null>(null);
    const currentTrackName = useRef<string | null>(null);

    const playlist = useRef<{[key: string]: Howl}>({
        hero: new Howl({src: ["/audio/hermosa-drive.mp3"], loop: true, volume: 0, html5:true}),
        tour: new Howl({src: [""], loop:true, volume:0, html5:true}),
        photos: new Howl({src: [""], loop:true, volume:0, html5:true})
    });

    useEffect(() => {
        const unlockAudio = () =>{
            if(unlocked) return;
            const silence = new Howl({src: [""], volume:0});
            silence.play();
            setUnlocked(true);
        }

        const events = ["click", "touchstart", "keydown"]
        events.forEach(e=>
            document.addEventListener(e, unlockAudio));

        return() =>{
            events.forEach(e=> document.removeEventListener(e, unlockAudio));
        }

    }, [unlocked]);

    const playTrack = (trackName: string) => {
        if(!unlocked) return;
        if(currentTrackName.current === trackName) return;

        const newSound = playlist.current[trackName];

        if(currentTrack.current){
            const oldSound = currentTrack.current;
            oldSound.fade(oldSound.volume(), 0, 1000);
            setTimeout(() => oldSound.stop(), 1000);
        }

        if(newSound) {
            newSound.play();
            newSound.fade(0, 1, 1000);
            currentTrack.current = newSound;
            currentTrackName.current = trackName;
        }
    }

    const stopAll = () =>{
            if(currentTrack.current){
                currentTrack.current.fade(currentTrack.current.volume(), 0, 500);
                setTimeout(()=> currentTrack.current?.stop(), 1000);
            }
            currentTrack.current = null;
        }

    return (
        <SoundContext.Provider value={{playTrack, stopAll}}>
            {children}
        </SoundContext.Provider>
    )
}

export const useSound = () => {
    const context = useContext(SoundContext);
    if(!context) throw new Error("UseSound must be used without SoundProvider");
    return context;
}

export default SoundProvider
