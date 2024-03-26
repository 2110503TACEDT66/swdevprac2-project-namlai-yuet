'use client'
import DateReserve from "@/components/DateReserve";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { useSession } from "next-auth/react";
import getBooking from "@/libs/getBooking";
import getCar from "@/libs/getCar";
import Image from "next/image";

export default function Booking() {
  const urlParams = useSearchParams();
  const cid = urlParams.get("id");
  const carModel = urlParams.get("model");
  const [pickupDate, setPickupDate] = useState<Dayjs | null>(null);
  const [pickupLocation, setPickupLocation] = useState<string>("Bangkok");
  const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
  const [returnLocation, setReturnLocation] = useState<string>("Bangkok");
  const [formData, setFormData] = useState({
    carModel: carModel,
    pickupDate: "",
    pickupLocation: "",
    returnDate: "",
    returnLocation: "",
  });
  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://presentation-day-1-namlai-yuet-b3u3.vercel.app/api/v1/cars/${cid}/bookings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${session.user.token}`,
          },
          body: JSON.stringify({
            ...formData,
            carModel: carModel,
            pickupDate: pickupDate ? pickupDate.format("YYYY/MM/DD") : "",
            returnDate: returnDate ? returnDate.format("YYYY/MM/DD") : "",
            pickupLocation: pickupLocation,
            returnLocation: returnLocation
          }),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  // const carDetail = await getCar(cid)

  return (
    <main className="flex flex-col bg-gradient-to-t from-[#21333c] to-black">
      <div className="bg-gradient-to-t from-[#21333c] to-blackfixed w-[100vw] h-[100vh]">
      </div>
      {/* <Image src={carDetail.data.picture}
                            alt='Car Picture'
                            width={0} height={0} sizes="100vw"
                            className="absolute z-0 object-bottom
                            w-[100vw] h-[100%] object-cover bg-transparent mt-[85px]"/> */}
      <form onSubmit={handleSubmit} className="fixed translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] mt-[42.5px] z-10 p-[15px] rounded-xl backdrop-blur bg-gray-500 bg-opacity-30
        flex flex-col justify-center">
        <div className="text-2xl text-center mb-[10px] text-medium">Reservation</div>
        <div className="w-fit space-y-2">
          <div className="text-md text-left text-gray-200">
            Pick-Up Date and Location
          </div>
          <DateReserve
            onDateChange={(value: Dayjs) => {
              setPickupDate(value);
            }}
            onLocationChange={(value: string) => {
              setPickupLocation(value);
            }}
          />
          <div className="text-md text-left text-gray-200">
            Return Date and Location
          </div>
          <DateReserve
            onDateChange={(value: Dayjs) => {
              setReturnDate(value);
            }}
            onLocationChange={(value: string) => {
              setReturnLocation(value);
            }}
          />
        </div>
        <button
          type="submit"
          className="block rounded-md bg-slate-700 hover:bg-slate-900 px-3 py-3 text-white shadow-sm mt-5 duration-300"
          onClick={async() => {
            // const res = await fetch("https://presentation-day-1-namlai-yuet-b3u3.vercel.app/api/v1/bookings",{
            //         method: 'GET',
            //         headers: {
            //             'Content-Type': 'application/json',
            //             authorization: `Bearer ${session?.user.token}`
            //         }
            //     });
            // const resrd = await res
            // console.log(resrd)
            // alert(resrd.count)
            alert("Booking")
          }}>
          Book Now
        </button>
      </form>
    </main>
  );
}