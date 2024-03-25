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
                <div className="bg-slate-200 rounded px-5 py-2 my-2 text-black font-sans" key={bookItems._id}>
                    <div className="text-xl font-semibold">{bookItems.user}</div>
                    <div className="text-md">Pick-Up Date: {bookItems.PickUpDate}</div>
                    <div className="text-md">Drop-Off Date: {bookItems.DropOffDate} hospital</div>
                    <div className="flex flex-row justify-start">
                        <button className="block rounded bg-white hover:bg-slate-50 bg- px-2 py-2 font-sans font-medium text-black shadow-sm"
                        onClick={() => dispatch(removeBooking(bookItems._id))}>Cancle</button>
                    </div>
                </div>
            ))
        }
        </>:
        <div className="flex flex-row justify-center text-2xl font-semibold font-sans text-gray-300 p-8">No Car Booking</div>

    )
}