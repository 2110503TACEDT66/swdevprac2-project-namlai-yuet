'use client'
import { removeBooking } from "@/redux/features/bookSlice"
import { useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

export default function BookingList() {
    const bookItems = useAppSelector((state) => state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()
    return (
        (bookItems.length !== 0)?<>
        {
            bookItems.map((bookItems) => (
                <div className="bg-slate-200 rounded px-5 py-2 my-2 text-black font-sans" key={bookItems.id}>
                    <div className="text-xl font-semibold">{bookItems.name} {bookItems.surname}</div>
                    <div className="text-md">CitizenId: {bookItems.id}</div>
                    <div className="text-md">Date: {bookItems.bookDate}</div>
                    <div className="text-md">At: {bookItems.hospital} hospital</div>
                    <div className="flex flex-row justify-start">
                        <button className="block rounded bg-white hover:bg-slate-50 bg- px-2 py-2 font-sans font-medium text-black shadow-sm"
                        onClick={() => dispatch(removeBooking(bookItems.id))}>Cancle</button>
                    </div>
                </div>
            ))
        }
        </>:
        <div className="flex flex-row justify-center text-2xl font-semibold font-sans text-gray-300 p-8">No Vaccine Booking</div>

    )
}