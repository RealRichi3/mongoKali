const express = require('express')
const mongoose =require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const EmployeeRoute = require('./routes/employeeRoutes')

// Database connection
mongoose.connect('mongodb://localhost:27017/testDB')
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log(`Successfully connected to ${db.name} database`)
})


// console.log(db.find())

// Express
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({exdended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.....`)
})

// Employee middleware
app.use('/api/employee', EmployeeRoute)

