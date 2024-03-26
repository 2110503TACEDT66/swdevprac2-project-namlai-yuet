import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import styles from './userprofile.module.css'

export default async function Booking() {
  const session = await getServerSession(authOptions)
  if(!session || !session.user.token) return null

  const profile = await getUserProfile(session.user.token)
  var createdAt = new Date(profile.data.createdAt);

    return(
      <main className='bg-[#21333c]'>
        <div className="h-[90px] bg-gradient-to-t from-[#21333c] to-black"></div>
        <div>
            <div className={styles.outerbox}>
              <div className={styles.innerbox}>
                <h2 className='text-2xl mb-[60px] mt-[30px] uppercase tracking-[2px]'>User Information</h2>

                <p className={styles.forPtext}>User:</p>
                <div className={styles.fordatatext}>{profile.data.name}</div>

                <p className={styles.forPtext}>Email:</p>
                <div className={styles.fordatatext}>{profile.data.email}</div>

                <p className={styles.forPtext}>Tel.:</p>
                <div className={styles.fordatatext}>{profile.data.tel}</div>

                <p className={styles.forPtext}>Member Since:</p>
                <div className={styles.fordatatext}>{createdAt.toString()}</div>
              </div>
            </div>
        </div>
        <div className='h-[12vh] bg-[#21333c]'></div>
      </main>
    )
}
