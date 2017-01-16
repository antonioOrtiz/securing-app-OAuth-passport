var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var User = require('../../models/userModel');



module.exports = function() {

    passport.use(new TwitterStrategy({
            consumerKey: '9V3uHVokBQ99aMUQYyDKJJCbD',
            consumerSecret: 'NOOqcOgDKw6fz1mghpBCNzjOEiXBZhHpWRD69JlSw7qCNpUvU0',
            callbackURL: 'http://localhost:3000/auth/twitter/callback',
            passReqToCallback: true
        },
        function(req, token, tokenSecret, profile, done) {
            var query = {
                    'twitter.id': profile.id
                };

            User.findOne(query, function(error, user) {
                if (user) {
                    console.log('found');
                    done(null, user);
                } else {
                    console.log('not found');
                    var user = new User;
                    // user.email = profile.emails[0].value;
                    user.image = profile._json.profile_image_url;
                    user.displayName = profile.displayName;

                    user.twitter = {};
                    user.twitter.id = profile.id;
                    user.twitter.token = token;

                    user.save();
                    done(null, user);
                }
            });

        }
    ));
};
