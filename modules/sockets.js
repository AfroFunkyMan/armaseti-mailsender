const io = require('socket.io')(3001);
const emailSender = require('./email');
io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
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