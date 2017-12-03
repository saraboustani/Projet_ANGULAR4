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
var index_2 = require('./_services/index');
var router_1 = require('@angular/router');
var NewMessageComponent = (function () {
    function NewMessageComponent(router, messageService, alertService, itemService) {
        this.router = router;
        this.messageService = messageService;
        this.alertService = alertService;
        this.itemService = itemService;
        this.model = {};
        this.pathFile = null;
        //user: currentUser;
        this.loading = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    NewMessageComponent.prototype.send = function () {
        var _this = this;
        this.loading = true;
        this.messageService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Adding successful', true);
            _this.router.navigate(['/messages']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    NewMessageComponent.prototype.openFile = function () { };
    NewMessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'newmessage',
            template: "\n<div class=\"header\">\n            <h1 id=\"mainTitle\">Send a Message</h1>\n            <div><a class=\"headerButton\" [routerLink]=\"['/messages']\">< Back</a></div>\n    </div>\n\n<div class=\"col-md-6 col-md-offset-3\">\n    <h2>write a new message</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && send()\" #f=\"ngForm\" novalidate>\n     \n\t   <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !fromId.valid }\">\n            <label for=\"fromId\"> your username </label>\n            <input type=\"text\" class=\"form-control\" name=\"fromId\" [(ngModel)]=\"model.fromId\" #fromId=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !fromId.valid\" class=\"help-block\">your username is required</div>\n        </div>\n\n\n\n\t   <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !forId.valid }\">\n            <label for=\"forId\"> To :  </label>\n            <input type=\"text\" class=\"form-control\" name=\"fromId\" [(ngModel)]=\"model.forId\" #forId=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !forId.valid\" class=\"help-block\"> To is required</div>\n        </div>\n\n\n\n\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !body.valid }\">\n            <label for=\"body\">Your Message</label>\n            <input type=\"text\" class=\"form-control\" name=\"body\" [(ngModel)]=\"model.body\" #body=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !body.valid\" class=\"help-block\">Message is required</div>\n        </div>\n\n\n       \n\n        <div class=\"form-group\" style=\"padding-top:20px\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Submit</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/messages']\" class=\"btn btn-link\">Cancel</a>\n        </div>\n    </form>\n</div>\n",
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_2.MessageService, index_1.AlertService, index_1.ItemService])
    ], NewMessageComponent);
    return NewMessageComponent;
}());
exports.NewMessageComponent = NewMessageComponent;
//# sourceMappingURL=newmessage.component.js.map