"use client"

import Loading from "@/components/Loading"
import LoginForm from "@/components/LoginForm"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Login() {
	const { status } = useSession()
	const router = useRouter()

	useEffect(() => {
		if (status === "authenticated") {
			console.log("hey there!!")
			router.back()
		}
	}, [status, router])

	return status === "unauthenticated" ? (
		<div className="flex justify-center items-center flex-col md:flex-row">
			<section className="h-screen w-full bg-black flex items-center justify-center md:w-[588px]">
				<p>
					<span className="text-white font-bold text-7xl font-Mostserrat">
						Board.
					</span>
				</p>
			</section>

			<section className="h-screen w-[1440px] bg-[#f5f5f5] flex items-center justify-center">
				<LoginForm />
			</section>
		</div>
	) : (
		<Loading />
	)
}
