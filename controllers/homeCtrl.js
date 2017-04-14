'use strict';

const { knex } = require('../db/database')
const { shuffle } = require('lodash')
const User = require('../models/userMod')
const LikesQuery = () => knex('likes')
const Likes = require('../models/likesMod')
const Matches = require('../models/matchesMod')

//GetWhereUserIsLiked(1);

console.log('shuffle', shuffle)

const getUsers = () =>
  User.forge().fetchAll().then(rows => shuffle(rows.toJSON()).slice(0, 15))
  .catch((err) => {
    throw err
  })

module.exports.show = (req, res, err) => {
  Promise.all([getUsers()])
  .then(([users]) => {
    res.render('index', {page: 'Home', users});
  })
}
