"use client"
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import  { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem } from "@mui/material";
import { Dayjs } from "dayjs";
import { useState } from "react";

export default function DateReserve({onDateChange, onHospitalChange}:{onDateChange:Function, onHospitalChange:Function}) {
    const [bookingDate, setBookingDate] = useState<Dayjs|null>(null)
    const [hospital, setHospital] = useState('Chula')

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" value={bookingDate} onChange={(value)=>{setBookingDate(value); onDateChange(value)}}/>
            </LocalizationProvider>

            <Select variant="standard" name = "hospital" id="hospital" className="h-[2em] w-[200px] font-sans"
            value={hospital} onChange={(e)=>{setHospital(e.target.value); onHospitalChange(e.target.value)}} defaultValue="Chula">
                <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
                <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
                <MenuItem value="Thammasart">Thammasat University Hospital</MenuItem>
            </Select>
        </div>
    );
}