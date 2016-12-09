var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;


 module.exports = function() {

     passport.use(new FacebookStrategy({
             clientID: '1125753470870888',
             clientSecret: '2152eb7f3d686459fe5d5224d1f9abc8',
             callbackURL: 'http://localhost:3000/auth/facebook/callback',
             profileFields: [ 'email', 'name' ]
         },
        function (req, accessToken, refreshToken, profile, done) {

            var user = {};

            user.email = profile.emails[0].value;
            //user.image = profile._json.image.url;
            user.displayName = profile.displayName;

            user.facebook = {};
            user.facebook.id = profile.id;
            user.facebook.token = accessToken;

            done(null, user);
        }));

};