'use strict';

const Match = require('../models/matchesMod')
const Like = require('../models/likesMod')
const User = require('../models/userMod')
const { GetWhereUserIsLiked } = require('./homeCtrl')

const getUser = (id) => {
   return User.forge({id})
  .fetch()
  .then( user => {
    return user.toJSON()
  })
}

const GetYourLikers = (id) => {
  return Like.forge().where('likee', id).fetchAll({columns: ['liker', 'likee']})
    .then(rows => {
      return rows.toJSON().map(like => {
        return getUser(like.liker)
      })
    })
}

const GetYourLikees = (id) => {
  return Like.forge().where('liker', id).fetchAll({columns: ['liker', 'likee']})
    .then(rows => {
      return rows.toJSON().map(like => {
        return getUser(like.likee)
      })
    })
}

module.exports.show = (req, res) => { 
  let userLikers;
  let userLikees;
  Promise.all([GetYourLikees(res.locals.id), GetYourLikers(res.locals.id)])
   .then(([likees, likers]) => {
    Promise.all(likees)
      .then(dataLikees => {
        userLikees = dataLikees
      })
      .then(() => {
        Promise.all(likers)
          .then( dataLikers => {
            userLikers = dataLikers
          })
        .then(() => {
          res.render('pending', {page: 'Pending', userLikees, userLikers});
        })
      })
   })
}
