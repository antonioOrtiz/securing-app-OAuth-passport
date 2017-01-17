var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var User = require('../../models/userModel');



module.exports = function() {

    passport.use(new GitHubStrategy({
            clientID: '74339880c8d5b55c33a0',
            clientSecret: 'ef32ef8b5dcc6249b587d91de2a632a753c388e8',
            callbackURL: 'http://localhost:3000/auth/github/callback',
        },
        function(req, accessToken, refreshToken, profile, done) {
            var query = {
                'github.id': profile.id
            };

            User.findOne(query, function(error, user) {
                if (user) {
                    console.log('found');
                    done(null, user);
                } else {
                    console.log('not found');
                    var user = new User;
                       user.image = profile._json.image.url;
                    user.displayName = profile.displayName;


                    user.github = {};
                    user.github.id = profile.id;
                    user.github.token = accessToken;
                    user.save();
                    done(null, user);
                }
            });
        }));

};
