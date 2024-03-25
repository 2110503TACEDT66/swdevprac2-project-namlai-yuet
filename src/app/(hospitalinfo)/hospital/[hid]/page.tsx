import Image from "next/image"
import getHospital from "@/libs/getCar"

export default async function HospitalDetailPage ({params}: {params: {hid:string}}) {
    const hospitalDetail = await getHospital(params.hid)
    /**
     * Mock Data for Demonstration Only
     */
    // const mockHospitalRepo = new Map() 
    // mockHospitalRepo.set("001", {name: "Chulalongkorn Hospital", image: "/img/chula.jpg"})
    // mockHospitalRepo.set("002", {name: "Rajavithi Hospital", image: "/img/rajavithi.jpg"})
    // mockHospitalRepo.set("003", {name: "Thammasat University Hospital", image: "/img/thammasat.jpg"})
    
    return (
        <main className="text-center text-black p-5">
            <div className="flex flex-row my-5">
            <Image src={hospitalDetail.data.picture}
                alt='Hospital Picture'
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%] bg-black"/>
            <div className="text-md mx-5 text-left font-mono">
            <div className="text-lg font-semibold">{hospitalDetail.data.name}</div>
            <div>Address: {hospitalDetail.data.address}</div>
            <div>Tel: {hospitalDetail.data.tel}</div>
            </div>
            </div>
        </main>
    )
}

// export async function generateStaticParams() {
//     return [{hid:'001'},{hid:'002'},{hid:'003'}]
// }