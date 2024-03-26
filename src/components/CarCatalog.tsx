'use client'
import Card from "./Card"

export default async function CarCatalog({carsJson}:{carsJson:Promise<CarJson>}) {
    const carJsonReady = await carsJson
    return (
        <>
            <h1 className="text-black font-semibold font-sans text-lg">{carJsonReady.count} cars available</h1>
            <div style={{ margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around" }}>
                {carJsonReady.data.map((carItem: CarItem) => (
                    <a href={`/car/${carItem._id}`} className="w-1/5" key={carItem._id}>
                        <Card carBrand={carItem.car_brand} carModel={carItem.car_model} dayRate={carItem.dayRate} imgSrc={carItem.picture} />
                    </a>
                ))}
            </div>
        </>
    );
}