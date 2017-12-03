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
var AccountComponent = (function () {
    function AccountComponent() {
    }
    AccountComponent = __decorate([
        core_1.Component({
            selector: 'account',
            template: "\n\t\t<div class=\"component\">\n\t\t<h1>Account</h1>\n\t\t\t<p>Username : <!-- {{user.nick}} --></p>\n\t\t\t<div class=\"form-group\">\n\t\t\t<label for=\"comment\">Public key:</label>\n\t\t\t<textarea class=\"form-control\" rows=\"3\" id=\"comment\"><!-- {{user.key.publicKey}} --></textarea>\n\t\t\t</div>\n\t\t\t<p>Unique id : <!--{{user.id}}--></p>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=account.component.js.map