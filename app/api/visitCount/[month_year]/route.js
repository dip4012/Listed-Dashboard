import VisitCount from "@/models/VisitCount"
import { connectToDB } from "@/utils/database"

export const GET = async (req, { params }) => {
	const { month_year } = params

	try {
		await connectToDB()

		const data = await VisitCount.find({
			month_year: month_year,
		})

		return new Response(JSON.stringify(data), {
			status: 200,
		})
	} catch (error) {
		return new Response("Failed to fetch data", {
			status: 500,
		})
	}
}
