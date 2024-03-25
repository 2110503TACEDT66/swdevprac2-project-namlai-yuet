'use client'
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Box1() {
    const router = useRouter();
    return (
        <div className="w-full flex flex-col justify-center items-center mt-[70px] mb-[70px]">
            <div className="flex flex-col items-center">
                <p className="text-gray-600 font-semibold">SHOPPING TOOLS</p>
                <h1 className="text-5xl text-black font-medium mt-4">FIND YOUR CAR.</h1>
            </div>
            <div className="flex justify-center mt-[80px] items-center">
                <div className="text-center text-black text-2xl mx-[180px] justify-center">
                    <Image src={'/img/findacar.png'} className='h-[120px] w-auto justify-center' alt='logo' width={0} height={0} sizes='100vh'/>
                    <h2 className="mt-[30px]">View Car</h2>
                    <button className='text-lg text-black bg-white border-[1px] border-black font-semibold px-[45px] py-[5px] rounded hover:shadow-lg mt-[40px]'
                    onClick={(e) => {e.stopPropagation(); router.push('/car')}}>Car search</button>
                </div>
                {/* <div className="text-center text-black text-2xl mx-[180px] justify-center">
                    <Image src={'/img/booking.png'} className='h-[120px] w-auto justify-center' alt='logo' width={0} height={0} sizes='100vh'/>
                    <h2 className="mt-[30px]">Booking</h2>
                    <button className='text-lg text-black bg-white border-[1px] border-black font-semibold px-[45px] py-[5px] rounded hover:shadow-lg mt-[40px]'
                    onClick={(e) => {e.stopPropagation(); router.push('/booking')}}>Booking now</button>
                </div> */}
                <div className="text-center text-black text-2xl mx-[180px] justify-center">
                    <Image src={'/img/provider.png'} className='h-[120px] w-auto justify-center' alt='logo' width={0} height={0} sizes='100vh'/>
                    <h2 className="mt-[30px]">Become a Provider</h2>
                    <button className='text-lg text-black bg-white border-[1px] border-black font-semibold px-[45px] py-[5px] rounded hover:shadow-lg mt-[40px]'>Contact</button>
                </div>
            </div>
        </div>
    );
}
