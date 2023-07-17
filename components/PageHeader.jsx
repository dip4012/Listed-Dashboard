import { useSession } from "next-auth/react"
import Image from "next/image"
import { useState } from "react"

export default function PageHeader({ title }) {
	const [searchText, setSearchText] = useState("")
	const { data: session } = useSession()

	const handleChange = (e) => {
		e.preventDefault()
		setSearchText(e.target.value)
	}

	return (
		<div className="w-full flex justify-between items-center max-[1378px]:fixed max-[1378px]:top-0 max-[1378px]:left-0 max-[1378px]:z-10 max-[1378px]:bg-[#f5f5f5] max-[1378px]:px-[40px] max-[1378px]:py-[20px]">
			<h1 className="text-black font-Montserrat text-2xl font-bold">{title}</h1>

			<div className="flex justify-center items-center gap-[30px]">
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
					className="rounded-full"
				/>
			</div>
		</div>
	)
}
