"use client"
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import  { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem } from "@mui/material";
import { Dayjs } from "dayjs";
import { useState } from "react";

export default function DateReserve({onDateChange, onLocationChange}:{onDateChange:Function, onLocationChange:Function}) {
    const [bookingDate, setBookingDate] = useState<Dayjs|null>(null)
    const [location, setLocation] = useState('Bangkok')

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" value={bookingDate} onChange={(value)=>{setBookingDate(value); onDateChange(value)}}/>
            </LocalizationProvider>

            <Select variant="standard" name = "location" id="location" className="h-[2em] w-[200px] font-sans"
            value={location} onChange={(e)=>{setLocation(e.target.value); onLocationChange(e.target.value)}} defaultValue="Bangkok">
                <MenuItem value="Bangkok">Bangkok</MenuItem>
                <MenuItem value="Chiang Mai">Chiang Mai</MenuItem>
                <MenuItem value="Phuket">Phuket</MenuItem>
                <MenuItem value="Hat Yai">Hat Yai</MenuItem>
            </Select>
        </div>
    );
}