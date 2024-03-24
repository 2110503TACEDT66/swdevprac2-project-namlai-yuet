'use client'
import { useReducer } from "react";
import Link from "next/link";
import Card from "./Card"

export default function CardPanel(){

    const ratingReducer = (ratingList: Map<string, number>,action: { type: string; hospitalName:string; rating: number }) => {
        switch(action.type){
            case 'set':{
                return new Map(ratingList.set(action.hospitalName,action.rating || 0))
            }
            case 'remove':{
                ratingList.delete(action.hospitalName)
                return new Map(ratingList);
            }
            default: return ratingList;
        }
    }
    const [ratingList, dispatchShow] = useReducer (ratingReducer, new Map())

    /**
     * Mock Data for Demonstration Only
     */
    const mockHospitalRepo = [
        {hid: "001", name: "Chulalongkorn Hospital", image: "/img/chula.jpg"},
        {hid: "002", name: "Rajavithi Hospital", image: "/img/rajavithi.jpg"},
        {hid: "003", name: "Thammasat University Hospital", image: "/img/thammasat.jpg"},
    ]

    return (
        <div>
            <div style={{margin:"20px", display: "flex", flexDirection: "row", flexWrap:"wrap", justifyContent:"space-around", alignContent: "space-around"}}>
            {
                mockHospitalRepo.map((hospitalItem) => (
                    <a href={`/hospital/${hospitalItem.hid}`} className="w-1/5">
                        <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.image}
                        onCompare={(hospital: string, rating: number) => dispatchShow({ type: 'set', hospitalName: hospital, rating: rating })}/>
                    </a>
                    
                ))
            }
            </div>
            {Array.from(ratingList).map(([hospital, rating]) => 
                <div className="text-black" key={hospital} data-testid={hospital} onClick={()=> dispatchShow({type:'remove',hospitalName:hospital,rating})}>
                    {hospital} : {rating}
                </div>)}
        </div>
    );
}