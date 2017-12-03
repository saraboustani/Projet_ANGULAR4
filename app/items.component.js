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
var ItemsComponent = (function () {
    function ItemsComponent(itemService, router) {
        this.itemService = itemService;
        this.router = router;
        //users: User[] = [];
        this.items = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.loadAllItems();
    };
    ItemsComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.itemService.delete(id).subscribe(function () { _this.loadAllItems(); });
    };
    ItemsComponent.prototype.loadAllItems = function () {
        var _this = this;
        this.itemService.getAll().subscribe(function (items) { _this.items = items; });
    };
    ItemsComponent.prototype.loadUsersItems = function () {
        var _this = this;
        this.itemService.getItemsByUserId().subscribe(function (items) { _this.items = items; });
    };
    ItemsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'items',
            styles: ["\n         #tableCustomers {\n            font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n            border-collapse: collapse;\n            width: 100%;\n\t    position: relative;\n   \t    top: 30px;\n        }\n\n        #tableCustomers td, #customers th {\n            border: 1px solid #ddd;\n            padding: 8px;\n        }\n\n        #tableCustomers tr:nth-child(even){background-color: #f2f2f2;}\n\n        #tableCustomers tr:hover {background-color: #ddd;}\n\n        #tableCustomers th {\n            padding-top: 12px;\n            padding-bottom: 12px;\n            padding-left: 8px;\n            background-color: #4CAF50;\n            color: white;\n        }\n    "],
            template: "\n    <div class=\"header\">\n            <h1 id=\"mainTitle\">Item</h1>\n            <div><a class=\"headerButton\" [routerLink]=\"['/add']\">+ Add</a></div>\n    </div>\n   \n        <h1>Items of {{currentUser.firstName}}!</h1>\n        <!-- <h2>Items of !</h2>\n        <h3>All registered items:</h3> -->\n\t <p><a [routerLink]=\"['/login']\">Logout</a></p>\n        <ul>\n            <!-- better to show items without the userId, but for the moment its still like that -->\n            <table id=\"tableCustomers\">\n                <th>  Item</th>\n                <th>ID</th>\n                <tr *ngFor=\"let item of items\" [routerLink]=\"['/item-details',item.id]\">\n                    <td *ngIf=\"item.userId==currentUser.id\">{{item.title}}</td>\n                    <td *ngIf=\"item.userId==currentUser.id\">{{item.id}}</td>\n                </tr>\n            </table>\n\n        </ul>\n       \n    \n  "
        }), 
        __metadata('design:paramtypes', [index_1.ItemService, router_1.Router])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=items.component.js.map