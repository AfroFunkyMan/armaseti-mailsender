var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import * as IO from 'socket.io-client';
export var AppSocketService = (function () {
    function AppSocketService() {
        var _this = this;
        this.host = 'http://prodazha-optom.ru:2563';
        this.number = 42;
        this.socket = IO.connect(this.host);
        this.socket.on("connect", function () { return _this.connect(); });
        this.socket.on("disconnect", function () { return _this.disconnect(); });
        this.socket.on("error", function (error) {
            console.log("ERROR: \"" + error + "\" (" + _this.host + ")");
        });
    }
    AppSocketService.prototype.test = function (name) {
        this.number = name;
        console.log(this.number);
    };
    AppSocketService.prototype.getLists = function () {
        return this.number;
    };
    AppSocketService.prototype.sendFormData = function (data) {
        this.socket.emit('data', data);
    };
    AppSocketService.prototype.getAllData = function (callback) {
        console.log('call on 33 in socket');
        this.socket.emit('get-all-data', '', function (lists, templates) {
            console.log('call on 35 in socket');
            return callback(lists, templates);
        });
    };
    // Handle connection opening
    AppSocketService.prototype.connect = function () {
        console.log("Connected to \"" + this.host + "\"");
        // Request initial list when connected
        this.test(this.number);
    };
    // Handle connection closing
    AppSocketService.prototype.disconnect = function () {
        console.log("Disconnected from \"" + this.host + "\"");
    };
    AppSocketService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppSocketService);
    return AppSocketService;
}());
