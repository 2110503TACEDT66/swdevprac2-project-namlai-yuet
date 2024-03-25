
export default async function register() {
    const registerUser = async (addInformation:FormData) => {
        "use server"
        const username = addInformation.get('name')
        const password = addInformation.get('password')
        const email = addInformation.get('email')
        const telephone = addInformation.get('tel')
        try {
            const response = await fetch("http://localhost:5000/api/v1/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify ({
                    name: username,
                    email: email,
                    password: password,
                    tel: telephone,
                    role: 'user'
                }),
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <main className="bg-red-900 m-5 p-5 pt-[100px]">
            <form action={registerUser}>
                <div>
                    <label htmlFor="name" className="w-auto pr-4">
                        Username:
                    </label>
                    <input type="text" required id="name" name="name" placeholder="username"/>
                </div>
                <div>
                    <label htmlFor="email" className="w-auto pr-4">
                        Email:
                    </label>
                    <input type="text" required id="email" name="email" placeholder="email"/>
                </div>
                <div>
                    <label htmlFor="password" className="w-auto pr-4">
                        Password:
                    </label>
                    <input type="text" required id="password" name="password" placeholder="password"/>
                </div>
                <div>
                    <label htmlFor="tel" className="w-auto pr-4">
                        Tel.:
                    </label>
                    <input type="text" required id="tel" name="tel" placeholder="telephone number"/>
                </div>
                <button type="submit" className="block rounded-md bg-slate-700 hover:bg-slate-900 px-3 py-3 text-white shadow-sm"> submit </button>
            </form>
        </main>
    )
}