"use client"

import SignInCTA from "./SignInCTA"
import { getProviders, signIn } from "next-auth/react"
import { useEffect, useState } from "react"
import CredsLoginForm from "./CredsLoginForm"
import Link from "next/link"

export default function LoginForm() {
	const [providers, setProviders] = useState(null)

	useEffect(() => {
		const findProviders = async () => {
			const response = await getProviders()
			setProviders(response)
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
							source={`/assets/icons/${provider.name}.svg`}
							service={provider.name}
							handleClick={() => signIn(provider.id)}
						/>
					))}
			</div>
			<CredsLoginForm />
			<div className="text-center font-Lato text-base font-normal">
				<span className="text-[#858585] mr-1">Don't have an account?</span>
				<Link href="#" className="text-[#346BD4]">
					Register here
				</Link>
			</div>
		</section>
	)
}
