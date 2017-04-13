'use strict';

const { Router } = require('express')
const { show, create } = require('../controllers/loginCtrl')
const router = Router()

router.get('/login', show)
router.post('/login', create)

module.exports = router
