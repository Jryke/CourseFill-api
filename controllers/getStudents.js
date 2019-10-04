let Users = require('../models/courses.js')

module.exports = (req, res) => {
Users.find(role[2])
 .then(data => {res.send(data)})
 .catch(err => {
 res.send(err)
 })
}
