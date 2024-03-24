import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';
import { useState } from 'react';


export default function Card ({hospitalName,imgSrc,onCompare} : {hospitalName:string,imgSrc:string,onCompare?:Function}) {
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
                {hospitalName}
                <div>
                {onCompare? <Rating
                    size='large'
                    data-testid={hospitalName + ' Rating'} 
                    name={hospitalName + ' Rating'} 
                    id={hospitalName + ' Rating'} 
                    value={value} 
                    onChange={(e, newValue) => {
                      e.stopPropagation();
                      setValue(newValue || 0);
                      onCompare(hospitalName, newValue);
                    }}
                />:''}

                </div>
            </div>
        </InteractiveCard>
    );
}
