var express = require('express');
var router = express.Router();
var facebook = require('../services/facebook')
('1125753470870888', '2152eb7f3d686459fe5d5224d1f9abc8');

router.use('/', function(req, res, next){
    if(!req.user) {
        res.redirect('/');
    }
    next();
});

/* GET users listing. */
router.get('/', function(req, res) {
    if (req.user.facebook) {
        facebook.getImage(req.user.facebook.token, function (results) {
            /* body... */
            req.user.facebook.image = results.url;
            res.render('users', {user: req.user});
        });
    } else {
        res.render('users', {user: req.user});
    }
});

module.exports = router;
