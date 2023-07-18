import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SideNav() {
	const pathname = usePathname()

	return (
		<nav className="bg-black rounded-[30px] w-[260px] h-full px-[50px] py-[60px] flex flex-col justify-start items-center max-[1378px]:w-[118px] max-[1378px]:p-auto">
			<p className="text-white font-Montserrat text-4xl font-bold mb-[60px] w-full">
				<span className="max-[1378px]:hidden">Board.</span>
				<span className="min-[1379px]:hidden">B.</span>
			</p>

			<div className="flex-1 flex flex-col gap-[40px] justify-start items-center w-full">
				<Link
					href="/dashboard"
					className="text-white font-Montserrat text-lg font-normal flex justify-start items-center gap-[20px] w-full"
				>
					<Image
						src="/assets/icons/dashboard_icon.svg"
						width={18}
						height={18}
						alt="dashboard icon"
					/>
					<p
						className={`${
							pathname === "/dashboard" ? "font-bold" : undefined
						} max-[1378px]:hidden`}
					>
						Dashboard
					</p>
				</Link>
				<Link
					href="/transactions"
					className="text-white font-Montserrat text-lg font-normal flex justify-start items-center gap-[20px] w-full"
				>
					<Image
						src="/assets/icons/transaction_icon.svg"
						width={18}
						height={18}
						alt="transaction icon"
					/>
					<p
						className={`${
							pathname === "/transactions" ? "font-bold" : undefined
						} max-[1378px]:hidden`}
					>
						Transactions
					</p>
				</Link>
				<Link
					href="/schedules"
					className="text-white font-Montserrat text-lg font-normal flex justify-start items-center gap-[20px] w-full"
				>
					<Image
						src="/assets/icons/schedule_icon.svg"
						width={18}
						height={18}
						alt="schedule icon"
					/>
					<p
						className={`${
							pathname === "/schedules" ? "font-bold" : undefined
						} max-[1378px]:hidden`}
					>
						Schedules
					</p>
				</Link>
				<Link
					href="/users"
					className="text-white font-Montserrat text-lg font-normal flex justify-start items-center gap-[20px] w-full"
				>
					<Image
						src="/assets/icons/user_icon.svg"
						width={18}
						height={18}
						alt="user icon"
					/>
					<p
						className={`${
							pathname === "/users" ? "font-bold" : undefined
						} max-[1378px]:hidden`}
					>
						Users
					</p>
				</Link>
				<Link
					href="/settings"
					className="text-white font-Montserrat text-lg font-normal flex justify-start items-center gap-[20px] w-full"
				>
					<Image
						src="/assets/icons/setting_icon.svg"
						width={18}
						height={18}
						alt="setting icon"
					/>
					<p
						className={`${
							pathname === "/settings" ? "font-bold" : undefined
						} max-[1378px]:hidden`}
					>
						Settings
					</p>
				</Link>
			</div>

			<div className="flex flex-col gap-[20px] items-center w-full">
				<Link
					href="#"
					className="text-white font-Montserrat text-sm font-normal w-full"
				>
					<p
						className={`${
							pathname === "/help" ? "font-bold" : undefined
						} max-[1378px]:hidden`}
					>
						Help
					</p>
					<Image
						src="/assets/icons/help_icon.svg"
						width={18}
						height={18}
						alt="help icon"
						className="min-[1378px]:hidden"
					/>
				</Link>
				<Link
					href="#"
					className="text-white font-Montserrat text-sm font-normal w-full"
				>
					<p
						className={`${
							pathname === "/contact_us" ? "font-bold" : undefined
						} max-[1378px]:hidden`}
					>
						Contact Us
					</p>
					<Image
						src="/assets/icons/contact_icon.svg"
						width={18}
						height={18}
						alt="contact icon"
						className="min-[1378px]:hidden"
					/>
				</Link>
			</div>
		</nav>
	)
}
