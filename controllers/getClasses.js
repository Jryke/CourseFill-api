let Classes = require('../models/classes.js')

module.exports = (req, res) => {
Classes.find({})
 .then(data => {res.send(data)})
 .catch(err => {
 res.send(err)
 })
}
