'use strict';

const User = require('../models/userMod')
const Like = require('../models/likesMod')
const { getUser } = require('./matchesCtrl')
const Match = require('../models/matchesMod')


module.exports.show = (req, res) => {
  User.findOneByEmail(res.locals.email)
  .then(user => {
    res.render('profile', {page: 'Profile', user: user.toJSON()});
  })
}

const deleteLike = (userId, paramsId) => {
  return Like.forge().where({likee: userId, liker: paramsId}).destroy()
}


module.exports.showOther = (req, res) => {
  let liked;
  GetWhereUserIsLiked(req.user.id, req.params.id)
    .then(like => {
      like ? liked = 'This person has liked you! Like them back?' : liked = null
      return getUser(req.params.id)
        .then((user) => {
          res.render('otherProfile', {user, liked});
        })
    })
    .catch(() => {
      getUser(req.params.id)
        .then((user) => {
          res.render('otherProfile', {user});
        })
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
          .then(() => {
            deleteLike(req.user.id, req.params.id)
          })
          .then(() => {
            deleteLike(req.params.id, req.user.id) 
          })
          .then( () => {
            console.log('done with match')
            req.flash('msg', "Congrats, you two have matched. Invite OKCoder to the wedding")
            res.redirect(`/profile/${req.params.id}`)
        })
      }
      else {
        //post a like
        Like.forge({liker: req.user.id, likee: req.params.id})
          .save()
          .then( () => {
            console.log('done with like')
            req.flash('msg', "Congrats, you have successfully liked them")
            res.redirect(`/profile/${req.params.id}`)
          })
      }
    })
}

module.exports.GetWhereUserIsLiked = GetWhereUserIsLiked
