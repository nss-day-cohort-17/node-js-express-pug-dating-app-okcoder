'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const cookieParser = require('cookie-parser');
const flash = require('express-flash');
const { knex } = require('./db/database');

const routes = require('./routes/')

// pug configuration
app.set('view engine', 'pug');

app.locals.website = "okCoder";
app.locals.errors = {};
app.locals.body = {};
app.locals.body.magic = "Foooooo!";

app.use(express.static('public'));

app.use('/',(req, res, next) => {
    res.render('index');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
