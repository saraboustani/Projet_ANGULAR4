import { Component } from '@angular/core';
//import { User } from './user';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/index';

@Component({
  
  selector: 'my-app',
//Bar de navigation: les boutons vers les pages autres que "login" sont cachées lorsqu'on est déconnecté
  template: `

		<div class="navBar">
			<ul id="navBarList">
				<li id="navBarHome"><a routerLink="/login" routerLinkActive="active" >Home</a></li>
				<li *ngIf="isLogged" id="navBarItems"><a routerLink="/items" routerLinkActive="active" >Items</a></li>
				<li *ngIf="isLogged" id="navBarSearch"><a routerLink="/search" routerLinkActive="active" >Search</a></li>
				<li *ngIf="isLogged" id="navBarMesages"><a routerLink="/messages" routerLinkActive="active" >Messages</a></li>
				<li *ngIf="isLogged" id="navBarContracts"><a routerLink="/contracts" routerLinkActive="active" >Contracts</a></li>
				<li *ngIf="isLogged" id="navBarSettings"><a routerLink="/settings" routerLinkActive="active" >Settings</a></li>
				<li *ngIf="isLogged" id="navBarAccount"><a routerLink="/account" routerLinkActive="active" >Account</a></li>
				<li *ngIf="isLogged" id="navBarAbout"><a routerLink="/about" routerLinkActive="active" >About</a></li>
				<li *ngIf="isLogged" id="navBarLogout"><a routerLink="/login" routerLinkActive="active" >Logout</a></li>
			</ul>
		</div>
		<div class="content" >
      <alert></alert>
	     <router-outlet ></router-outlet>
		</div>
	`
})

export class AppComponent {

	isLogged=false;

	constructor(private authenticationService: AuthenticationService) {
	//On recupere le boolean isLogged du service AuthenticationService partagé avec loginComponent (voir page AuthenticationService pour + d'infos)
    authenticationService.isLogged$.subscribe(isLogged =>this.isLogged=isLogged);
  }

}
