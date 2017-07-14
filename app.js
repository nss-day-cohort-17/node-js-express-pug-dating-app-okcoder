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
const routes = require('./routes/');

// pug configuration
app.set('view engine', 'pug');

app.locals.website = "okCoder";
app.locals.errors = {};
app.locals.body = {};
app.locals.body.magic = "Foooooo!";

app.use(cookieParser('okCoder'));
app.use(session({cookie: {maxAge: 600000}, secret: 'okCoder', resave: true, saveUninitialized: false}));
app.use(flash());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
  store: new KnexSessionStore({
    knex,
    tablename: 'sessions'
  }),
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET || 'okcodersecretkey'
}));

require('./lib/passport-strategies')
app.use(passport.initialize())
app.use(passport.session())

app.use( (req, res, next) => {
  app.locals.email = req.user && req.user.email
  app.locals.id = req.user && req.user.id
  res.locals.email = app.locals.email
  res.locals.id = app.locals.id
  next()
})

app.use(express.static('public'));

app.use(routes)



const port = process.env.PORT || 8085;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
