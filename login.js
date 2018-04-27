const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');

const CALLBACK_URL = 'http://localhost:3000/callback';
const OAUTH_RESOURCE_ID = 'https://api.haufe-lexware.com';
const OAUTH_CLIENT_ID = 'FoundServ';

const OAuthStrategy = new OAuth2Strategy(
  {
    authorizationURL: 'https://identity.haufe.com/adfs/oauth2/authorize',
    tokenURL: 'https://identity.haufe.com/adfs/oauth2/token',
    clientID: OAUTH_CLIENT_ID,
    clientSecret: 'shhh-its-a-secret',
    callbackURL: CALLBACK_URL,
  },
  (accessToken, refreshToken, profile, done) => {
    if (refreshToken) {
      console.log(
        'Received but ignoring refreshToken (truncated)',
        refreshToken.substr(0, 25)
      );
    } else {
      console.log('No refreshToken received');
    }

    console.log(profile);

    done(null, profile);
  }
);

OAuthStrategy.authorizationParams = (options) => ({
  resource: OAUTH_RESOURCE_ID,
});
OAuthStrategy.userProfile = (accessToken, done) => {
  done(null, jwt.decode(accessToken));
};

passport.use(OAuthStrategy);
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

const Router = express.Router();
const SessionHandler = session({
  secret: 'bugsbunny',
  resave: true,
  saveUninitialized: true,
});

Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({extended: false}));
Router.use(cookieParser());
Router.use(SessionHandler);
Router.use(passport.initialize());
Router.use(passport.session());

const providerAuth = passport.authenticate('oauth2');

Router.get('/login', providerAuth, login);
Router.get('/callback', providerAuth, login);
Router.get('/logout', logout);

Router.get('/session', (req, res) => {
  res.contentType('application.json');
  res.send(JSON.stringify(req.session));
});

function check(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
}

function login(req, res) {
  if (req.user) {
      req.session.accessToken = req.user;
  }

  res.redirect('/react');
}

function logout(req, res) {
  req.session = null;
  res.redirect('/login');
}

module.exports = {Router, check};
