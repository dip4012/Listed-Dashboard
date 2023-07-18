import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const Chart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
})

export default function PieChart() {
	const [options, setOptions] = useState({
		labels: [],
		dataLabels: {
			enabled: false,
		},
		colors: ["#98D89E", "#F6DC7D", "#EE8484"],
		legend: {
			show: false,
		},
		plotOptions: {
			pie: {
				expandOnClick: false,
				customScale: 1.3,
				offsetY: 14,
			},
		},
		chart: {
			height: 132,
		},
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
	const [sum, setSum] = useState(0)
	const colors = ["legend_green", "legend_yellow", "legend_red"]

	const handleChange = (e) => {
		setMonthType(e.target.value)
	}

	useEffect(() => {
		const getProductCounts = async () => {
			const response = await fetch(`/api/productCount/${monthType}`)
			const data = await response.json()

			setSum(data.reduce((total, element) => total + element.quantity, 0))

			const teesCount = data.filter((item) => item.product === "Basic Tees")[0]

			const pantsCount = data.filter(
				(item) => item.product === "Custom Short Pants"
			)[0]

			const hoodiesCount = data.filter(
				(item) => item.product === "Super Hoodies"
			)[0]

			const products = data.map((item) => item.product)
			const quantities = data.map((item) => item.quantity)

			setOptions((prevOptions) => ({
				...prevOptions,
				labels: products,
			}))

			setSeries(quantities)
		}

		getProductCounts()
	}, [monthType])

	return (
		<>
			<div className="w-full flex justify-between items-center">
				<h1 className="text-black font-Montserrat text-lg font-bold">
					Top Products
				</h1>

				<div className="text-[#858585] font-Montserrat text-sm font-normal">
					<select value={monthType} onChange={handleChange}>
						{monthOptions.map((monthOption) => (
							<option key={monthOption.value} value={monthOption.value}>
								{monthOption.option}
							</option>
						))}
					</select>
				</div>
			</div>

			<div className="w-full h-full flex">
				<div className="flex-1 h-full flex justify-center items-center">
					<Chart
						options={options}
						series={series}
						type="pie"
						width={"100%"}
						height={"100%"}
					/>
				</div>

				<div className="flex-1 h-full flex flex-col justify-between">
					{options.labels.map((item, index) => (
						<div className="flex gap-[10px] justify-start items-start" key={item}>
							<div
								className={`w-[11px] h-[11px] rounded-full ${colors[index]} mt-[5px]`}
							></div>

							<div className="flex flex-col gap-[5px] justify-start items-start flex-1 h-full">
								<h1 className="text-black font-Montserrat text-sm font-bold">{item}</h1>
								<p className="text-[#858585] font-Lato text-xs font-normal">
									{(Math.round(((series[index] * 1.0) / sum) * 10000) / 100).toFixed(2)}%
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
