'use strict';

exports.up = function(knex, Promise) {
 return knex.schema.createTable('matches', (table) => {
    table.increments(); // same as (`id` int unsigned not null auto_increment primary key)
    table.integer('userOne').notNullable();
    table.integer('userTwo').notNullable();  
  });  
};

exports.down = (knex, Promise) => knex.schema.dropTable('matches')
