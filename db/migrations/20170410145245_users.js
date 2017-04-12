'use strict';

exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments(); // same as (`id` int unsigned not null auto_increment primary key)
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('name').notNullable();
    table.integer('age').notNullable();
    table.integer('phone').notNullable();
    table.string('username').notNullable();
    table.string('bio').notNullable();
    table.string('gender').notNullable();
    table.string('genderPref');
    table.string('pet');
    table.boolean('smoker');
    table.string('language');
    table.string('tabspace');
    table.string('editor');
    table.string('os');
    table.string('photo');
  });
};

exports.down = (knex, Promise) => knex.schema.dropTable('users')
