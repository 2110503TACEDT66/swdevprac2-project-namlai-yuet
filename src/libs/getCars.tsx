export default async function getCars() {
    const response = await fetch ("https://presentation-day-1-namlai-yuet-b3u3.vercel.app/api/v1/cars")
    if(!response.ok) {
        throw new Error ("Failed to fetch cars")
    }
    return await response.json()
}