import { Component } from '@angular/core';
//import { User } from './user';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/index';

@Component({
  
  selector: 'my-app',
  template: `

		<div class="navBar">
			<ul id="navBarList">
				<li id="navBarHome"><a routerLink="/login" routerLinkActive="active" >Home</a></li>
				<li *ngIf="isLogged[0]" id="navBarItems"><a routerLink="/items" routerLinkActive="active" >Items</a></li>
				<li *ngIf="isLogged[0]" id="navBarSearch"><a routerLink="/search" routerLinkActive="active" >Search</a></li>
				<li *ngIf="isLogged[0]" id="navBarMesages"><a routerLink="/messages" routerLinkActive="active" >Messages</a></li>
				<li *ngIf="isLogged[0]" id="navBarContracts"><a routerLink="/contracts" routerLinkActive="active" >Contracts</a></li>
				<li *ngIf="isLogged[0]" id="navBarSettings"><a routerLink="/settings" routerLinkActive="active" >Settings</a></li>
				<li *ngIf="isLogged[0]" id="navBarAccount"><a routerLink="/account" routerLinkActive="active" >Account</a></li>
				<li *ngIf="isLogged[0]" id="navBarAbout"><a routerLink="/about" routerLinkActive="active" >About</a></li>
				<li *ngIf="isLogged[0]" id="navBarLogout"><a routerLink="/logout" routerLinkActive="active" >Logout</a></li>
			</ul>
		</div>
		<div class="content" >
      <alert></alert>
	     <router-outlet ></router-outlet>
		</div>
	`
})

export class AppComponent {

	isLogged=[false];

	constructor(private authenticationService: AuthenticationService) {
    authenticationService.isLogged$.subscribe(isLogged =>this.isLogged[0]=isLogged);
  }

}
