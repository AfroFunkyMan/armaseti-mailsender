const io = require('socket.io')(3001);
const emailSender = require('./email');

const MongoClient = require('mongodb').MongoClient;

let db;
const url = 'mongodb://localhost:27017/myproject';
MongoClient.connect(url, function(err, dbs) {
    db = dbs;
    console.log("Connected correctly to server");
});


io.on('connection', function (socket) {
    console.log('connectt');
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });


    setInterval(function () {
       socket.emit('Test:emit', Math.random());
    }, 2000);

    socket.on('Lists:get', function (callback) {
       // dbs.collection('lists').find({}).toArray(err, lists => {
       //     if (err) return callback(true, err);
       //     return callback(false, lists);
       // })

        return callback([
            {id: 11, name: 'Mr. Nice'},
            {id: 12, name: 'Narco'},
            {id: 13, name: 'Bombasto'},
            {id: 14, name: 'Celeritas'},
            {id: 15, name: 'Magneta'},
            {id: 16, name: 'RubberMan'},
            {id: 17, name: 'Dynama'},
            {id: 18, name: 'Dr IQ'},
            {id: 19, name: 'Magma'},
            {id: 20, name: 'Tornado'}
        ])
    });


    socket.on('send:test', function () {
        emailSender.sendMail({
            from: 'sale@prodazha-optom.ru',
            to: 'ruslan.armaseti@yandex.ru',
            subject: 'Message title',
            text: 'Plaintext version of the message'
        });
    })
});