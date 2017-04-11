'use strict';

const { Router } = require('express')

const {show, create} = require('../controllers/registerCtrl')

const router = Router()

router.get('/register/profile', show)
router.post('/register/profile', create)

module.exports = router
