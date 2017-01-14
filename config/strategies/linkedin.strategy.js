var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin').Strategy;


module.exports = function() {

    passport.use(new LinkedInStrategy({
            consumerKey: '77z7e2bq34ad0w',
            consumerSecret: 'ajTJfuNTxLnDGlCK',
            callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
        },
        function(token, tokenSecret, profile, done) {
            var user = {};
            // user.email = profile.emails[0].value;
            // user.image = profile._json.image.url;
            user.displayName = profile.displayName;

            user.linkedin = {};
            user.linkedin.id = profile.id;
            user.linkedin.token = tokenSecret;
            done(null, user);
        }));

};
