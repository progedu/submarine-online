var express = require('express');
var router = express.Router();
var config = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {
    let displayName = 'anonymous';
    let thumbUrl = 'anonymous';
    if (req.user) {
        displayName = req.user.displayName;
        thumbUrl = req.user.photos[0].value;
    }
    res.render('game', { title: '潜水艦ゲーム', displayName: displayName, thumbUrl: thumbUrl, ipAddress: config.ipAddress });
});

module.exports = router;