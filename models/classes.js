const mongoose = require('mongoose')

let classes = mongoose.model('classes', {

name: {
	type: String,
	required: true,
			},
	description: {
		type: String,
	},
	schedule: {
		type: String,
	},
	teachers: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'user',
		required: true
	},
	students: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'user'
	}
})

module.exports = classes
