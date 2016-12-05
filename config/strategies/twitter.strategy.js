 var passport = require('passport'),
     TwitterStrategy = require('passport-twiiter').Strategy;


 module.exports = function() {

     passport.use(new TwitterStrategy({
             consumerKey: '8eCNHmmd8zirh7ReEmlSq4pQi',
             consumerSecret: 'j63anLdeAaIUhSQJJSljJ3L1hGSaqH4fUMpeWYi9X7WWC0Ogjb',
             callbackURL: 'http://localhost.com/twitter/callback',
             passReqToCallback: true
         },
         function(req, token, tokenSecret, profile, done) {
             var user = {};

             user.email = profile.emails[0].value;
             user.image = profile._json.image.url;
             user.displayName = profile.displayName;

             user.twitter = {};
             user.twitter.id = profile.id;
             user.twitter.token = accessToken;
             done(null, user);

         }
     ));
 };
