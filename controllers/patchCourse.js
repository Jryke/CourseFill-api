const Courses = require('../models/courses.js')


let patchCourse =
(req, res) => {
	Courses.update(req.body).then(data => res.send(data))
	.catch(err => {console.log(err)})
}

module.exports = patchCourse
