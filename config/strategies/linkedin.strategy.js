var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin').Strategy;
var User = require('../../models/userModel');



module.exports = function() {

    passport.use(new LinkedInStrategy({
            consumerKey: '77z7e2bq34ad0w',
            consumerSecret: 'ajTJfuNTxLnDGlCK',
            callbackURL: "http://localhost:3000/auth/linkedin/callback"
        },
        function(req, token, tokenSecret, profile, done) {
            var query = {
                'linkedin.id': profile.id
            };

            User.findOne(query, function(error, user) {
                if (user) {
                    console.log('found');
                    done(null, user);
                } else {
                    console.log('not found');
                    var user = new User;
                    user.email = profile.emails[0].value;
                    user.image = profile._json.image.url;
                    user.displayName = profile.displayName;

                    user.linkedin = {};
                    user.linkedin.id = profile.id;
                    user.linkedin.token = accessToken;
                    user.save();
                    done(null, user);
                }
            });


        }));

};
