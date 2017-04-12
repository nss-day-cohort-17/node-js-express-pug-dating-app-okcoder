'use strict'
const { knex } = require('../database')
const likes = require('./likes')

let likesPromises = likes.map(({liker, likee}) => {
  return knex('likes').insert({liker, likee})
})

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('likes').del()
    .then(function() {
      // Inserts seed entries
      return Promise.all(likesPromises)
    });
};
