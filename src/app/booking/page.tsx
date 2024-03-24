'use client'
import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import { useState } from "react";
import { Dayjs } from "dayjs";


export default  function Booking() {
  // const session = await getServerSession(authOptions)
  // if(!session || !session.user.token) return null

  // const profile = await getUserProfile(session.user.token)
  // var createdAt = new Date(profile.data.createdAt);
  // const urlParams = useSearchParams()
  // const name = urlParams.get('name')
  // const lastname = urlParams.get('lastname')

  const dispatch = useDispatch<AppDispatch>()

  const makeBooking = () => {
    if (name && lastname && citizenId && appointment && hospital) {
      const item: BookingItem = {
        name: name,
        surname: lastname,
        id: citizenId,
        bookDate: appointment.toString(),
        hospital: hospital,
      }
      dispatch(addBooking(item))
    }
  }

  const [name, setName] = useState<string|null>(null)
  const [lastname, setLastname] = useState<string|null>(null)
  const [citizenId, setCitizenId] = useState<string|null>(null)
  const [appointment, setAppointmentDate] = useState<Dayjs|null>(null)
  const [hospital, setHospital] = useState<string|null>('Chula')


  return (
    <main className="w-full flex flex-col justify-center items-center space-y-4 text-black font-sans">
      <div className="bg-white w-[40%] flex flex-col justify-center items-center space-y-4 m-10 p-4 rounded-lg shadow-lg">
        <div className="text-2xl font-semibold pt-2">Vaccine Booking</div>
        {/* <div className="bg-slate-100 justify-center items-center p-4 rounded-lg">
          <div className="text-xl font-semibold text-center">{profile.data.name}</div>
          <table className="table-fixed w-[430px] border-seperate text-md mt-2 p-2">
            <tbody>
              <tr><td className="font-semibold">Email: </td><td>{profile.data.email}</td></tr>
              <tr><td className="font-semibold">Tel.:</td><td>{profile.data.tel}</td></tr>
              <tr><td className="font-semibold">Member Since:</td>
              <td rowSpan={2}>{createdAt.toString()}</td></tr>
            </tbody>
          </table>
        </div> */}
        <div className="w-full max-w-md space-y-4">
          <TextField name="Name" label="Name" variant="standard" fullWidth onChange={(e) => setName(e.target.value)} />
          <TextField name="Lastname" label="Lastname" variant="standard" fullWidth onChange={(e) => setLastname(e.target.value)}/>
          <TextField name="Citizen ID" label="Citizen ID" variant="standard" fullWidth onChange={(e) => setCitizenId(e.target.value)}/>
        </div>
        <div className="w-full max-w-md">
          <DateReserve onDateChange={(value:Dayjs) => {setAppointmentDate(value)}} onHospitalChange={(value:string) => {setHospital(value)}}/>
        </div>
        <button className="block rounded-md bg-red-700 hover:bg-red-800 px-3 py-2 shadow-sm text-white" name="Book Vaccine" 
        onClick={(e) => {e.preventDefault(); makeBooking();}}>Book Vaccine</button>
        </div>
    </main>
  );
}
