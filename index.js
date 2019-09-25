const express = require('express')
const database = require('./database')
const bodyParser = require('body-parser')
// const cors = require('cors')
require('dotenv').config()


// Express
const app = express()

// Middleware
// app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Database
database

// Routes
app.get('/', (req, res) => res.send('Welcome to Course Registration'))

	//School
	app.post('/school', require('./controllers/postSchool.js'))

	//Teacher
	app.post('/signup', require('./controllers/signupTeacher.js'))
	app.post('/login/teacher', require('./controllers/loginTeacher.js'))



// listen
app.listen(process.env.PORT, () => {
	console.log(`Ready on port ${process.env.PORT}`)
})
