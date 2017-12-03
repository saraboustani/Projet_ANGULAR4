"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var index_1 = require('./_services/index');
var router_1 = require('@angular/router');
var MessagesComponent = (function () {
    function MessagesComponent(messageService, router) {
        this.messageService = messageService;
        this.router = router;
        //users: User[] = [];
        this.messages = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.loadAllMessages();
        //console.log("clause length"+this.contracts.length);
    }
    MessagesComponent.prototype.ngOnInit = function () {
        this.loadAllMessages();
    };
    MessagesComponent.prototype.deleteMessage = function (id) {
        var _this = this;
        this.messageService.delete(id).subscribe(function () { _this.loadAllMessages(); });
    };
    MessagesComponent.prototype.loadAllMessages = function () {
        var _this = this;
        this.messageService.getAll().subscribe(function (messages) { _this.messages = messages; });
    };
    MessagesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'messages',
            styles: ["\n         #tableCustomers {\n            font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n            border-collapse: collapse;\n\t     position: relative;\n   \t    top: 30px;\n            width: 100%;\n        }\n\n        #tableCustomers td, #customers th {\n            border: 1px solid #ddd;\n            padding: 8px;\n        }\n\n        #tableCustomers tr:nth-child(even){background-color: #f2f2f2;}\n\n        #tableCustomers tr:hover {background-color: #ddd;}\n\n        #tableCustomers th {\n            padding-top: 12px;\n            padding-bottom: 12px;\n            padding-left: 8px;\n            background-color: #4CAF50;\n            color: white;\n        }\n    "],
            template: "\n    <div class=\"header\">\n            <h1 id=\"mainTitle\">Messages</h1>\n            <div><a class=\"headerButton\" [routerLink]=\"['/newmessage']\">+ New</a></div>\n    </div>\n\n \n    \t\t\t<ul>\n\t  <table id=\"tableCustomers\">\n\t\t\t\t<th> </th>\n\t\t\t\t<th> From</th>\n\t\t\t\t<th>Send to</th>\n\t\t\t\t<th>Message</th>\n\t\t\t\t\n\t\t\t\n                \t<tr *ngFor=\"let message of messages\">\n\t\t\t<td *ngIf=\"message.forId==currentUser.username || message.fromId==currentUser.username\"> {{message.id}} </td>\n\t\t\t<td *ngIf=\"message.fromId==currentUser.username || message.forId==currentUser.username \">  {{message.fromId}} </td>\n\t\t\t<td *ngIf=\"message.forId==currentUser.username || message.fromId==currentUser.username\">   {{message.forId}} </td>\n\t\t\t<td *ngIf=\"message.forId==currentUser.username || message.fromId==currentUser.username\"> {{message.body}} </td>\n\t\t\n                     <td *ngIf=\"message.forId==currentUser.username || message.fromId==currentUser.username\"> \n                      <a (click)=\"deleteMessage(message.id)\">Delete</a>  </td>\t\n\t\t\t</tr>\n\t\t\n           \n\t\t\n       \n</table> </ul>\n\n  "
        }), 
        __metadata('design:paramtypes', [index_1.MessageService, router_1.Router])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;
//# sourceMappingURL=messages.component.js.map