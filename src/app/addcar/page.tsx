'use client'
import styles from './register.module.css'
import { useSession } from 'next-auth/react'

export default async function Addcar() {
    const addCar = async (addInformation:FormData) => {
        const car_brand = addInformation.get('carBrand')
        const car_model = addInformation.get('carModel')
        const color = addInformation.get('color')
        const license = addInformation.get('license')
        const picture = addInformation.get('picture')
        const dayRate = addInformation.get('dayRate')
        const { data: session } = useSession();
        try {
            const response = await fetch("http://localhost:5000/api/v1/cars", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                    authorization: `Bearer ${session.user.token}`,
                },
                body: JSON.stringify ({
                    car_brand: car_brand,
                    car_model: car_model,
                    color: color,
                    license: license,
                    picture: picture,
                    dayRate: dayRate
                }),
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <main className='bg-[#21333c]'>
            <div className="h-[90px] bg-gradient-to-t from-[#21333c] to-black"></div>
            <div className={styles.registerform}>
                <form action={addCar} className={styles.innerform}>
                    <h2 className='text-2xl mb-[20px] mt-[0px] uppercase tracking-[2px]'>Add Your Car</h2>
                        <label htmlFor="carBrand" className={styles.forlabel}>
                            Car Brand:
                        </label>
                        <input type="text" required id="carBrand" name="carBrand" placeholder="Car Brand" className={styles.forinput}/>
        
                        <label htmlFor="carModel" className={styles.forlabel}>
                            Car Model:
                        </label>
                        <input className={styles.forinput} type="text" required id="carModel" name="carModel" placeholder="Car Model"/>
        
                        <label htmlFor="color" className={styles.forlabel}>
                            Color:
                        </label>
                        <input className={styles.forinput} type="text" required id="color" name="color" placeholder="Color"/>
        
                        <label htmlFor="license" className={styles.forlabel}>
                            License:
                        </label>
                        <input className={styles.forinput} type="text" required id="license" name="license" placeholder="License Plate Number"/>

                        <label htmlFor="picture" className={styles.forlabel}>
                            Picture:
                        </label>
                        <input className={styles.forinput} type="text" required id="picture" name="picture" placeholder="URL"/>

                        <label htmlFor="dayRate" className={styles.forlabel}>
                            Day Rate:
                        </label>
                        <input className={styles.forinput} type="text" required id="dayRate" name="dayRate" placeholder="Daily Rate"/>
                        <button type="submit" className={styles.btn}>Submit Registration</button>
                </form>
            </div>
            <div className='h-[12vh] bg-[#21333c]'>
            </div>
        </main>
    )
}