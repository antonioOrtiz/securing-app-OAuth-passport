var OAuth = require('OAuth').OAuth2;

var Facebook = function (facebookKey, facebookSecret) {
    /* body... */
    var key = facebookKey,
        secret = facebookSecret,

        oauth = new OAuth(
            key, secret, 'https://graph.facebook.com',
            null,
            'oauth2/token',
            null

        );
        var getImage = function (userKey, done) {
            /* body... */
            oauth.get('https://graph.facebook.com/v2.8/me/picture?redirect=false&type=large',
                userKey,
                function(err, results, res){
                    results = JSON.parse(results);
                    done(results.data);
                }
            );
        };
        return {
            getImage : getImage
        }
};



module.exports = Facebook;