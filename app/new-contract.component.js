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
var index_2 = require('./_models/index');
var NewContractComponent = (function () {
    function NewContractComponent(router, contractService, alertService, userService, itemService) {
        this.router = router;
        this.contractService = contractService;
        this.alertService = alertService;
        this.userService = userService;
        this.itemService = itemService;
        this.model = {};
        this.loading = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.parties = [];
        this.clauses = [];
        this.loadAllUsers();
        //this.initClauses();
        this.loadAllItems();
    }
    NewContractComponent.prototype.addContract = function () {
        var _this = this;
        this.loading = true;
        this.contractService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Adding successful', true);
            _this.router.navigate(['/contracts']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    NewContractComponent.prototype.register = function () {
        var _this = this;
        console.log("register() called");
        this.loading = true;
        this.model.clauses = this.clauses;
        this.contractService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/contracts']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
        //console.log(JSON.stringify(this.model));
    };
    NewContractComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) {
            _this.allUsers = users;
        });
    };
    NewContractComponent.prototype.loadAllItems = function () {
        var _this = this;
        this.itemService.getAll().subscribe(function (items) { _this.items = items; });
    };
    NewContractComponent.prototype.deleteParty = function (user) {
        this.parties = this.parties.filter(function (partie) { return partie.id != user.id; });
        console.log(user.id);
    };
    NewContractComponent.prototype.deleteClause = function (clause) {
        this.clauses = this.clauses.filter(function (clauseGot) { return clause.forId != clauseGot.forId || clause.fromId != clauseGot.fromId || clause.itemId != clauseGot.itemId; });
    };
    NewContractComponent.prototype.addParty = function () {
        var _this = this;
        var user = this.allUsers.filter(function (user) { return "" + user.id == _this.chosenParty; });
        this.parties = this.parties.concat(user);
    };
    NewContractComponent.prototype.addClause = function () {
        var _this = this;
        var clause = new index_2.Clause();
        clause.forUsername = this.forUser;
        clause.fromUsername = this.fromUser;
        clause.itemName = this.itemGived;
        console.log("forUser:" + clause.forUsername + " fromUser:" + clause.fromUsername + " item:" + clause.itemName);
        clause.forId = this.allUsers.filter(function (partie) { return partie.username == _this.forUser; })[0].id;
        clause.fromId = this.allUsers.filter(function (partie) { return partie.username == _this.fromUser; })[0].id;
        clause.itemId = this.items.filter(function (item) { return item.title == _this.itemGived; })[0].id;
        this.clauses.push(clause);
    };
    NewContractComponent = __decorate([
        core_1.Component({
            selector: 'new-contract',
            template: "\n\t<div class=\"header\">\n            <h1 id=\"mainTitle\">New contract</h1>\n            <div><a class=\"headerButton\" [routerLink]=\"['/contracts']\">< Back to Contracts</a></div>\n\t</div>\n    <div class=\"col-md-6 col-md-offset-3\">\n        <h1>Add a new contract</h1>\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n\t        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted}\">\n                <label for=\"title\">Title</label>\n                <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"model.title\" #firstName=\"ngModel\" required />\n                <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">Title is required</div>\n            </div>\n        </form>\n        <div>\n        <label >Parties</label>\n        <div *ngFor=\"let partie of parties\" >\n            <ul style=\"float: left; margin-right:20px; margin-top:10px\">\n                id:{{partie.username}}-{{partie.id}}\n            </ul>\n            <button class=\"btn btn-contract\" style=\"margin-top:10px\" (click)=\"deleteParty(partie)\">Delete</button> \n        </div>\n        <select [(ngModel)]=\"chosenParty\" style=\"margin-top:10px; margin-right:20px\">\n             <option *ngFor=\"let user of allUsers\" value={{user.id}}>{{user.username}}</option>\n        </select>\n        <button class=\"btn btn-contract\" style=\"margin-top:10px\" (click)=\"addParty()\">Add party</button>\n        </div>\n        <div>\n        <label style=\"margin-top:30px\">Clauses</label>\n        </div>\n        <div *ngFor=\"let clause of clauses\">\n            <ul style=\"float: left; margin-right:20px; margin-top:10px\">{{clause.fromUsername}}: {{clause.fromId}} gives {{clause.itemName}} to {{clause.forUsername}}: {{clause.forId}}</ul>\n            <button class=\"btn btn-contract\" style=\"margin-top:10px\" (click)=\"deleteClause(clause)\">Delete</button> \n        </div>\n        <div>\n            <label style=\"margin-top:30px;\">From</label>\n            <select [(ngModel)]=\"fromUser\" style=\"margin-top:10px; margin-left:20px\">\n                 <option *ngFor=\"let user of parties\" value={{user.username}}>{{user.username}}</option>\n            </select>\n        </div>\n        <div>\n            <label style=\"margin-top:30px;\">Gives</label>\n            <select [(ngModel)]=\"itemGived\" style=\"margin-top:10px; margin-left:20px\">\n                 <option *ngFor=\"let item of items\" value={{item.title}}>{{item.title}}</option>\n            </select>\n        </div>\n        <div>\n            <label style=\"margin-top:30px;\">For</label>\n            <select [(ngModel)]=\"forUser\" style=\"margin-top:10px; margin-left:20px\">\n                 <option *ngFor=\"let user of parties\" value={{user.username}}>{{user.username}}</option>\n            </select>\n        </div>\n        <button class=\"btn btn-contract\" style=\"margin-top:10px\" (click)=\"addClause()\">Add Clause</button>\n        <div style=\"margin-top:30px;\">\n            <button (click)=\"register()\" [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n        </div>\n    </div>\n\t"
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.ContractService, index_1.AlertService, index_1.UserService, index_1.ItemService])
    ], NewContractComponent);
    return NewContractComponent;
}());
exports.NewContractComponent = NewContractComponent;
// <form name="form" (ngSubmit)="f.form.valid && register()" #f="ngForm" novalidate>
//          <div class="form-group" [ngClass]="{ 'has-error': f.submitted}">
//            <label for="title">Title</label>
//          <input type="text" class="form-control" name="title" [(ngModel)]="model.title" #firstName="ngModel" required />
//        <div *ngIf="f.submitted && !firstName.valid" class="help-block">Title is required</div>
//  </div>
//</form>
//# sourceMappingURL=new-contract.component.js.map