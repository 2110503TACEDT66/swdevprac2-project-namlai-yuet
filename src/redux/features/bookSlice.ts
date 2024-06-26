import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type BookState = {
    bookItems: BookingItem[]
}
const initialState: BookState = {bookItems:[]}

export const bookSlice = createSlice ({
    name: "bookItems",
    initialState,
    reducers: {
        addBooking: (state, action: PayloadAction<BookingItem>) => {
            const checkingId = state.bookItems.filter(obj => {
                return ((obj._id !== action.payload._id))
            })
            checkingId.push(action.payload)
            state.bookItems = checkingId
        },
        removeBooking: (state, action: PayloadAction<string>) => {
            const remainItems = state.bookItems.filter(obj => {
                return ((obj._id !== action.payload))
            })
            state.bookItems = remainItems
        }
    }
})
export const { addBooking, removeBooking } = bookSlice.actions
export default bookSlice.reducer