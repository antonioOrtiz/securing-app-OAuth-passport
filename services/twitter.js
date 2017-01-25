var OAuth = require('OAuth').OAuth;

var Twitter = function (twitterKey, twitterSecret) {
    /* body... */
    var key = twitterKey;
    var secret = twitterSecret;

    var oauth = new OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        key, secret

    );
};
