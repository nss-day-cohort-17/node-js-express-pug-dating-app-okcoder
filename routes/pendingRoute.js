'use strict';

const { Router } = require('express')

const { show } = require('../controllers/pendingCtrl')

const router = Router()

router.get('/pending', show)

module.exports = router
