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


//checking to see where the user has been liked by another user so that can be checked for matches

const GetWhereUserIsLiked = (userId, paramsId) => {
  return Like.forge().where({likee: userId, liker: paramsId}).fetch({columns: ['liker', 'likee']})
}

module.exports.likeUser = (req, res, err) => {
  GetWhereUserIsLiked(req.user.id, req.params.id)
    .then( (user) => {
      if (user !== null) {
        return user.toJSON()
      }
    })
    .then( (user) => {
      if (user) {
        //match the users
        Match.forge({userOne: user.likee, userTwo: user.liker})
          .save()
          .then( () => {
            console.log('done with match')
        })
      }
      else {
        //post a like
        Like.forge({liker: req.user.id, likee: req.params.id})
          .save()
          .then( () => {
            console.log('done with like')
          })
      }
    })
}
