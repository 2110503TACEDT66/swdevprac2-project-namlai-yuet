export default async function getUserProfile(token:string) {
    const response = await fetch("https://presentation-day-1-namlai-yuet-b3u3.vercel.app/api/v1/auth/me", {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
        }
    })
    if(!response.ok) {
        throw new Error("Failed to fetch user profile")
    }
    return await response.json()
}