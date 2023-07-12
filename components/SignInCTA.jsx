import Image from "next/image"

export default function SignInCTA({ source, service, handleClick }) {
	return (
		<div
			className="w-[180px] h-[30px] bg-white rounded-lg flex justify-center items-center px-[19px] py-[8px] gap-[10px] cursor-pointer hover:bg-slate-50"
			onClick={handleClick}
		>
			<Image src={source} width={14} height={14} alt="service_icon" />
			<p className="text-[#858585] font-Montserrat text-xs font-normal">
				Sign in with {service}
			</p>
		</div>
	)
}
