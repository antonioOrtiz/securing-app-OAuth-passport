var passport = require('passport');
var InstagramStrategy = require('passport-instagram').Strategy;
var User = require('../../models/userModel');



module.exports = function() {

    passport.use(new InstagramStrategy({
            clientID: '2bb176ae087e42b480633b01c4a2609f',
            clientSecret: '6b6b7a5ab158458998fad9fbd34f721a',
            callbackURL: "http://127.0.0.1:3000/auth/instagram/callback"

        },
        function(accessToken, refreshToken, profile, done) {
            var query = {
                'instagram.id': profile.id
            };

            User.findOne(query, function(error, user) {
                if (user) {
                    console.log('found');
                    done(null, user);
                } else {
                    console.log('not found');
                    var user = new User;
                    // user.email = profile.emails[0].value;
                    // user.image = profile._json.image.url;
                    user.displayName = profile.displayName;

                    user.instagram = {};
                    user.instagram.id = profile.id;
                    user.instagram.token = accessToken;
                    user.save();
                    done(null, user);
                }
            });
        }));

};
