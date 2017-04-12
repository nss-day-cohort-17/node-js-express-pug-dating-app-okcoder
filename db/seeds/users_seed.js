'use strict'
const { knex } = require('../database')
const userData = require('./user')

let userPromises = userData.map((user) => {
  return knex('users').insert({email:user.email, name:user.name, password:user.password, age:user.age, phone:user.phone, username:user.username, bio:user.bio, gender:user.gender, genderPref:user.genderPref, pet:user.pet, smoker:user.smoker, language:user.language, tabspace:user.tabspace, editor:user.editor, os:user.os, photo:user.photo})
})

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return Promise.all(userPromises)
    });
};
