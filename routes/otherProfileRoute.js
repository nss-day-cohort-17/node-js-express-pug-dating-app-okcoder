'use strict';

const { Router } = require('express')

const { showOther, likeUser } = require('../controllers/profileCtrl')

const router = Router()

router.get('/profile/:id', showOther)
router.post('/profile/:id', likeUser)


module.exports = router
