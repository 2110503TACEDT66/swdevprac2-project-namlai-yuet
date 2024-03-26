'use client'
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Link from "next/link";

export default function BookingList() {

    const [bookings, setBookings] = useState<BookingItem[]>([]);
    const {data:session} = useSession()
      useEffect(() => {
        const fetchBookings = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/v1/bookings",{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${session?.user.token}`
                    }
                });
                if (res.ok) {
                    const result = await res.json();
                    console.log(result.data);
                    setBookings(result.data);
                } else {
                    console.error("Failed to fetch bookings:", res.statusText);
                }
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        };
          fetchBookings();
        }, []);
        const deleteBooking = async (id: string) => {
            try {
                const res = await fetch(`http://localhost:5000/api/v1/bookings/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${session?.user?.token}`
                    }
                });
                if (res.ok) {
                    setBookings(prevBookings => prevBookings.filter(item => item._id !== id));
                } else {
                    console.error("Failed to delete booking:", res.statusText);
                }
            } catch (error) {
                console.error("Error deleting booking:", error);
            }
        };

    if (!session) return null;

    if (bookings.length === 0) {
        return <div className="flex flex-row justify-center text-2xl font-semibold font-sans text-gray-300 p-8">No Car Booking</div>
    
    }
    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-3 mt-10 text-black">
                {
                    (session.user.role !== 'admin')?bookings.map(booking =>(
                        <div key={booking._id}>
                            <h1>{booking.carModel}</h1>
                            
                            <button onClick={() => deleteBooking(booking._id)} className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-3 text-white shadow-sm">
                                Remove Booking
                            </button>
                            <Link href={'/mybooking/edit/' + booking._id}>
                                Edit
                            </Link>
                        </div>
                    )): ""
                }
            </div>
        </div>
    );
}