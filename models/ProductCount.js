import { Schema, model, models } from "mongoose"

export const ProductCountSchema = new Schema({
	month_year: {
		type: String,
		required: true,
	},
	product: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
})

const ProductCount =
	models.ProductCount || model("ProductCount", ProductCountSchema)

export default ProductCount
