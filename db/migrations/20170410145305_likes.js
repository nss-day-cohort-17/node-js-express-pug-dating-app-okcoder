'use strict';

exports.up = function(knex, Promise) {
 return knex.schema.createTable('likes', (table) => {
    table.increments(); // same as (`id` int unsigned not null auto_increment primary key)
    table.integer('liker').notNullable();
    table.integer('likee').notNullable();  
  });  
};

exports.down = (knex, Promise) => knex.schema.dropTable('likes')
