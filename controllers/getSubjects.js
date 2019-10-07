let Subject = require('../models/subjects.js')

module.exports = (req, res) => {
    Subject.find({})
        .then(data => { res.send(data) })
        .catch(err => {
            res.send(err)
        })
}
