import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { useState } from 'react';


export default function Card ({carBrand,carModel,dayRate,imgSrc} : {carBrand:string,carModel:string,dayRate:string,imgSrc:string}) {
    const [value, setValue] = useState(5);
    return  (
        <InteractiveCard>
             <div className='w-full h-[70%] relative rounded-t-lg'>
            <Image src={imgSrc}
                alt = 'Picture'
                fill = {true}
                className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[15px] text-medium text-black font-medium text-center rounded-b-lg'>
                <h1 className='font-semibold'>{carBrand} | {carModel}</h1>
                <h2 className='text-gray-500'>Daily Rate: {dayRate} Bath</h2>
            </div>
        </InteractiveCard>
    );
}
