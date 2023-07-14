import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SideNav() {
	const pathname = usePathname()

	return (
		<nav className="bg-black rounded-[30px] w-[260px] h-full  px-[50px] py-[60px] flex flex-col justify-start items-start">
			<p className="text-white font-Montserrat text-4xl font-bold mb-[60px]">
				Board.
			</p>

			<div className="flex-1 flex flex-col gap-[40px] justify-start items-start">
				<Link
					href="/dashboard"
					className="text-white font-Montserrat text-lg font-normal flex justify-start items-center gap-[20px]"
				>
					<Image
						src="/assets/icons/dashboard_icon.svg"
						width={18}
						height={18}
						alt="dashboard icon"
					/>
					<p className={pathname === "/dashboard" ? "font-bold" : undefined}>
						Dashboard
					</p>
				</Link>
				<Link
					href="/transactions"
					className="text-white font-Montserrat text-lg font-normal flex justify-start items-center gap-[20px]"
				>
					<Image
						src="/assets/icons/transaction_icon.svg"
						width={18}
						height={18}
						alt="transaction icon"
					/>
					<p className={pathname === "/transactions" ? "font-bold" : undefined}>
						Transactions
					</p>
				</Link>
				<Link
					href="/schedules"
					className="text-white font-Montserrat text-lg font-normal flex justify-start items-center gap-[20px]"
				>
					<Image
						src="/assets/icons/schedule_icon.svg"
						width={18}
						height={18}
						alt="schedule icon"
					/>
					<p className={pathname === "/schedules" ? "font-bold" : undefined}>
						Schedules
					</p>
				</Link>
				<Link
					href="/users"
					className="text-white font-Montserrat text-lg font-normal flex justify-start items-center gap-[20px]"
				>
					<Image
						src="/assets/icons/user_icon.svg"
						width={18}
						height={18}
						alt="user icon"
					/>
					<p className={pathname === "/users" ? "font-bold" : undefined}>Users</p>
				</Link>
				<Link
					href="/settings"
					className="text-white font-Montserrat text-lg font-normal flex justify-start items-center gap-[20px]"
				>
					<Image
						src="/assets/icons/setting_icon.svg"
						width={18}
						height={18}
						alt="setting icon"
					/>
					<p className={pathname === "/settings" ? "font-bold" : undefined}>
						Settings
					</p>
				</Link>
			</div>

			<div className="flex flex-col gap-[20px]">
				<Link href="#" className="text-white font-Montserrat text-sm font-normal">
					Help
				</Link>
				<Link href="#" className="text-white font-Montserrat text-sm font-normal">
					Contact Us
				</Link>
			</div>
		</nav>
	)
}
