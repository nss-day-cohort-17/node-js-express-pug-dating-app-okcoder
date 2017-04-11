'use strict';

const { Router } = require('express')

const { show } = require('../controllers/matchesCtrl')

const router = Router()

router.get('/matches', show)

module.exports = router
