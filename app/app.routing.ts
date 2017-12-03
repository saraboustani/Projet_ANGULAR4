import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

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

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'items', component: ItemsComponent },
    { path: 'add', component: AddComponent },
    { path: 'search', component: SearchComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'newmessage', component: NewMessageComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'account', component: AccountComponent },
    { path: 'item-details/:itemID', component: ItemDetailsComponent },
    { path: 'change-password', component: ChangePasswordComponent },
    { path: 'new-contract', component: NewContractComponent },
    { path: 'contracts', component: ContractsComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
