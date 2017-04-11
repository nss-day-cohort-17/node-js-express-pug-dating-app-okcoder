'use strict';

const { Router } = require('express')

const { show } = require('../controllers/profileCtrl')

const router = Router()

router.get('/profile', show)

module.exports = router
