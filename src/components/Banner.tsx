'use client'
import styles from './banner.module.css'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Banner () {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter();
    const { data:session } = useSession()

    return (
        <div className={styles.banner} onClick={()=>setIndex(index+1)}>
            <Image src={covers[index%4]}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-semibold font-sans text-white'>Vaccine Service Center </h1>
                <h3 className='text-l font-sans text-white'> We're thrilled to open Vaccine Service Center, your trusted destination for vaccinations in Chula City.</h3>
                <h3 className='text-l font-sans text-white'> Stay tuned for updates! #VaccineServiceCenter </h3>
            </div>
            {
                session? <div className='z-30 absolute top-5 right-10 font-sans font-semibold text-white text-lg'>Welcome {session.user?.name}</div>:null
            }
            <button className='bg-white text-red-800 border border-red-800 font-semibold py-2 px-2 m-2 mr-4 rouded z-30 absolute bottom-0 right-0
                hover:bg-red-800 hover:text-white hover:border-transparent'
                onClick={(e) => {e.stopPropagation(); router.push('/hospital')}}>Select Hospital</button>
        </div>
    );
}