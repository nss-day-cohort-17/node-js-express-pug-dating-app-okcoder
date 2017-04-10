# okCoder

## okCoder is a dating website built using ExpressJS and Pug

## About

After months without any success in the dating app market, we have decided to rebrand our app and build it from the ground up. Using all of our Express skills, we've decided to create a server side app with user authentication, a PostgreSQL database, and PugJS for the view engine.

1. The home page for a user will list all available users profiles.

1. When a user first registers, they will be prompted to create a dating profile with personal information, likes and dislikes, etc.

1. A user will be able to browse all users and "like" a user who could be a potential date.

1. A user can view all of their liked choices from the "pending" page.

1. A user will login and be taken to their home page.


## Technologies

1. Use Knex, Bookshelf and PostgreSQL for the database and database ORM.

<img src="img/techs/knex.png" width="200px" />
<img src="img/techs/bookshelf-icon.png" width="200px" />
<img src="img/techs/postgres.png" width="200px" />


1. `Pug` as the view engine.

<img src="img/techs/pug.png" />

1. For session persistence we have used the following technologies: `express-session`, `passport`, `passport-local`, `connect-session-knex`.

<img src="img/techs/express.png" width="200px" />
<img src="img/techs/passport.png" width="200px" />

1. Using `bookshelf-bcrypt` and `bcrypt`, we authenticate the users credentials on login and registration.

## ERD
<img src="img/okcoder_ERD.png" />

## mock-ups
<img src="img/mockups/home.png" />
<img src="img/mockups/matches.png" />
<img src="img/mockups/pending.png" />
<img src="img/mockups/profile.png" />
<img src="img/mockups/login.png" />
<img src="img/mockups/register-prof.png" />
<img src="img/mockups/register-pref.png" />
