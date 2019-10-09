const mongoose = require('mongoose')

let courses = mongoose.model('courses', {
	name: {
		type: String,
		required: true,
	},
	subject: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'subjects',
		required: true
	},
	description: {
		type: String,
	},
	schedule:
	{
		startDate: String,
		endDate: String,
		startTime: String,
		endTime: String,
		days: []
	}
	,
	teachers: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'user',
	},
	students: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'user'
	},
	registration: {
		registered: Number,
		limit: Number
	},
	price: {
		type: Number,
		required: true
	}
})

module.exports = courses
