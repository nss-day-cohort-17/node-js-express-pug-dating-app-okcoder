'use strict';

const { Router } = require('express')

const session = require('../controllers/loginCtrl')

const router = Router()

router.get('/login', session.show)

module.exports = router
