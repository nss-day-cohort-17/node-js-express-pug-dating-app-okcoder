'use strict';

const { Router } = require('express')

const { show, updateProfile} = require('../controllers/dateFormCtrl')

const router = Router()

router.get('/register/preferences', show)
router.post('/register/preferences', updateProfile)

module.exports = router
