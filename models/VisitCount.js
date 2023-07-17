import { Schema, model, models } from "mongoose"

export const VisitCountSchema = new Schema({
	userType: {
		type: String,
		enum: ["Guest", "User"],
		required: true,
	},
	month_year: {
		type: String,
		required: true,
	},
	week_number: {
		type: Number,
		required: true,
	},
	count: {
		type: Number,
		required: true,
	},
})

const VisitCount = models.VisitCount || model("VisitCount", VisitCountSchema)

export default VisitCount
