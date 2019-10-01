let Courses = require('../models/courses.js')

module.exports = (req, res) => {
Courses.find({}).populate('teachers students')
 .then(data => {res.send(data)})
 .catch(err => {
 res.send(err)
 })
}
