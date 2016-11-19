 var passport = require('passport'),
     GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


 module.exports = function() {

     passport.use(new GoogleStrategy({
             clientID: '28540992152-8ec10ajum8fobgsgubfdgqupgctb747d.apps.googleusercontent.com',
             clientSecret: 'pebfG-9OQ2r1Jj1pbeVYfu02',
             callbackURL: 'http://localhost:3000/auth/google/callback'
         },
         function(req, accessToken, refreshToken, profile, done) {
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
