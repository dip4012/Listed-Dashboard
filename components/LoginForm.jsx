import SignInCTA from "./SignInCTA"
import { getProviders, signIn } from "next-auth/react"
import { useEffect, useState } from "react"
import CredsLoginForm from "./CredsLoginForm"
import Link from "next/link"

export default function LoginForm() {
	const [providers, setProviders] = useState(null)
	let redirectUrl = process.env.NEXTAUTH_URL

	useEffect(() => {
		const url = new URL(location.href)
		redirectUrl = url.searchParams.get("callbackUrl")
	})

	useEffect(() => {
		const findProviders = async () => {
			const response = await getProviders()
			await setProviders(response)
		}

		findProviders()
	}, [])

	return (
		<section className="flex flex-start flex-col">
			<h1 className="text-black font-Montserrat text-4xl font-bold mb-[5px]">
				Sign In
			</h1>
			<p className="text-black font-Lato text-base font-normal mb-[26px]">
				Sign in to your account
			</p>

			<div className="flex items-stretch justify-center gap-[25px] mb-[25px]">
				{providers &&
					Object.values(providers).map((provider) => (
						<SignInCTA
							key={provider.name}
							source={`/assets/icons/${provider.id}.svg`}
							service={provider.name}
							handleClick={() =>
								signIn(provider.id, {
									callbackUrl: redirectUrl,
								})
							}
						/>
					))}
			</div>
			<CredsLoginForm />
			<div className="text-center font-Lato text-base font-normal">
				<span className="text-[#858585] mr-1">Don&#39;t have an account?</span>
				<Link href="#" className="text-[#346BD4]">
					Register here
				</Link>
			</div>
		</section>
	)
}
