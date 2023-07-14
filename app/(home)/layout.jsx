"use client"

import Loading from "@/components/Loading"
import SideNav from "@/components/SideNav"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function HomeLayout({ children }) {
	const { status } = useSession()
	const router = useRouter()
	useEffect(() => {
		if (status === "unauthenticated") {
			void signIn()
		}
	}, [status])

	return status === "authenticated" ? (
		<div className="p-[40px] flex gap-[60px] justify-center items-center h-screen w-screen min-h-[750px]">
			<SideNav />
			{children}
		</div>
	) : (
		<Loading />
	)
}
