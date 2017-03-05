var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AppSocketService } from '../app-socket.service';
import { Rate } from './campaign.interface.model';
export var CampaignComponent = (function () {
    function CampaignComponent(appSocketService) {
        this.appSocketService = appSocketService;
        this.subsCountSum = 0;
        this.lists = [
            {
                _id: '1',
                name: 'Список контактов по запорной арматуре',
                create: new Date,
                rate: Rate.MidHi[Rate.MidHi],
                subsCount: 1,
                checked: false
            }];
        this.templates = [
            {
                _id: 1,
                name: "First template",
                create: new Date,
                lastUpdate: new Date,
                checked: false,
            },
            {
                _id: 2,
                name: "Second template",
                create: new Date,
                lastUpdate: new Date,
                checked: false,
            }
        ];
        this.formData = {
            lists: [],
            template: '',
            fields: {
                companyName: '',
                subject: '',
                fromName: '',
                fromEmail: ''
            }
        };
        this.number = this.appSocketService.number;
    }
    CampaignComponent.prototype.selectList = function (id) {
        if (this.formData.lists.indexOf(id) > -1)
            this.formData.lists.splice(this.formData.lists.indexOf(id), 1);
        else
            this.formData.lists.push(id);
        console.log(this.formData.lists);
        this.subsCountSum = this.lists.reduce(function (sum, current) {
            if (current.checked)
                return sum + current.subsCount;
            else
                return sum;
        }, 0);
    };
    CampaignComponent.prototype.selectTemplate = function (template) {
        var _this = this;
        this.templates.forEach(function (templateItem) {
            if (templateItem._id === template._id) {
                templateItem.checked = true;
                _this.formData.template = templateItem._id;
                console.log(_this.formData.template);
            }
            else
                templateItem.checked = false;
        });
    };
    CampaignComponent.prototype.checkAndSendData = function () {
        if (this.formData.lists.length === 0)
            return alert('Вы не выбрали!');
        if (this.formData.template === '')
            return alert('U not select Template!');
        if (this.formData.fields.companyName === '')
            return alert('U not input Company Name');
        if (this.formData.fields.fromEmail === '')
            return alert('U not select from Email!');
        if (this.formData.fields.fromName === '')
            return alert('U not select from Name!');
        if (this.formData.fields.subject === '')
            return alert('U not select Subject!');
        else {
            this.appSocketService.sendFormData(this.formData);
            alert('All right!');
        }
    };
    CampaignComponent.prototype.getLists = function () {
        this.number = this.appSocketService.getLists();
    };
    CampaignComponent.prototype.ngOnInit = function () {
        console.log('call on 96');
        this.getAllData();
    };
    CampaignComponent.prototype.getAllData = function () {
        console.log('call on 100');
        var _this = this;
        setTimeout(function () {
            _this.appSocketService.getAllData(function (lists, temp) {
                _this.lists = lists;
                _this.templates = temp;
            });
        }, 1000);
    };
    CampaignComponent = __decorate([
        Component({
            selector: 'app-campaign',
            templateUrl: './campaign.component.html',
            styleUrls: ['./campaign.component.css']
        }), 
        __metadata('design:paramtypes', [AppSocketService])
    ], CampaignComponent);
    return CampaignComponent;
}());
