 var passport = require('passport'),
     TwitterStrategy = require('passport-twiiter').Strategy;


 module.exports = function() {

     passport.use(new TwitterStrategy({
             consumerKey: '',
             consumerSecret: 'pebfG-9OQ2r1Jj1pbeVYfu02',
             callbackURL: '',
             passReqToCallback: true
         },
         function(req, token, tokenSecret, profile, done) {
             var user = {};
             user.email = profile.emails[0].value;
             user.image = profile._json.image.url;
             user.displayName = profile.displayName;

             user.google = {};
             user.google.id = profile.id;
             user.google.token = accessToken;
             done(null, user);

         }
     ));
 };
