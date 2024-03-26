import styles from './register.module.css'

export default async function register() {
    const registerUser = async (addInformation:FormData) => {
        "use server"
        const username = addInformation.get('name')
        const password = addInformation.get('password')
        const email = addInformation.get('email')
        const telephone = addInformation.get('tel')
        try {
            const response = await fetch("https://presentation-day-1-namlai-yuet-b3u3.vercel.app/api/v1/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify ({
                    name: username,
                    email: email,
                    password: password,
                    tel: telephone,
                    role: 'provider'
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
                <form action={registerUser} className={styles.innerform}>
                    <h2 className='text-2xl mb-[60px] mt-[30px] uppercase tracking-[2px]'> Provider Registration Form</h2>
                        <label htmlFor="name" className={styles.forlabel}>
                            Username:
                        </label>
                        <input type="text" required id="name" name="name" placeholder="Username" className={styles.forinput}/>
        
                        <label htmlFor="email" className={styles.forlabel}>
                            Email:
                        </label>
                        <input className={styles.forinput} type="text" required id="email" name="email" placeholder="Email"/>
        
                        <label htmlFor="password" className={styles.forlabel}>
                            Password:
                        </label>
                        <input className={styles.forinput} type="text" required id="password" name="password" placeholder="Password"/>
        
                        <label htmlFor="tel" className={styles.forlabel}>
                            Tel.:
                        </label>
                        <input className={styles.forinput} type="text" required id="tel" name="tel" placeholder="Telephone Number"/>
        
                        <button type="submit" className={styles.btn}>Submit Registration</button>
                </form>
            </div>
            <div className='h-[12vh] bg-[#21333c]'>
            </div>
        </main>
    )
}