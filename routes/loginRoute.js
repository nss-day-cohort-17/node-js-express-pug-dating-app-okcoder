'use strict';

const { Router } = require('express')
const { show } = require('../controllers/loginCtrl')
const router = Router()

router.get('/login', show)

module.exports = router
