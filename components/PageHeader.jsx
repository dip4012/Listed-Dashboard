import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function PageHeader({ title }) {
	const [searchText, setSearchText] = useState("")
	const { data: session } = useSession()
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleChange = (e) => {
		e.preventDefault()
		setSearchText(e.target.value)
	}

	return (
		<div className="w-full flex justify-between items-center z-10">
			<h1 className="text-black font-Montserrat text-2xl font-bold">{title}</h1>

			<div className="flex justify-center items-center gap-[30px] relative">
				<div className="w-[180px] h-full relative">
					<input
						type="search"
						name="searchText"
						value={searchText}
						onChange={handleChange}
						placeholder="Search..."
						className="bg-white py-[6px] px-[15px] rounded-xl text-[#B0B0B0] font-Lato text-sm font-normal"
					/>
					<div className="absolute right-[15px] top-[9px]">
						<Image
							src="/assets/icons/search_icon.svg"
							width={12}
							height={12}
							alt="search icon"
						/>
					</div>
				</div>

				<Image
					src="/assets/icons/bell_icon.svg"
					width={18}
					height={20}
					alt="notification_icon"
					className="cursor-pointer"
				/>

				<Image
					src={session?.user.image}
					width={30}
					height={30}
					alt="profile picture"
					className="rounded-full cursor-pointer"
					onClick={() => setIsModalOpen((prev) => !prev)}
				/>

				{isModalOpen && (
					<div className="absolute top-full right-0 py-[20px] px-[30px] mt-5 bg-white rounded-2xl flex flex-col justify-center items-start gap-[20px]">
						<Link
							href="#"
							className="text-black font-Lato text-sm font-normal"
							onClick={() => setIsModalOpen(false)}
						>
							My Profile
						</Link>
						<button
							className="w-[120px] p-[8px] bg-black text-white font-Lato text-sm font-light rounded-full"
							onClick={() => {
								setIsModalOpen(false)
								signOut()
							}}
						>
							Sign Out
						</button>
					</div>
				)}
			</div>
		</div>
	)
}
