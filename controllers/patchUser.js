const User = require('../models/user.js')

let patchUser = (req, res) => {
	console.log(gm)
	req.body.avatar = `${req.protocol}://${req.get('host')}/${req.file.filename}`
	User.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then(data => {
			res.send(data)
		})
		.catch(err => { console.log(err) })
	}

module.exports = patchUser
