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
var AddComponent = (function () {
    function AddComponent(router, itemService, alertService) {
        this.router = router;
        this.itemService = itemService;
        this.alertService = alertService;
        this.model = {};
        this.pathFile = null;
        //user: currentUser;
        this.loading = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    AddComponent.prototype.addItem = function () {
        var _this = this;
        this.loading = true;
        this.model.url = this.url;
        this.itemService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Adding successful', true);
            _this.router.navigate(['/items']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    AddComponent.prototype.openFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            console.log(this.url);
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    AddComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add',
            template: "\n<div class=\"header\">\n            <h1 id=\"mainTitle\">Add Item</h1>\n            <div><a class=\"headerButton\" [routerLink]=\"['/items']\">< Back</a></div>\n    </div>\n\n<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Add a new item</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && addItem()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !title.valid }\">\n            <label for=\"title\">Title</label>\n            <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"model.title\" #title=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !title.valid\" class=\"help-block\">Title is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !description.valid }\">\n            <label for=\"description\">Description</label>\n            <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"model.description\" #description=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !description.valid\" class=\"help-block\">Description is required</div>\n        </div>\n\n        <label for=\"picture\">Picture</label>\n        <input type=\"file\" id=\"selectFile\" class=\"btn btn-success\" (change)=\"openFile($event)\"/>\n\n        <div class=\"form-group\" style=\"padding-top:20px\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Submit</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/items']\" class=\"btn btn-link\">Cancel</a>\n        </div>\n    </form>\n</div>\n",
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.ItemService, index_1.AlertService])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
//# sourceMappingURL=add.component.js.map