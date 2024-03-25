import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { useState } from 'react';


export default function Card ({carName,imgSrc} : {carName:string,imgSrc:string}) {
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
                {carName}
            </div>
        </InteractiveCard>
    );
}
