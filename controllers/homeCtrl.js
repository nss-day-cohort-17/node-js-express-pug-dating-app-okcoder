'use strict';

const { knex } = require('../db/database')
const LikesQuery = () => knex('likes')
const Likes = require('../models/likesMod')
const Matches = require('../models/matchesMod')

//checking to see where the user has been liked by another user so that can be checked for matches
// const GetWhereUserIsLiked = (userid) =>
//   LikesQuery.where({
//     likee: userid
//   }).select()
//   .then( (rows) => rows )
//   .catch( (error) => {
//     throw error
//   })

const GetWhereUserIsLiked = (userId) => {
  return Likes.forge().where('likee', userId).fetch({columns: ['liker', 'likee']})
}

module.exports.show = (req, res) => res.render('index');


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

GetWhereUserIsLiked(1);
