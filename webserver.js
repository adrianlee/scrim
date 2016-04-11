// Express
var express = require('express');
var app = express();
var router = express.Router();

// Session
var session = require('express-session')
var RedisStore = require('connect-redis')(session);

// Passport
var passport = require('passport');
var SteamStrategy = require('passport-steam').Strategy;

// Postgres
var pg = require('pg');
var PG_CONNECTION_STRING = "postgres://bdoynxivzpqptc:zhvZRCXISqRmzkaJeZK9w0I0DO@ec2-54-204-12-25.compute-1.amazonaws.com:5432/d48sfpfmcshk59" + '?ssl=true';

// Misc
var steam = require('steamidconvert')();

app.set('port', (process.env.PORT || 3000));
app.set('hostname', (process.env.HOSTNAME ? "http://" + process.env.HOSTNAME : "http://localhost:" + app.get("port")));

// Session middleware
app.use(session({
    store: new RedisStore({
      url: 'redis://rediscloud:7xXUn2UBLShLX9EG@pub-redis-15650.us-east-1-4.3.ec2.garantiadata.com:15650'
    }),
    secret: 'csgoscrimftw2016',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Passport session setup
// Executed on login
passport.serializeUser(function(user, done) {
  // console.log("serializeUser", user);
  done(null, user);
});

// Executed on every request
passport.deserializeUser(function(obj, done) {
  // console.log("deserializeUser", obj)
  done(null, obj);
});

passport.use(new SteamStrategy({
    returnURL: app.get('hostname') + '/auth/steam/return',
    realm: app.get('hostname') + '/',
    apiKey: '20087C97D27C353C48D3EB5CBF8F7B19',
    stateless: true
  },
  function(identifier, profile, done) {
    if (!profile) {
      return err("profile is missing")
    }

    // Check if user exists, if not create user. Return steamid64 afterwards.
    // We should return the user id instead.
    pg('users')
      .where({
        steamid64: profile.id,
      })
      .first()
      .returning('id')
      .then(function (user) {
        console.log(user);
        if (user) {
          !process.env.NODE_ENV && console.log("Found user", user.id);
          return done(null, user.id);
        } else {
          var userArgs = {
            alias: profile.displayName,
            steamid: steam.convertToText(profile.id),
            steamid64: profile.id,
            avatar: profile.photos && profile.photos[1] && profile.photos[1].value || null
          };

          pg.insert(userArgs)
            .into('users')
            .returning('id')
            .then(function (user) {
              !process.env.NODE_ENV && console.log("Creating user", user[0]);
              done(null, user[0]);
            })
            .catch(function(error) {
              done(error);
            });
        }
      })
      .catch(function(error) {
        done(error);
      });
  }
));

/**
* Passport endpoints
*/
app.get('/auth/steam',
  passport.authenticate('steam'),
  function(req, res) {
    // The request will be redirected to Steam for authentication, so
    // this function will not be called.
  });

app.get('/auth/steam/return',
  passport.authenticate('steam', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


/**
* SPA
*/
app.get('/', function(req, res){
  if (!req.isAuthenticated())
    return res.sendFile(__dirname + '/public/landing.html');

  res.sendFile(__dirname + '/public/');
});

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

var server = app.listen(app.get('port'), function () {
  console.log('CSGOSCRIM web app listening at http://%s', app.get('hostname'));
});

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}
function ensureAuthenticatedAPI(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.sendStatus(400);
}

app.use(express.static('public'));

app.get('/auth/steam',
  passport.authenticate('steam'),
  function(req, res) {
    // The request will be redirected to Steam for authentication, so
    // this function will not be called.
  });

app.get('/auth/steam/return',
  passport.authenticate('steam', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

process.on('uncaughtException', function(err) {
    // handle the error safely
    console.log(err)
})

/**
* API
*/
app.get('/users', ensureAuthenticatedAPI, function(req, res) {
  pg('users')
    .where({
      id: req.user
    })
    .first()
    .then(function (user) {
      console.log("/profile", user);

      var profile = {};
      profile.alias = user.alias;
      profile.avatar = user.avatar;
      profile.profileurl = user.profileurl;
      profile.steamid = user.steamid;
      profile.created_at = user.created_at;

      res.json(profile);
    })
    .catch(function(error) {
      console.error(error);
      res.sendStatus(400);
    });
});

app.get('/users/all', ensureAuthenticatedAPI, function(req, res) {
  pg('users')
    // .where({
    // })
    .then(function (users) {
      console.log("/profile", users);

      console.log(users);

      // var profile = {};
      // profile.alias = user.alias;
      // profile.avatar = user.avatar;
      // profile.profileurl = user.profileurl;
      // profile.steamid = user.steamid;
      // profile.created_at = user.created_at;

      res.json(users);
    })
    .catch(function(error) {
      console.error(error);
      res.sendStatus(400);
    });
});

/**
* Postgres
*/
var knex = require('knex');
var pg = knex({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING || PG_CONNECTION_STRING,
  searchPath: 'knex,public',
  debug: true
}); 
