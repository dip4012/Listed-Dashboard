import Image from "next/image"

export default function DemographicCards({ color, icon, title, value }) {
	return (
		<div
			className={`${color} w-[221px] h-[120px] py-[20px] px-[25px] relative rounded-2xl flex flex-col justify-end items-start gap-[5px] max-[1087px]:w-full`}
		>
			<Image
				src={`/assets/icons/${icon}.svg`}
				width={24}
				height={24}
				alt={`${title} icon`}
				className="absolute top-[20px] right-[25px]"
			/>
			<p className="text-black font-Lato text-sm font-normal">{title}</p>
			<p className="text-black font-sans text-2xl font-bold">{value}</p>
		</div>
	)
}
