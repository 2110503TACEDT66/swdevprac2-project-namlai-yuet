import CardPanel from "@/components/CardPanel";
import getHospitals from "@/libs/getCars";
import HospitalCatalog from "@/components/HospitalCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function Hospital() {
    const hospitals = getHospitals()
    return (
        <main className="text-center p-5 text-black">
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            <HospitalCatalog hospitalsJson={hospitals}/>
            </Suspense>
        </main>
    );
}