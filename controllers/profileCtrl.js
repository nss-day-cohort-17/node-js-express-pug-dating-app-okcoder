'use strict';

const User = require('../models/userMod')

module.exports.show = (req, res) => {
  console.log(res.locals.email, 'profile email')
  // User.findOneByEmail(email)
  res.render('profile');
}
