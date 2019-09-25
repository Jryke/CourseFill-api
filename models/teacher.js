const mongoose = require('mongoose')

let teacher = mongoose.model('teacher', {
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
	isAdmin: {
		type: Boolean
	},
	school: {
	type: mongoose.Schema.Types.ObjectId,
	ref: 'school'
			}
})

module.exports = teacher
