'use client'
import DateReserve from "@/components/DateReserve";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { useSession } from "next-auth/react";

export default function Booking() {
  const urlParams = useSearchParams();
  const cid = urlParams.get("id");
  const carModel = urlParams.get("model");
  const [pickupDate, setPickupDate] = useState<Dayjs | null>(null);
  const [pickupLocation, setPickupLocation] = useState<string>("Chula");
  const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
  const [returnLocation, setReturnLocation] = useState<string>("Chula");
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
        `http://localhost:5000/api/v1/cars/${cid}/bookings`,
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
          Book Now
        </button>
      </form>
    </main>
  );
}