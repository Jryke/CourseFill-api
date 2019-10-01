const express = require('express')
const database = require('./database')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()


// Express
const app = express()

// Middleware
app.use(cors({credentials: true}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Database
database

// Routes
app.get('/', (req, res) => res.send('Welcome to Course Registration'))

	//School
	app.post('/school', require('./controllers/postSchool.js'))

	//User
	app.post('/signup', require('./controllers/signup.js'))
	app.post('/login', require('./controllers/login.js'))

	//Courses
	app.post('/admin/postCourse', require('./controllers/postCourse.js'))
	app.get('/courses', require('./controllers/getCourses.js'))
	app.get('/courses/:id', require('./controllers/getCourse.js'))





// listen
app.listen(process.env.PORT, () => {
	console.log(`Ready on port ${process.env.PORT}`)
})
