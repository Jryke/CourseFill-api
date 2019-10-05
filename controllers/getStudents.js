let Users = require('../models/user.js')
let Courses = require('../models/courses.js')


module.exports = (req, res) => {
Users.find({role: 'student'}).populate({
	path: 'courses',
	model: 'courses',
	populate: {
		path: 'teachers',
		model: 'user' }})
.then(data => {res.send(data)})
 .catch(err => {
 res.send(err)
 })
}
