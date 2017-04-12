
const User = require('../models/userMod')

module.exports.show = (req, res) => {
  res.render('register', { page: 'Register'});
}

module.exports.create = (req, res) => {
  if (req.body.password === req.body.confirmation) {
    User.findOneByEmail(req.body.email)
    .then( (user) => {
      if (user) return res.render('register', { msg: 'Email is already registered'});
       User.forge({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        age: req.body.age,
        phone: req.body.phone,
        username: req.body.username,
        bio: req.body.bio,
        gender: req.body.gender
      })
      .save()
      .then( () => {
        User.findOneByEmail(req.body.email)
          .then(user => {
            console.log(user.id)
            req.flash('id', user.id);
            res.redirect('/register/preferences')
          })
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
