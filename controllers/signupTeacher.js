const Teacher = require('../models/teacher.js')
const bcrypt = require('bcryptjs')

let postTeacher =
(req, res) => {
	// HASH PASSWORD BEFORE CREATING TEACHER
	req.body.password = bcrypt.hashSync(req.body.password, 10)
	// SIGNUP TEACHER
	Teacher.create(req.body)
	.then(data => res.send({data: data._id}))
	.catch(err => {console.log(err)})
}

module.exports = postTeacher
