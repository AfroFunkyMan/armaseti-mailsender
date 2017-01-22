var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/unsubscribe/:id', function(req, res, next) {
    res.render('unsubscribe', { title: 'Express' });
});



module.exports = router;
