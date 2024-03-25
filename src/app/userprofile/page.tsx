import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking() {
  const session = await getServerSession(authOptions)
  if(!session || !session.user.token) return null

  const profile = await getUserProfile(session.user.token)
  var createdAt = new Date(profile.data.createdAt);

    return(
        <div className="bg-slate-100 justify-center items-center p-4 rounded-lg text-black">
            <div className="text-xl font-semibold text-center">{profile.data.name}</div>
              <table className="table-fixed w-[430px] border-seperate text-md mt-2 p-2">
                <tbody>
                  <tr><td className="font-semibold">Email: </td><td>{profile.data.email}</td></tr>
                  <tr><td className="font-semibold">Tel.:</td><td>{profile.data.tel}</td></tr>
                  <tr><td className="font-semibold">Member Since:</td>
                  <td rowSpan={2}>{createdAt.toString()}</td></tr>
                </tbody>
              </table>
        </div>
    )
}
