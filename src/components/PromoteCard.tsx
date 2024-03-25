'use client'
import VideoPlayer from "./VideoPlayer"
import { useState } from "react"
import { useWindowListener } from "@/hooks/useWindowListener"

export default function PromoteCard() {
    const [playing, setPlaying] = useState(true)

    useWindowListener('contextmenu', (e)=> {e.preventDefault()})
    return (
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-white flex flex-row font-sans">
            <VideoPlayer isPlaying={playing} vdoSrc="/vdo/cars3.mp4"></VideoPlayer>
            <div className="m-5">
                <div className="text-xl font-semibold pb-4 text-black">
                    Get your car today.
                </div>
                <div className="text-l pb-4 text-black pr-3 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nibh convallis, pharetra magna id, lobortis dolor. Aenean convallis nibh tortor, a efficitur purus rhoncus a. Suspendisse potenti. Donec volutpat a dolor non porttitor. Ut metus justo, vehicula sit amet nisi nec, finibus tincidunt ex. Aliquam vitae feugiat lorem. Phasellus.
                </div>
                <button className="block rounded-xl bg-red-800 hover:bg-red-900 px-6 py-2 text-white text-base shadow-sm"
                    onClick = {()=> setPlaying(!playing) }>
                        {playing?'Pause':'Play'}
                </button>
            </div>
        </div>
    )
}