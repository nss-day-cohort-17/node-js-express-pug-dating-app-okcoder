'use strict';

const { knex } = require('../db/database')
const User = require('../models/userMod')

const getUsers = () =>
  User.forge().query( (qb) => {
    qb.limit(15)
  }).fetchAll().then(rows => rows.toJSON())
  .catch((err) => {
    throw err
  })

module.exports.show = (req, res, err) => {
  Promise.all([getUsers()])
  .then(([users]) => {
    res.render('index', {page: 'Home', users});
  })
}
