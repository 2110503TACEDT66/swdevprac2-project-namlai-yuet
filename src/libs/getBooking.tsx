export default async function getBooking() {
  const response = await fetch ("https://presentation-day-1-namlai-yuet-b3u3.vercel.app/api/v1/bookings")
  if(!response.ok) {
      throw new Error ("Failed to fetch booking")
  }
  return await response.json()
}