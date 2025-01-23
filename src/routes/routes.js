const express = require('express')
const router = express.Router()
const controller = require('../models/controller')

router.get('getUpdate', controller.getUpdate)
router.post('sendMessage', controller.sendMessage)

module.exports = router