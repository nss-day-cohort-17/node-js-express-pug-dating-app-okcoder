'use strict';

const { Router } = require('express')

const { showOther } = require('../controllers/profileCtrl')

const router = Router()

router.get('/profile/:id', showOther)

module.exports = router
