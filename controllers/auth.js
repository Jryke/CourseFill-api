const  jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
	const token = req(token)

if(!token) {
	return res.status(401).send("Authorization denied")
}





}
