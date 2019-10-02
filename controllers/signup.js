const User = require('../models/user.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


let postUser =
(req, res) => {
	// HASH PASSWORD BEFORE CREATING STUDENT
	req.body.password = bcrypt.hashSync(req.body.password, 10)
	// SIGNUP STUDENT
	User.create(req.body)
	.then(data => {
		const token = jwt.sign(data, process.env.TOKEN_SECRET)
		res.send({data: data, token: token})})
	.catch(err => {console.log(err)})
}

module.exports = postUser
