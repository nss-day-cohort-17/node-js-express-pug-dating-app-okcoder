'use strict'

const { bookshelf } = require('../db/database');

const Match = bookshelf.Model.extend({
  tableName: 'matches'
})

module.exports = Match;
