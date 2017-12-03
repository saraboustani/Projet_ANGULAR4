"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./home/index');
var index_2 = require('./login/index');
var index_3 = require('./register/index');
var index_4 = require('./_guards/index');
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
var appRoutes = [
    { path: '', component: index_1.HomeComponent, canActivate: [index_4.AuthGuard] },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'register', component: index_3.RegisterComponent },
    { path: 'items', component: items_component_1.ItemsComponent },
    { path: 'add', component: add_component_1.AddComponent },
    { path: 'search', component: search_component_1.SearchComponent },
    { path: 'messages', component: messages_component_1.MessagesComponent },
    { path: 'newmessage', component: newmessage_component_1.NewMessageComponent },
    { path: 'settings', component: settings_component_1.SettingsComponent },
    { path: 'account', component: account_component_1.AccountComponent },
    { path: 'item-details/:itemID', component: item_details_component_1.ItemDetailsComponent },
    { path: 'change-password', component: change_password_component_1.ChangePasswordComponent },
    { path: 'new-contract', component: new_contract_component_1.NewContractComponent },
    { path: 'contracts', component: contract_component_1.ContractsComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map