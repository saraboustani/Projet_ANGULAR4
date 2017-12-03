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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// used to create fake backend
var index_1 = require('./_helpers/index');
var testing_1 = require('@angular/http/testing');
var http_2 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var index_2 = require('./_directives/index');
var index_3 = require('./_guards/index');
var index_4 = require('./_services/index');
var index_5 = require('./home/index');
var index_6 = require('./login/index');
var index_7 = require('./register/index');
var items_component_1 = require('./items.component');
var add_component_1 = require('./add.component');
var search_component_1 = require('./search.component');
var messages_component_1 = require('./messages.component');
var newmessage_component_1 = require('./newmessage.component');
var settings_component_1 = require('./settings.component');
var account_component_1 = require('./account.component');
var item_details_component_1 = require('./item-details.component');
var change_password_component_1 = require('./change-password.component');
var new_contract_component_1 = require('./new-contract.component');
var contract_component_1 = require('./contract.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                index_2.AlertComponent,
                index_5.HomeComponent,
                index_6.LoginComponent,
                index_7.RegisterComponent,
                items_component_1.ItemsComponent,
                add_component_1.AddComponent,
                search_component_1.SearchComponent,
                messages_component_1.MessagesComponent,
                newmessage_component_1.NewMessageComponent,
                settings_component_1.SettingsComponent,
                account_component_1.AccountComponent,
                item_details_component_1.ItemDetailsComponent,
                change_password_component_1.ChangePasswordComponent,
                new_contract_component_1.NewContractComponent,
                contract_component_1.ContractsComponent
            ],
            providers: [
                index_3.AuthGuard,
                index_4.AlertService,
                index_4.AuthenticationService,
                index_4.UserService,
                index_4.ItemService,
                index_4.MessageService,
                index_4.ContractService,
                // providers used to create fake backend
                index_1.fakeBackendProvider,
                testing_1.MockBackend,
                http_2.BaseRequestOptions
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map