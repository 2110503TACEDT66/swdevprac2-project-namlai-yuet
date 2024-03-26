'use client'
import BookingList from "@/components/BookingList"
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function MyBooking() {
    return (
        <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
        <main>
            <div className="bg-gradient-to-t from-[#21333c] to-black text-black fixed w-[100vw] h-[100vh]">
                <div className="mt-[100px]">
                    <BookingList></BookingList>
                </div>
            </div>
        </main>
        </Suspense>
    )
}