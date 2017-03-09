var express = require('express');
var router = express.Router();
let MongoClient = require('mongodb').MongoClient;
let ObjectID = require('mongodb').ObjectID;
let contacts, campaigns;
MongoClient.connect('mongodb://localhost:27017/mailsender', function (err, db) {
    console.log("Connected correctly to server");
    contacts = db.collection('contacts');
    campaigns = db.collection('campaign');
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/unsubscribe/:id', function(req, res, next) {
    unsubThatID(req.params.id);
    res.render('unsubscribe', { title: 'Express' });
});



router.get('/tracker/:contact/:campaign', function (req, res, next) {
    var contact = req.params.contact,
        campaign = req.params.campaign;
    saveOpenAction(contact, campaign);
    res.set('Content-Type', 'image/gif');
    res.set('Connection', 'close');
    res.send(new Buffer.from('R0lGODdhAQABAIAAAP///////ywAAAAAAQABAAACAkQBADs=','base64'));
});


function saveOpenAction(contactID, campaignID) {
    let contactObjID = '';
    let campaignObjID = '';
    try {
        let contactObjID = ObjectID(contactID);
        let campaignObjID = ObjectID(campaignID);
    }
    catch (err) {
        console.log(err);
    }
    if (contactObjID !== '' && campaignObjID !== ''){
        campaigns.findOne({ _id: campaignObjID}, function (err, campaign) {
            if (campaign) {
                contacts.updateOne({_id: contactObjID}, {
                    $push: {
                        action: 'open',
                        target: campaignObjID,
                        timestamp: new Date()
                    }
                });
            }
        });
    }
}

function unsubThatID(id) {
    let _id = '';
    try {
        _id = ObjectID(id);
    } catch (err) {
        return null;
    }
    if (_id !== '') {
        contacts.updateOne({"_id": _id},
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
        });
    }
}
module.exports = router;
