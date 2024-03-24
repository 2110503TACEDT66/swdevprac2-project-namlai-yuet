import { ClassNames } from "@emotion/react";
import Link from "next/link";

export default function TopMenuItem ({ title,pageRef } : { title:string, pageRef:string}) {
    return (
        <Link href={pageRef} className='w-32 text-center my-auto text-lg text-white font-sans font-semibold text-center relative group'>
            {title}
            <div className="absolute w-full h-0.5 bg-white/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"/>
        </Link>
    );
}