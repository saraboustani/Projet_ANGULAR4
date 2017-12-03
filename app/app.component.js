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
var AppComponent = (function () {
    function AppComponent(authenticationService) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.isLogged = [false];
        authenticationService.isLogged$.subscribe(function (isLogged) { return _this.isLogged[0] = isLogged; });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\n\t\t<div class=\"navBar\">\n\t\t\t<ul id=\"navBarList\">\n\t\t\t\t<li id=\"navBarHome\"><a routerLink=\"/login\" routerLinkActive=\"active\" >Home</a></li>\n\t\t\t\t<li *ngIf=\"isLogged[0]\" id=\"navBarItems\"><a routerLink=\"/items\" routerLinkActive=\"active\" >Items</a></li>\n\t\t\t\t<li *ngIf=\"isLogged[0]\" id=\"navBarSearch\"><a routerLink=\"/search\" routerLinkActive=\"active\" >Search</a></li>\n\t\t\t\t<li *ngIf=\"isLogged[0]\" id=\"navBarMesages\"><a routerLink=\"/messages\" routerLinkActive=\"active\" >Messages</a></li>\n\t\t\t\t<li *ngIf=\"isLogged[0]\" id=\"navBarContracts\"><a routerLink=\"/contracts\" routerLinkActive=\"active\" >Contracts</a></li>\n\t\t\t\t<li *ngIf=\"isLogged[0]\" id=\"navBarSettings\"><a routerLink=\"/settings\" routerLinkActive=\"active\" >Settings</a></li>\n\t\t\t\t<li *ngIf=\"isLogged[0]\" id=\"navBarAccount\"><a routerLink=\"/account\" routerLinkActive=\"active\" >Account</a></li>\n\t\t\t\t<li *ngIf=\"isLogged[0]\" id=\"navBarAbout\"><a routerLink=\"/about\" routerLinkActive=\"active\" >About</a></li>\n\t\t\t\t<li *ngIf=\"isLogged[0]\" id=\"navBarLogout\"><a routerLink=\"/logout\" routerLinkActive=\"active\" >Logout</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"content\" >\n      <alert></alert>\n\t     <router-outlet ></router-outlet>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [index_1.AuthenticationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map