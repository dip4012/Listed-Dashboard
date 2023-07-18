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
		<div className="p-[40px] flex gap-[40px] justify-center items-start w-screen h-screen min-h-[750px] min-w-[750px] bg-[#f5f5f5] overflow-scroll no-scrollbar max-[1087px]:h-auto">
			<SideNav />
			{children}
		</div>
	) : (
		<Loading />
	)
}
