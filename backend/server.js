require('dotenv').config()

const express = require('express')
const routes = require('./src/routes/routes')
const mongoose = require('mongoose')

const app = express()

const {dbConnection, dbEvents} = require('./dbConnection')

dbConnection(process.env.URL_CONNECTION)


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routes)

// console.log(dbEvents.events)

dbEvents.on('conectou', () => {
    app.listen(3000, () => {
        console.log('servidor ON')
        console.log('http://localhost:3000')
    })
    // console.log('ouvi')
})