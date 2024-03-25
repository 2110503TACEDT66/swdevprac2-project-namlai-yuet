'use client'
import styles from './banner.module.css'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Banner () {
    const covers = ['/img/Cars_Banner.jpg']
    const router = useRouter();
    const { data:session } = useSession()

    return (
        <div className={styles.banner}>
            <Image src={covers[0]}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/>
            <div className='sticky top-[350px] left-[200px] z-20 w-[800px] h-[200px]'>
                <h1 className='text-6xl font-semibold font-sans text-white pb-[20px] drop-shadow-[0_2px_10px_rgba(0, 0, 0, 0.95)]'>Car Rental</h1>
                <h3 className='text-xl font-sans text-white'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a ligula tincidunt, fringilla sapien nec,</h3>
                <button className='text-cyan-100 bg-red-600 font-semibold px-[60px] py-[12px] rounded z-30 absolute hover:bg-red-700 hover:text-white hover:border-transparent mt-[50px]'
                onClick={(e) => {e.stopPropagation(); router.push('/car')}}>VIEW OFFERS</button>
            </div>
        </div>
    );
}