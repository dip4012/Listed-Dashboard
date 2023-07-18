"use client"

import DemographicCards from "@/components/DemographicCards"
import LineChart from "@/components/LineChart"
import PageHeader from "@/components/PageHeader"
import PieChart from "@/components/PieChart"
import Schedule from "@/components/Schedule"

export default function Dashboard() {
	return (
		<div className="flex-1 flex flex-col items-start justify-start p-[20px] h-full gap-[34px] overflow-y-scroll no-scrollbar relative">
			<PageHeader title="Dashboard" />

			<div className="w-full flex items-center justify-between max-[1320px]:flex-col max-[1320px]:gap-[35px]">
				<DemographicCards
					color="green"
					icon="revenue_icon"
					title="Total revenues"
					value="$2,129,430"
				/>
				<DemographicCards
					color="yellow"
					icon="tag_icon"
					title="Total transactions"
					value="1,520"
				/>
				<DemographicCards
					color="red"
					icon="like_icon"
					title="Total likes"
					value="9,721"
				/>
				<DemographicCards
					color="violet"
					icon="people_icon"
					title="Total users"
					value="892"
				/>
			</div>

			<LineChart />

			<div className="w-full h-[256px] flex items-center justify-between gap-[35px] max-[1320px]:flex-col max-[1320px]:h-[547px]">
				<div className="min-[1321px]:flex-1 h-[256px] rounded-2xl py-[30px] px-[40px] flex flex-col gap-[16px] bg-white max-[1320px]:w-full">
					<PieChart />
				</div>
				<div className="min-[1321px]:flex-1 h-[256px] rounded-2xl py-[30px] px-[40px] flex flex-col gap-[16px] bg-white max-[1320px]:w-full">
					<Schedule />
				</div>
			</div>
		</div>
	)
}
