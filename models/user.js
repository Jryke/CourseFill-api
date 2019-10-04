const mongoose = require('mongoose')

let user = mongoose.model('user', {
first_name: {
	type: String,
	required: [true, 'First name is required'],
			},
middle_name: {
	type: String
			},
last_name: {
	type: String,
	required: [true, 'Last name is required']
			},
	email: {
		type: String,
		required: [true, 'E-mail is required'],
		unique: true
				},
	password: {
		type: String,
		required: true,
		select: false
	},
	classes: {
		type: []
	},
	role: {
		type: String,
		enum: ['admin', 'teacher', 'student'],
		default: 'student',
		required: true
	},
	avatar: {
		type: String,
		default: 'https://thispersondoesnotexist.com'
	},
	school: {
	type: mongoose.Schema.Types.ObjectId,
	ref: 'school',
	required: true
	},
created_at: {
	type: Date,
	default: Date.now}
})

module.exports = user
