'use strict'

const { bookshelf } = require('../db/database');

const Matches = bookshelf.Model.extend({
  tableName: 'matches'
})


module.exports = Match;
