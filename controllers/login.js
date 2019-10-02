let User = require('../models/user.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
//FIND USER BY EMAIL
User.findOne({ email: req.body.email})
	.select('password')
	.then(data => {
		// VALIDATE PASSWORD
		let validPassword = bcrypt.compareSync(req.body.password, data.password)
		if (!validPassword) {
			res.status(400).send('Email or password is incorrect')}
			else {
				const token = jwt.sign(data, process.env.TOKEN_SECRET)
				res.send({data: data, token: token})}
			}
		)
	.catch(err => {
	res.send('Email or password is incorrect')
	})
}
