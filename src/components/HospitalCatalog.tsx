'use client'
import Card from "./Card"

export default async function HospitalCatalog({hospitalsJson}:{hospitalsJson:Promise<HospitalJson>}) {
    const hospitalJsonReady = await hospitalsJson
    return (
        <> <h1 className="text-black font-semibold font-sans text-lg">{hospitalJsonReady.count} hospitals</h1>
        <div style={{margin:"20px", display: "flex", flexDirection: "row", flexWrap:"wrap", justifyContent:"space-around", alignContent: "space-around"}}>
        {
            hospitalJsonReady.data.map((hospitalItem:HospitalItem) => (
                <a href={`/hospital/${hospitalItem.id}`} className="w-1/5">
                    <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture}/>
                </a>
                
            ))
        }
        </div>
        </>
    )
}