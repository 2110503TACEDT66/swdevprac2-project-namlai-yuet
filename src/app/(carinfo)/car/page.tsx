'use client'
import getCars from "@/libs/getCars";
import CarCatalog from "@/components/CarCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default async function Car() {
    const cars =  await getCars()
    return (
        <main className="text-center">
            <div className="bg-gradient-to-t from-[#21333c] to-black text-black fixed w-[100vw] h-[100vh]">
            </div>
            <div className="pt-[100px]">    
                <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
                    <CarCatalog carsJson={cars}/>
                </Suspense>
            </div>
        </main>
    );
}