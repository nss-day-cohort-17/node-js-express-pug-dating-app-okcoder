'use strict'

const { bookshelf } = require('../db/database');

const Like = bookshelf.Model.extend({
  tableName: 'likes'
})

module.exports = Like;
