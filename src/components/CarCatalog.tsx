'use client'
import Card from "./Card"

export default async function CarCatalog({carsJson}:{carsJson:Promise<CarJson>}) {
    const carJsonReady = await carsJson
    return (
        <>
            <h1 className="text-white font-semibold font-sans text-2xl text-center pb-[10px] relative">{carJsonReady.count} cars available</h1>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignContent: "center", zIndex: "5", position: "relative"}}>
                {carJsonReady.data.map((carItem: CarItem) => (
                    <a href={`/car/${carItem._id}`} className="w-[100%] sm:w-[45%] md:w-[30%] lg:w-[20%] m-[10px]" key={carItem._id}>
                        <Card carBrand={carItem.car_brand} carModel={carItem.car_model} dayRate={carItem.dayRate} imgSrc={carItem.picture} />
                    </a>
                ))}
            </div>
            <h1 className="text-white font-semibold font-sans text-2xl text-center pb-[10px]">{carJsonReady.count} cars available</h1>
        </>
    );
}