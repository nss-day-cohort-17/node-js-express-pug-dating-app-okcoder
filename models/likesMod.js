'use strict'

const { bookshelf } = require('../db/database');

const Likes = bookshelf.Model.extend({
  tableName: 'likes'
})

module.exports = Likes;
