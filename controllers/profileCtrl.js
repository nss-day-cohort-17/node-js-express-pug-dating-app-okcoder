'use strict';

const User = require('../models/userMod')
const { getUser } = require('./matchesCtrl')
const Like = require('../models/likesMod')
const Match = require('../models/matchesMod')


module.exports.show = (req, res) => {
  User.findOneByEmail(res.locals.email)
  .then(user => {
    res.render('profile', {user: user.toJSON()});
  })
}


module.exports.showOther = (req, res) => {
  getUser(req.params.id)
    .then((user) => {
      res.render('otherProfile', {user});
    })
}
