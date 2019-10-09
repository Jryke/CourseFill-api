const express = require('express')
const database = require('./database')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

// Express
const app = express()

// Middleware
app.use(cors({ credentials: true }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// const auth = app.use(require('./controllers/auth'))

// Database
database

// Routes
app.get('/', (req, res) => res.send('Welcome to Course Registration'))

//School
app.post('/school', require('./controllers/postSchool.js'))

//Subjects
app.post('/subjects', require('./controllers/postSubject.js'))
app.get('/subjects', require('./controllers/getSubjects.js'))

//User
app.post('/signup', require('./controllers/signup.js'))
app.post('/login', require('./controllers/login.js'))
app.get('/user/:id', require('./controllers/getUser.js'))
app.get('/users/:role', require('./controllers/getUsers.js'))
app.get('/students', require('./controllers/getStudents.js'))
app.get('/students/:id', require('./controllers/getUser.js'))
app.patch('/students/:id', require('./controllers/patchUser.js'))
app.get('/teachers', require('./controllers/getTeachers.js'))
app.patch('/teachers/:id', require('./controllers/patchUser.js'))

//Courses
app.post('/admin/postCourse', require('./controllers/postCourse.js'))
app.get('/courses', require('./controllers/getCourses.js'))
app.get('/courses/:id', require('./controllers/getCourse.js'))
app.patch('/courses/:id', require('./controllers/patchCourse.js'))

//Payments
app.post('/pay', require('./controllers/payments.js'))


// listen
app.listen(process.env.PORT, () => {
	console.log(`Ready on port ${process.env.PORT}`)
})
