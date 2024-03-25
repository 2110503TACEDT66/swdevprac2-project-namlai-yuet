import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material';

export default async function TopMenu() {
    const session = await getServerSession(authOptions)
    return (
        <div className='absolute top-[15px] left-[125px] right-[125px] z-30 h-14 bg-red-800/[.0] flex flex-row justify-end text-white text-md font-sans font-semibold'>
            <div className='flex flex-row absolute left-5 items-center h-full px-2'>
                <a href="/"><Image src={'/img/logo.png'} className='h-14 w-auto pr-[40px]' alt='logo' width={0} height={0} sizes='100vh'/></a>
                
            </div>
            {
                    session? 
                    <div className=''>
                        <TopMenuItem title='Sign-out' pageRef='/api/auth/logout'/>
                        <TopMenuItem title='User' pageRef='/api/auth/me'/>
                    </div>
                    :
                    <>
                        <TopMenuItem title='Register' pageRef='/api/auth/register'/>
                        <TopMenuItem title='Log-in' pageRef='/api/auth/login'/>
                    </>
            }
            <TopMenuItem title='My Booking' pageRef='/mybooking'/>
            <TopMenuItem title='Search' pageRef='/booking'/>
            
        </div>
    );
}