'use strict';

const { Router } = require('express');
const router = Router();

// public routes
router.use(require('./registerRoute'))
router.use(require('./loginRoute'))
router.use(require('./dateFormRoute'))

// login guard middleware. Send 'em back home if not registered
router.use( (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login')
  }
});

// private routes
router.use(require('./otherProfileRoute'))
router.use(require('./logoutRoute'))
router.use(require('./profileRoute'))
router.use(require('./matchesRoute'))
router.use(require('./homeRoute'))
router.use(require('./pendingRoute'))

module.exports = router;
