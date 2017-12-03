import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, ItemService, MessageService, ContractService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

import { ItemsComponent }  from './items.component';
import { AddComponent }  from './add.component';
import { SearchComponent }  from './search.component';
import { MessagesComponent }  from './messages.component';
import { NewMessageComponent }  from './newmessage.component';
import { SettingsComponent }  from './settings.component';
import { AccountComponent }  from './account.component';
import { ItemDetailsComponent }  from './item-details.component';
import { ChangePasswordComponent }  from './change-password.component';
import { NewContractComponent }  from './new-contract.component';
import { ContractsComponent }  from './contract.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
	    ItemsComponent,
	    AddComponent,
	    SearchComponent,
	    MessagesComponent,
	    NewMessageComponent,
	    SettingsComponent,
	    AccountComponent,
        ItemDetailsComponent,
        ChangePasswordComponent,
        NewContractComponent,
        ContractsComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        ItemService,
        MessageService,
        ContractService,
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
