import { Schema, model, models } from "mongoose"

export const UserSchema = new Schema({
	name: {
		type: String,
		required: [true, "Email is required"],
	},
	email: {
		type: String,
		unique: [true, "Email must be unique"],
		required: [true, "Email is required"],
	},
	username: {
		type: String,
		unique: [true, "Username is unique"],
		required: [true, "Username is required"],
	},
	image: {
		type: String,
	},
})

const User = models.User || model("User", UserSchema)

export default User
