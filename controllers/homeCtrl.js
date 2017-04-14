'use strict';

const { knex } = require('../db/database')
const { shuffle } = require('lodash')
const User = require('../models/userMod')
const LikesQuery = () => knex('likes')
const Likes = require('../models/likesMod')
const Matches = require('../models/matchesMod')

//GetWhereUserIsLiked(1);

const getUsers = (currUser) =>
  // using lodash method of shuffle to randomize users. Then slice to get 15 users
  User.forge().query( (qb) => {
    qb.where('id', '!=', currUser)
  }).fetchAll().then(rows => shuffle(rows.toJSON()).slice(0, 15))
  .catch((err) => {
    throw err
  })

module.exports.show = (req, res, err) => {
  console.log('req', req.user.id)
  Promise.all([getUsers(req.user.id)])
  .then(([users]) => {
    res.render('index', {page: 'Home', users});
  })
}
