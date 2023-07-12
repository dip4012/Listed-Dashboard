import mongoose from "mongoose"

const isConnected = false

export const connectToDB = async () => {
	mongoose.set("strictQuery", true)

	if (isConnected) {
		console.log("Database is already connected!")
		return
	}

	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			dbName: "dashboard",
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})

		isConnected = true

		console.log("Database connected")
	} catch (error) {
		console.log(error)
	}
}
