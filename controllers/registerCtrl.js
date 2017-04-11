
const User = require('../models/userMod')

module.exports.show = (req, res) => {
  res.render('register', { page: 'Register'});
}

module.exports.create = ({body: {email, password, confirmation}}, res) => {
  if (password === confirmation) {
    User.findOneByEmail(email)
    .then( (user) => {
      if (user) return res.render('register', { msg: 'Email is already registered'});
      return User.forge({email, password})
      .save()
      .then( () => {
        res.redirect('/')
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
