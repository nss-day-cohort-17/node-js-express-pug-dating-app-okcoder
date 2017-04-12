'use strict'
const { knex } = require('../database')
const matches = require('./matches')

let matchPromises = matches.map(({userOne, userTwo}) => {
  return knex('matches').insert({userOne, userTwo})
})

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('matches').del()
    .then(function() {
      // Inserts seed entries
      return Promise.all(matchPromises)
    });
};
