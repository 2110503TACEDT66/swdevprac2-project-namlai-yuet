import Image from "next/image"
import getCar from "@/libs/getCar"
import Link from "next/link"
import HrBar from "@/components/hrBar"

export default async function CarDetailPage ({params}: {params: {cid:string}}) {
    const carDetail = await getCar(params.cid)
    /**
     * Mock Data for Demonstration Only
     */
    // const mockCarRepo = new Map() 
    // mockCarRepo.set("001", {name: "Chulalongkorn Car", image: "/img/chula.jpg"})
    // mockCarRepo.set("002", {name: "Rajavithi Car", image: "/img/rajavithi.jpg"})
    // mockCarRepo.set("003", {name: "Thammasat University Car", image: "/img/thammasat.jpg"})

    // background
    // bg-gradient-to-t from-[#21333c] to-black
    
    return (
        <main className="text-center text-white">

            <div className="relative w-[100vw] h-[100vh] bg-gradient-to-t from-[#21333c] to-black pt-[85px]">
                <Image src={carDetail.data.picture}
                            alt='Car Picture'
                            width={0} height={0} sizes="100vw"
                            className="absolute z-0 object-bottom
                            w-[100vw] h-[100%] object-cover bg-transparent"/>
                {/* <div className="w-[50%] content-center z-10">
                    <div className=" justify-center flex flex-row w-[100%] h-[100%]">
                        <Image src={carDetail.data.picture}
                            alt='Car Picture'
                            width={0} height={0} sizes="100vw"
                            className="rounded-lg w-[80%] h-[60%] object-cover bg-black shadow-lg hover:shadow-2xl shadow-slate-700 hover:shadow-slate-700 duration-500"/>
                    </div>
                </div> */}
                <div className="fixed flex flex-col justify-center text-right items-end  z-10 backdrop-blur bg-gray-500 bg-opacity-30
                    bottom-0 left-0 right-0 top-auto p-[10px]
                    sm:right-0 sm:bottom-0 sm:top-[85px] sm:left-[50%] sm:p-[20px]
                    lg:left-[70%] lg:right-0 lg:bottom-0 lg:top-[85px] pr-[20px] gap-y-5">
                    <div className="text-3xl font-semibold text-white ">{carDetail.data.car_brand} {carDetail.data.car_model}</div>
                    <hr className="w-[100%]"/>
                    <div className="text-xl text-white">Color: {carDetail.data.color}</div>
                    <div className="text-xl text-white">License: {carDetail.data.license}</div>
                    <div className="text-xl text-white">Daily Day Rate: {carDetail.data.dayRate}</div>
                    <Link href={`/booking?id=${params.cid}&model=${carDetail.data.car_model}`}>
                        <button className="block rounded-xl bg-gray-800 hover:bg-gray-600 px-4 py-2 text-white shadow-sm text-xl duration-500
                            hover:px-5 hover:py-3">
                            Make Booking
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

// export async function generateStaticParams() {
//     return [{hid:'001'},{hid:'002'},{hid:'003'}]
// }