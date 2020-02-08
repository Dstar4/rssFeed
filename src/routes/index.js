const router = require('express').Router()
const rssController = require('../controllers/rssController')

// Auth
router.use('/', rssController)


module.exports = router
