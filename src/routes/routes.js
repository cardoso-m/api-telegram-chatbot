const express = require('express')
const router = express.Router()
const controller = require('../models/controller')

router.get('/getUpdates', controller.getUpdates)
router.post('/sendMessage', controller.sendMessage)

module.exports = router