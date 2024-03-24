import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material';

export default async function TopMenu() {
    const session = await getServerSession(authOptions)
    return (
        <div className='fixed top-0 left-0 right-0 z-30 h-14 bg-red-800 flex flex-row justify-end'>
            <div className='flex flex-row absolute left-5 items-center h-full px-2 text-white text-md font-sans font-semibold'>
                {
                    session? <Link href ="/api/auth/signout"><div className='text-white text-lg font-sans font-semibold'>Sign-Out</div></Link>
                    : <Link href ="/api/auth/signin"><div className='text-white text-lg font-sans font-semibold'>Sign-in</div></Link>
                }
                <TopMenuItem title='My Booking' pageRef='/mybooking'/>
            </div>

            <TopMenuItem title='Booking' pageRef='/booking'/>
            <a href="/"><Image src={'/img/logo.jpg'} className='h-[100%] w-auto' alt='logo' width={0} height={0} sizes='100vh'/></a>
        </div>
    );
}