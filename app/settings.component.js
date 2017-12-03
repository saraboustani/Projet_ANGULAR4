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
var SettingsComponent = (function () {
    function SettingsComponent() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    SettingsComponent = __decorate([
        core_1.Component({
            selector: 'settings',
            template: "\n\t<div class=\"header\">\n            <h1 id=\"mainTitle\">Settings</h1>\n    </div>\n\n\t<div class=\"component\">\n\n\t<h1>Settings</h1>\n\t<div> <p>Account name : {{currentUser.firstName}}</p> </div>\n\t  <button [routerLink]=\"['/change-password']\" class=\"btn btn-primary\">Change password</button>\n\t</div>\n",
        }), 
        __metadata('design:paramtypes', [])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map