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
var router_1 = require('@angular/router');
var index_1 = require('./_services/index');
var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log("password:" + this.currentUser.password + " " + "username:" + this.currentUser.username + " id:" + this.currentUser.id);
        this.model.id = this.currentUser.id;
        //this.model.firstName=this.currentUser.firstName;
        //this.model.lastName=this.currentUser.lastName;
        //this.model.username=this.currentUser.username;
    }
    ChangePasswordComponent.prototype.register = function () {
        var _this = this;
        //console.log(this.model.id+" "+this.model.firstName+" "+this.model.lastName+" "+this.model.username+" "+this.model.password);
        this.loading = true;
        this.userService.update(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/settings']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    }; //Ne fonctionne pas, à corriger
    ChangePasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'change-password',
            template: "\n\t<div class=\"header\">\n    \t        <h1 id=\"mainTitle\">Settings</h1>\n        \t    <div><a class=\"headerButton\" [routerLink]=\"['/settings']\">< Back</a></div>\n\t</div>\n\n\t<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Change Password</h2>\n\t<form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                <label for=\"password\">Actual password</label>\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"actualPassword\" #password=\"ngModel\" required />\n                <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Actual password is required</div>\n                \n        </div>\n\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n    \t        <label for=\"password\">New password</label>\n        \t    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            \t<div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">New password is required</div>\n\t    </div>\n    \t<div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n        \t    <label for=\"password\">Confirm password</label>\n            \t<input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"confirmation\" #password=\"ngModel\" required />\n\t            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password confirmation is required</div>\n                <div *ngIf=\"f.submitted && model.password!=confirmation\" class=\"help-block\">Password confirmation failed</div>\n    \t</div>\n\n   \t \t<div class=\"form-group\">\n    \t        <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n        \t    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            \t<a [routerLink]=\"['/settings']\" class=\"btn btn-link\">Cancel</a>\n       \t</div>\n   \t</form>\n\t</div>\n\n\t"
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.UserService, index_1.AlertService])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
exports.ChangePasswordComponent = ChangePasswordComponent;
//# sourceMappingURL=change-password.component.js.map