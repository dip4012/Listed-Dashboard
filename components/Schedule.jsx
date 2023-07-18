import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Schedule() {
	const [tasks, setTasks] = useState([])
	const [today, setToday] = useState(new Date().toISOString().slice(0, 10))

	useEffect(() => {
		const fetchTasks = async () => {
			const response = await fetch(`/api/tasks/${today}`)
			const data = await response.json()

			setTasks(data.slice(0, 2))
		}

		fetchTasks()
	}, [today])

	return (
		<>
			<div className="w-full flex justify-between items-center">
				<h1 className="text-black font-Montserrat text-lg font-bold">
					Today&#39;s Schedule
				</h1>

				<div className="text-[#858585] font-Montserrat text-sm font-normal">
					<Link href="#" className="flex gap-[6px]">
						<p>Seel All</p>
						<Image
							src="/assets/icons/right-pointer.svg"
							alt="right pointer icon"
							width={8}
							height={5}
						/>
					</Link>
				</div>
			</div>

			<div className="w-full h-full flex flex-col justify-between items-center">
				{tasks.map((task, index) => (
					<div
						className={`w-full h-[66px] pl-[15px] border-l-[6px] border-solid ${
							index % 2 ? "border_violet" : "border_green"
						} flex flex-col items-start justify-start`}
						key={task._id}
					>
						<h1 className="w-full flex-1 text-[#666666] font-Lato text-sm font-bold flex items-center">
							{task.taskName}
						</h1>
						<p className="w-full flex-1 text-[#999999] font-Lato text-xs font-normal flex items-center">
							{task.startTime}-{task.endTime}
						</p>
						<p className="w-full flex-1 text-[#999999] font-Lato text-xs font-normal flex items-center">
							at {task.location}
						</p>
					</div>
				))}
			</div>
		</>
	)
}
