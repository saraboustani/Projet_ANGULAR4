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
var ContractsComponent = (function () {
    function ContractsComponent(contractService, router) {
        this.contractService = contractService;
        this.router = router;
        //users: User[] = [];
        this.contracts = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.loadUserContracts();
        //console.log("clause length"+this.contracts.length);
    }
    ContractsComponent.prototype.ngOnInit = function () {
        this.loadAllContracts();
    };
    ContractsComponent.prototype.deleteContract = function (id) {
        var _this = this;
        this.contractService.delete(id).subscribe(function () { _this.loadAllContracts(); });
    };
    ContractsComponent.prototype.loadAllContracts = function () {
        var _this = this;
        this.contractService.getAll().subscribe(function (contracts) { _this.contracts = contracts; });
    };
    ContractsComponent.prototype.isUserContract = function (contract) {
        var _this = this;
        var response = false;
        contract.clauses.map(function (clause) { if (clause.forId == _this.currentUser.id || clause.fromId == _this.currentUser.id)
            response = true; });
        console.log("isUserContract:" + response);
        return response;
    };
    ContractsComponent.prototype.loadUserContracts = function () {
        var _this = this;
        this.contractService.getAll().subscribe(function (contracts) { _this.contracts = contracts; });
        this.contracts = this.contracts.filter(function (contract) { return (_this.isUserContract(contract)); });
    };
    ContractsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contracts',
            template: "\n    <div class=\"header\">\n            <h1 id=\"mainTitle\">Contracts</h1>\n            <div><a class=\"headerButton\" [routerLink]=\"['/new-contract']\">+ Add</a></div>\n    </div>\n\n    <div style=\"margin-top:30px;\" *ngFor=\"let contract of contracts\">\n\t<table>\n        <tr *ngFor=\"let clause of contract.clauses\">\n\t\t<div *ngIf=\"clause.forId==currentUser.id || clause.fromId==currentUser.id\"> \n            {{clause.fromUsername}} gives {{clause.itemName}} to {{clause.forUsername}} </div>\n        </tr>\n\t</table>\n    </div>\n\n  "
        }), 
        __metadata('design:paramtypes', [index_1.ContractService, router_1.Router])
    ], ContractsComponent);
    return ContractsComponent;
}());
exports.ContractsComponent = ContractsComponent;
//# sourceMappingURL=contract.component.js.map