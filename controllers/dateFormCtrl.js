'use strict';

const User = require('../models/userMod')
let email;

module.exports.show = (req, res) => {
  email = req.flash('email')
  console.log(res.locals.email)
  res.render('dateForm');
}

module.exports.updateProfile = (req, res) => {
  User.findOneByEmail(email[0])
    .then( (user) => {
    user.save({
        id: user.get('id'),
        email: user.get('email'),
        password: user.get('password'),
        name: user.get('name'),
        age: user.get('age'),
        phone: user.get('phone'),
        username: user.get('username'),
        bio: user.get('bio'),
        gender: user.get('gender'),
        genderPref: req.body.genderPref, 
        pet: req.body.pet, 
        smoker: req.body.smoker, 
        language: req.body.language, 
        tabspace: req.body.tabspace, 
        editor: req.body.editor, 
        os: req.body.os
      })
      .then( (user) => {
          res.redirect('/')
      })
  })
}
