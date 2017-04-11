
const User = require('../models/userMod')

module.exports.show = (req, res) => {
  res.render('register', { page: 'Register'});
}

module.exports.create = ({body: {email, password, confirmation, name, age, phone, username, bio, gender}}, res) => {
  if (password === confirmation) {
    User.findOneByEmail(email)
    .then( (user) => {
      if (user) return res.render('register', { msg: 'Email is already registered'});
      return User.forge({email, password, name, age, phone, username, bio, gender})
      .save()
      .then( () => {
        res.redirect('/register/preferences')
      })
      // catch for save()
      .catch( (err) => res.render('register', {msg: "Dang. There was probz. Try again."}));
    })
    // catch for findOneByEmail
    .catch( (err) => res.render('register', {msg: "Dang. There was probz. Try again."}));
  } else {
    res.render('register', { msg: 'Oops. Password and confirmation don\'t match. Try again'});
  }
}
