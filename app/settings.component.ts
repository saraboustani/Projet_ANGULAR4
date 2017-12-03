import { Component } from '@angular/core';
import { User } from './_models/index';
import { Router} from '@angular/router';

@Component({
selector: 'settings',
template: `
	<div class="header">
            <h1 id="mainTitle">Settings</h1>
    </div>

	<div class="component">

	<h1>Settings</h1>
	<div> <p>Account name : {{currentUser.firstName}}</p> </div>
	  <button [routerLink]="['/change-password']" class="btn btn-primary">Change password</button>
	</div>
`,

})

export class SettingsComponent {
	currentUser: User;
	constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
	
}
