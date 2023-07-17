import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const Chart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
})

export default function LineChart() {
	const [options, setOptions] = useState({
		chart: {
			id: "line-chart",
			toolbar: {
				show: false,
			},
			width: "100%",
			offsetX: 0,
		},
		xaxis: {
			type: "category",
			tickPlacement: "between",
			categories: [],
			labels: {
				style: {
					colors: "#858585",
					fontSize: "14px",
					fontStyle: "Lato",
					fontWeignt: 400,
				},
				offsetY: -3,
			},
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			tooltip: {
				show: false,
			},
		},
		yaxis: {
			labels: {
				show: true,
				align: "right",
				style: {
					colors: "#858585",
					fontSize: "14px",
					fontStyle: "Lato",
					fontWeignt: 400,
				},
				offsetX: -17,
			},
		},
		zoom: {
			enabled: false,
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: "smooth",
			width: 3,
		},
		grid: {
			row: {
				borderColor: "#EAEAEA",
				colors: ["transparent"],
				opacity: 0.5,
			},
			padding: {
				top: 10,
				bottom: -15,
			},
		},
		legend: {
			show: false,
		},
		colors: ["#E9A0A0", "#9BDD7C"],
	})

	const [series, setSeries] = useState([])

	const monthOptions = [
		{
			value: "January 2023",
			option: "January - February 2023",
		},
		{
			value: "February 2023",
			option: "February - March 2023",
		},
		{
			value: "March 2023",
			option: "March - April 2023",
		},
		{
			value: "April 2023",
			option: "April - May 2023",
		},
		{
			value: "May 2023",
			option: "May - June 2023",
		},
		{
			value: "June 2023",
			option: "June - July 2023",
		},
		{
			value: "July 2023",
			option: "July - August 2023",
		},
		{
			value: "August 2023",
			option: "August - September 2023",
		},
		{
			value: "September 2023",
			option: "September - October 2023",
		},
		{
			value: "October 2023",
			option: "October - November 2023",
		},
		{
			value: "November 2023",
			option: "November - December 2023",
		},
		{
			value: "December 2023",
			option: "December 2023 - January 2024",
		},
		{
			value: "January 2024",
			option: "January - February 2024",
		},
		{
			value: "February 2024",
			option: "February - March 2024",
		},
		{
			value: "March 2024",
			option: "March - April 2024",
		},
	]

	const [monthType, setMonthType] = useState("January 2023")

	const handleChange = (e) => {
		setMonthType(e.target.value)
	}

	useEffect(() => {
		const getChartOption = async () => {
			const response = await fetch(`/api/visitCount/${monthType}`)
			const data = await response.json()

			const guestCount = data
				.filter((item) => item.userType === "Guest")
				.map((item) => item.count)
			const userCount = data
				.filter((item) => item.userType === "User")
				.map((item) => item.count)

			const weekNumbers = [...new Set(data.map((entry) => entry.week_number))].map(
				(item) => `Week ${item}`
			)

			setOptions((prevOptions) => ({
				...prevOptions,
				xaxis: { ...prevOptions.xaxis, categories: weekNumbers },
			}))

			setSeries((prevSeries) => [
				{
					name: "Guest",
					data: guestCount,
				},
				{
					name: "User",
					data: userCount,
				},
			])
		}

		getChartOption()
	}, [monthType])

	return (
		<div className="w-full h-[360px] bg-white rounded-2xl px-[40px] py-[30px] flex flex-col justify-between items-center">
			<div className="flex items-center justify-between w-full">
				<div className="flex flex-col items-start justify-center gap-[5px]">
					<h1 className="text-balack font-Montserrat text-lg font-bold">
						Activities
					</h1>
					<div className="text-[#858585] font-Montserrat text-sm font-normal">
						<select value={monthType} onChange={handleChange} className="!p-0">
							{monthOptions.map((monthOption) => (
								<option key={monthOption.value} value={monthOption.value}>
									{monthOption.option}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className="flex justify-center items-center gap-[35px]">
					<div className="flex justify-center items-center gap-[10px]">
						<div className="w-[10px] h-[10px] bg-[#E9A0A0] rounded-full"></div>
						<p className="text-black font-Lato text-sm font-normal">Guest</p>
					</div>
					<div className="flex justify-center items-center gap-[10px]">
						<div className="w-[10px] h-[10px] bg-[#9BDD7C] rounded-full"></div>
						<p className="text-black font-Lato text-sm font-normal">User</p>
					</div>
				</div>
			</div>
			<div className="w-full h-full">
				<Chart options={options} series={series} type="line" height={235} />
			</div>
		</div>
	)
}
