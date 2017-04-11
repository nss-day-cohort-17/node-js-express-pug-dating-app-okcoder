'use strict';

const { Router } = require('express')

const { show, updatePrefs } = require('../controllers/dateFormCtrl')

const router = Router()

router.get('/register/preferences', show)
router.post('/register/preferences', updatePrefs)

module.exports = router
