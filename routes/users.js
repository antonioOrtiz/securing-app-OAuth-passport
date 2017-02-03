var express = require('express');
var router = express.Router();
var facebook = require('../services/facebook')('1125753470870888', '2152eb7f3d686459fe5d5224d1f9abc8');
var twitter = require('../services/twitter')('9V3uHVokBQ99aMUQYyDKJJCbD', 'NOOqcOgDKw6fz1mghpBCNzjOEiXBZhHpWRD69JlSw7qCNpUvU0');


router.use('/', function (req, res, next) {

        if (!req.user) {
            res.redirect('/');
        }
        next();
    })
    /* GET users listing. */

router.use('/', function(req,res,next){
    if(req.user.twitter)
    {
        twitter.getTimeline(req.user.twitter.token,
                            req.user.twitter.tokenSecret,
                            req.user.twitter.id,
                           function(results){
                                req.user.twitter.lastPost = results[0].text;
                                next();
                            })
    }
})
router.get('/', function (req, res) {
    console.log(req.user);
    if (req.user.facebook) {
        console.log('if facebook');
        facebook.getImage(req.user.facebook.token,
            function (imageUrl) {
                console.log('got data');
                console.log(imageUrl);
                req.user.facebook.image = imageUrl;
                facebook.getFriends(req.user.facebook.token,
                    function (results) {
                        
                        console.log(results);
                    req.user.friends = results.total_count;
                        res.render('users', {
                            user: req.user
                        });
                    }
                )
            });
        } else {
            res.render('users', {
                user: req.user
            });
        }

    }
);


        module.exports = router;