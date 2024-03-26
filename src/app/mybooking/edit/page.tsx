'use client'
import DateReserve from "@/components/DateReserve";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { useSession } from "next-auth/react";

export default function EditPage() {
    const urlParams = useSearchParams();
    const bookingId = urlParams.get("id");
    const carModel = urlParams.get("carModel");
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
          `https://presentation-day-1-namlai-yuet-b3u3.vercel.app/api/v1/bookings/${bookingId}`,
          {
            method: "PUT",
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
  
    return (
      <main className="bg-red-900 m-5 p-5 pt-[100px]">
        <form onSubmit={handleSubmit}>
          <div className="w-fit space-y-2">
            <div className="text-md text-left text-gray-600">
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
            <div className="text-md text-left text-gray-600">
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
            className="block rounded-md bg-slate-700 hover:bg-slate-900 px-3 py-3 text-white shadow-sm">
            Submit
          </button>
        </form>
      </main>
    );
}