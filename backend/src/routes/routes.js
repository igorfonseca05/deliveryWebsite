const express = require('express')

const routes = express.Router()
const home = require('../controllers/homeControllers')


routes.get('/', home.home)

module.exports = routes