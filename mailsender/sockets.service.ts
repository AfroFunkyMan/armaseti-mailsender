import socket from 'socket.io';

import { ClientDatabaseService } from 'database/lists.database';


const io = socket(3001);
const emailSender = require('./email');

io.on('connection', function (socket) {

    //TODO get Lists
    //TODO get List
    //TODO post List
    //TODO update List
    //TODO get Templates
    //TODO get Template
    //TODO post Template
    //TODO update Template
    //TODO get Clients
    //TODO get Client
    //TODO post Client
    //TODO update Client
    //TODO send Test
    //TODO send Capmaign

    socket.on('Lists:get', function (query, callback) {
        ClientDatabaseService.getLists(query, function (lists) {
            return callback(lists);
        });
    });
    socket.on('List:get', function (query, callback) {
        ClientDatabaseService.getList(query, function (list) {
            return callback(list);
        });
    });
    socket.on('List:post', function (newList, callback) {
        ClientDatabaseService.createList(newList, function (list) {
            return callback(list);
        });
    });
    socket.on('List:update', function (query, callback) {
        ClientDatabaseService.updateList(query, function (list) {
            return callback(list);
        });
    });
    socket.on('Clients:get', function (query, callback) {

    });
    socket.on('Client:get', function (query, callback) {

    });
    socket.on('Client:post', function (query, callback) {

    });
    socket.on('Client:update', function (query, callback) {

    });
    socket.on('Templates:get', function (query, callback) {

    });
    socket.on('Template:get', function (query, callback) {

    });
    socket.on('Template:post', function (query, callback) {

    });
    socket.on('Template:update', function (query, callback) {

    });
    socket.on('Email:send:test', function (query, callback) {

    });
    socket.on('Email:send:ampaing', function (query, callback) {

    });


    socket.on('Lists:get', function (callback) {

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