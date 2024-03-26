import Image from "next/image"
import getCar from "@/libs/getCar"
import Link from "next/link"

export default async function CarDetailPage ({params}: {params: {cid:string}}) {
    const carDetail = await getCar(params.cid)
    /**
     * Mock Data for Demonstration Only
     */
    // const mockCarRepo = new Map() 
    // mockCarRepo.set("001", {name: "Chulalongkorn Car", image: "/img/chula.jpg"})
    // mockCarRepo.set("002", {name: "Rajavithi Car", image: "/img/rajavithi.jpg"})
    // mockCarRepo.set("003", {name: "Thammasat University Car", image: "/img/thammasat.jpg"})
    
    return (
        <main className="text-center text-black p-5">
            <div className="flex flex-row my-5">
            <Image src={carDetail.data.picture}
                alt='Car Picture'
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%] bg-black"/>
            <div className="text-md mx-5 text-left font-mono">
            <div className="text-lg font-semibold">{carDetail.data.car_brand} {carDetail.data.car_model}</div>
            <div>Color: {carDetail.data.color}</div>
            <div>License: {carDetail.data.license}</div>
            <div>Daily Day Rate: {carDetail.data.dayRate}</div>
            </div>
            </div>
            <Link href={`/booking?id=${params.cid}&model=${carDetail.data.car_model}`}>
                <button className="block rounded bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm">
                    Make Booking
                </button>
            </Link>
        </main>
    )
}

// export async function generateStaticParams() {
//     return [{hid:'001'},{hid:'002'},{hid:'003'}]
// }