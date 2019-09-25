let Teacher = require('../models/teacher.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
//FIND TEACHER BY EMAIL
Teacher.findOne({ email: req.body.email})
	.select('password')
	.then(data => {
		// VALIDATE PASSWORD
		let validPassword = bcrypt.compareSync(req.body.password, data.password)
		if (!validPassword) {
			res.status(400).send('Invalid Credentials')}
			else {
			const token = jwt.sign({_id: data._id}, process.env.TOKEN_SECRET)
			res.header('auth-token', token).send(token)
			}
		})
	.catch(err => {
	res.send(err)
	})
}
