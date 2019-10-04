let Users = require('../models/user.js')

module.exports = (req, res) => {
Users.find({role: 'student'})
 .then(data => {res.send(data)})
 .catch(err => {
 res.send(err)
 })
}
