var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin').Strategy;


module.exports = function() {

    passport.use(new LinkedInStrategy({
            consumerKey: '77z7e2bq34ad0w',
            consumerSecret: 'ajTJfuNTxLnDGlCK',
            callbackURL: 'http://localhost:3000/auth/linkedin/callback',
        },
        function(token, tokenSecret, profile, done) {

            User.findOrCreate({ linkedinId: profile.id }, function(err, user) {
                return done(err, user);
            });

            done(null, user);
        }));

};
