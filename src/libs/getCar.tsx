export default async function getCar(id:string) {
    const response = await fetch (`https://presentation-day-1-namlai-yuet-b3u3.vercel.app/api/v1/cars/${id}`)
    if(!response.ok) {
        throw new Error ("Failed to fetch cars")
    }
    return await response.json()
}