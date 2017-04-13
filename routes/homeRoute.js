'use strict';

const { Router } = require('express')

const { show, likeUser } = require('../controllers/homeCtrl')

const router = Router()

router.get('/', show)

module.exports = router
