'use strict';

const Match = require('../models/matchesMod')
const Like = require('../models/likesMod')
const User = require('../models/userMod')
const { GetWhereUserIsLiked } = require('./homeCtrl')

// module.exports.show = (req, res) =>
//   res.render('pending', {page: 'Pending'});

const GetWhereUserIsLiker = (userId) => {
  return Likes.forge().where('liker', userId).fetch({columns: ['liker', 'likee']})
}

module.exports.show = (req, res) => { 
  GetWhereUserIsLiked(res.locals.id)
  .then(rows => {
    console.log(rows.toJSON())
  })
  res.render('pending', {page: 'Pending'});
}
