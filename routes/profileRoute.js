'use strict';

const { Router } = require('express')

const { show, likeUser } = require('../controllers/profileCtrl')

const router = Router()

router.get('/profile', show)
router.post('/profile', likeUser)


module.exports = router
