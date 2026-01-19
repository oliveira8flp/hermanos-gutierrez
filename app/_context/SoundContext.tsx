"use client"
import {createContext, useContext, useState, useEffect, useRef} from "react";
import { Howl } from "howler";

type SoundContextType = {
    playTrack: (trackName: string) => void,
    unlockAudio: () => void
};

const SoundContext = createContext<SoundContextType | null>(null);



const SoundProvider = ({children} : {children: React.ReactNode}) => {
    const[unlocked, setUnlocked] = useState(false);
    const currentTrack = useRef<Howl | null>(null);
    const currentTrackName = useRef<string | null>(null);

    const playlist = useRef<{[key: string]: Howl}>({
        hero: new Howl({src: ["/audio/hermosa-drive.mp3"], loop: true, volume: 0, html5:false}),
        tour: new Howl({src: ["/audio/hijos-del-sol.mp3"], loop:true, volume:0, html5:false}),
        photos: new Howl({src: ["/audio/hermosa-drive.mp3"], loop:true, volume:0, html5:false})
    });

    const unlockAudio = () =>{
        if(unlocked) return;
        const ambient = playlist.current["hero"];
        if(ambient){
            ambient.play();
            ambient.mute(true);
        }

        setUnlocked(true);
        console.log("🔊 Audio Engine Unlocked")
    }

    useEffect(() => {

        const events = ["click", "touchstart", "keydown"]
        events.forEach(e=>
            document.addEventListener(e, unlockAudio));

        return() =>{
            events.forEach(e=> document.removeEventListener(e, unlockAudio));
        }

    }, [unlocked]);

    const playTrack = (trackName: string) => {
        if(!unlocked) {unlockAudio()};
        if(currentTrackName.current === trackName) return;
        console.log("Attempting to play", trackName);

        const newSound = playlist.current[trackName];

        if(newSound) {
            newSound.mute(false);
            newSound.play();
            newSound.fade(0, 1, 1000);
            currentTrack.current = newSound;
            currentTrackName.current = trackName;
        }
    }

    return (
        <SoundContext.Provider value={{playTrack, unlockAudio}}>
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
