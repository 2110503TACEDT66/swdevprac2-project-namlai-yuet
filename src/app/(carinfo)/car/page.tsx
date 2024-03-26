'use client'
import getCars from "@/libs/getCars";
import CarCatalog from "@/components/CarCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default async function Car() {
    const cars =  await getCars()
    return (
        <main className="text-center p-5 text-black">
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            <CarCatalog carsJson={cars}/>
            </Suspense>
        </main>
    );
}