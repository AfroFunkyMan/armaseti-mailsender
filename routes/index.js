var express = require('express');
var router = express.Router();
let MongoClient = require('mongodb').MongoClient;
let ObjectID = require('mongodb').ObjectID;
let db;
MongoClient.connect('mongodb://localhost:27017/mailsender', function (err, db) {
    console.log("Connected correctly to server");
    db = db;
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/unsubscribe/:id', function(req, res, next) {
    unsubThatID(req.params.id);
    res.render('unsubscribe', { title: 'Express' });
});

function unsubThatID(id) {
    let _id = '';
    try {
        _id = ObjectID(id);
    } catch (err) {
        return null;
    }
    if (_id !== '') {
        return db.collection('statistic').updateOne({"_id": _id},
            {
                $set: {
                    status: 'unsubscribe'
                },
                $push: {
                    action: 'unsubscribe',
                    timestamp: new Date()
                }
            }, function (err, resp) {
            return null;
        })
    }
}

module.exports = router;
