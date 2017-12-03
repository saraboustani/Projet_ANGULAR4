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
var ItemDetailsComponent = (function () {
    //private item : Item;
    function ItemDetailsComponent(router, route, itemService, alertService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.itemService = itemService;
        this.alertService = alertService;
        this.loading = false;
        itemService.getAll().subscribe(function (items) { _this.items = items; }); //TODO (!) code sale!!recuperer le bon item avec itemservice.getById(id)
    }
    ItemDetailsComponent.prototype.getItemId = function () {
        return this.route.snapshot.params["itemID"];
    };
    ItemDetailsComponent.prototype.delete = function () {
        var _this = this;
        this.itemService.delete(this.getItemId())
            .subscribe(function (data) {
            _this.alertService.success('Delete successful', true);
            _this.router.navigate(['/items']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    ItemDetailsComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t<div class=\"header\">\n            <h1 id=\"mainTitle\">Item Details</h1>\n            <div><a class=\"headerButton\" [routerLink]=\"['/items']\">< Back to Items</a></div>\n\t</div>\n\t\n    <div class=\"col-md-6 col-md-offset-3\">\n        <div *ngFor=\"let item of items\">\n            <h2 *ngIf=\"item.id==getItemId()\">\n                {{item.title}}\n            </h2>\n\n            <ul *ngIf=\"item.id==getItemId()\">\n                {{item.description}}\n            </ul>\n            <div *ngIf=\"item.id==getItemId()\">\n                <img src={{item.url}} width=\"500px\"/>\n            </div>\n        </div>\n        <button style=\"margin-top:30px;\" (click)=\"delete()\" [disabled]=\"loading\" class=\"btn btn-primary\">Delete</button>\n    </div>\n\t"
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, index_1.ItemService, index_1.AlertService])
    ], ItemDetailsComponent);
    return ItemDetailsComponent;
}());
exports.ItemDetailsComponent = ItemDetailsComponent;
//# sourceMappingURL=item-details.component.js.map