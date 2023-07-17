import Task from "@/models/Task"
import { connectToDB } from "@/utils/database"

export const GET = async (req, { params }) => {
	const { date } = params

	try {
		await connectToDB()

		const data = await Task.find({
			date: date,
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
