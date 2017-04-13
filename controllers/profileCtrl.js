'use strict';

const User = require('../models/userMod')
const { getUser } = require('./matchesCtrl')

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

const GetWhereUserIsLiked = (userId) => {
  return Likes.forge().where('likee', userId).fetch({columns: ['liker', 'likee']})
}

module.exports.likeUser = ({ body, flash }, res, err) => {
  GetWhereUserIsLiked(body.userId)
    .then( (user) => user.toJSON())
    .then( (user) => {
    //checks to see if the user selected has currently liked the user
      if (user.liker == body.selectedUserId) {
        // if so, do the match stuff
        Matches.forge(user)
          .save()
          .then( () => {
            res.render('/')
          })
          .catch(err)
      } else {
        //do the like stuff
        Likes.forge(body)
          .save()
          .then( () => {
            res.render('/')
          })
      }
    })
}

module.exports.GetWhereUserIsLiked = GetWhereUserIsLiked
