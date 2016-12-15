var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;


module.exports = function() {

    passport.use(new GitHubStrategy({
            clientID: '74339880c8d5b55c33a0',
            clientSecret: 'ef32ef8b5dcc6249b587d91de2a632a753c388e8',
            callbackURL: 'http://localhost:3000/auth/github/callback',
        },
  function(token, tokenSecret, profile, done) {
           var user = {};
            // user.email = profile.emails[0].value;
            // user.image = profile._json.image.url;
            user.displayName = profile.displayName;

            user.github = {};
            user.github.id = profile.id;
            user.github.token = tokenSecret;
            done(null, user);
        }));

};
