const express = require('express')
require('dotenv').config()

const app = express()

const router = require('./routes/index')

app.use('/', router)

module.exports = app
