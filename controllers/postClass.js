const Classes = require('../models/classes.js')


let postClass =
(req, res) => {
	Classes.create(req.body).then(data => res.send(data))
	.catch(err => {console.log(err)})
}

module.exports = postClass
