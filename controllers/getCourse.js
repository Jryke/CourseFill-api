let Courses = require('../models/courses.js')

module.exports = (req, res) => {
Courses.findById(req.params.id).populate('teachers students')
 .then(data => {res.send(data)})
 .catch(err => {
 res.send(err)
 })
}
