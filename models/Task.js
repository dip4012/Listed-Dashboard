import { Schema, model, models } from "mongoose"

export const TaskSchema = new Schema({
	taskName: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	startTime: {
		type: String,
		required: true,
	},
	endTime: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
})

const Task = models.Task || model("Task", TaskSchema)

export default Task
