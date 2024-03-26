'use client'
import BookingList from "@/components/BookingList"
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function MyBooking() {
    return (
        <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
        <main>
            <div className="h-[90px] bg-gradient-to-t from-black to-[#0c0351]"></div>
            <BookingList></BookingList>
        </main>
        </Suspense>
    )
}