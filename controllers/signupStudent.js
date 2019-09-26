const Student = require('../models/student.js')
const bcrypt = require('bcryptjs')

let postStudent =
(req, res) => {
	// HASH PASSWORD BEFORE CREATING STUDENT
	req.body.password = bcrypt.hashSync(req.body.password, 10)
	// SIGNUP STUDENT
	Student.create(req.body)
	.then(data => res.send({data: data._id}))
	.catch(err => {console.log(err)})
}

module.exports = postStudent
