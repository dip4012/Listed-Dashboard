"use client"

import Loading from "@/components/Loading"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Login() {
	const { data: session, status } = useSession()
	const router = useRouter()

	useEffect(() => {
		if (status === "unauthenticated") {
			void signIn()
		} else if (status === "authenticated") {
			void router.push("/dashboard")
		}
	}, [status, router])

	return <Loading />
}
